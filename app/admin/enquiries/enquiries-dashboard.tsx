"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  Inbox,
  Mail,
  MessageSquareText,
  Phone,
  UserRound,
} from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { EnquiryRecord } from "@/db/enquiries";
import {
  ENQUIRY_STATUSES,
  ENQUIRY_STATUS_LABELS,
  type EnquiryStatus,
} from "@/lib/enquiry-status";

import styles from "./admin.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/London",
});

const statusClassNames: Record<EnquiryStatus, string> = {
  new: styles.statusNew,
  contacted: styles.statusContacted,
  in_progress: styles.statusInProgress,
  resolved: styles.statusResolved,
};

function formatCreatedAt(value: string) {
  const normalized = value.includes("T") ? value : `${value.replace(" ", "T")}Z`;
  const date = new Date(normalized);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

function sourceLabel(source: EnquiryRecord["source"]) {
  return source === "homepage" ? "Homepage" : "Contact page";
}

function StatusBadge({ status }: { status: EnquiryStatus }) {
  return (
    <Badge variant="secondary" className={`${styles.statusBadge} ${statusClassNames[status]}`}>
      <span />
      {ENQUIRY_STATUS_LABELS[status]}
    </Badge>
  );
}

export function EnquiriesDashboard({ enquiries }: { enquiries: EnquiryRecord[] }) {
  const router = useRouter();
  const [statusOverrides, setStatusOverrides] = useState<Record<string, EnquiryStatus>>({});
  const [selected, setSelected] = useState<EnquiryRecord | null>(null);
  const [nextStatus, setNextStatus] = useState<EnquiryStatus>("new");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saved, setSaved] = useState(false);

  const rows = enquiries.map((enquiry) => ({
    ...enquiry,
    status: statusOverrides[enquiry.id] ?? enquiry.status,
  }));

  function openEnquiry(enquiry: EnquiryRecord) {
    setSelected(enquiry);
    setNextStatus(enquiry.status);
    setSaveError("");
    setSaved(false);
  }

  async function saveStatus() {
    if (!selected || nextStatus === selected.status) return;

    setSaving(true);
    setSaveError("");
    setSaved(false);

    try {
      const response = await fetch(`/api/admin/enquiries/${encodeURIComponent(selected.id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "The status could not be updated.");
      }

      const updated = { ...selected, status: nextStatus };
      setStatusOverrides((current) => ({ ...current, [updated.id]: updated.status }));
      setSelected(updated);
      setSaved(true);
      router.refresh();
    } catch (error) {
      setSaveError(
        error instanceof Error ? error.message : "The status could not be updated."
      );
    } finally {
      setSaving(false);
    }
  }

  if (!rows.length) {
    return (
      <Empty className={styles.emptyState}>
        <EmptyHeader>
          <EmptyMedia variant="icon"><Inbox aria-hidden="true" /></EmptyMedia>
          <EmptyTitle>No enquiries found</EmptyTitle>
          <EmptyDescription>Try clearing the filters, or check back after a new consultation request arrives.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <>
      <div className={styles.desktopTable}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Claim</TableHead>
              <TableHead>Received</TableHead>
              <TableHead>Status</TableHead>
              <TableHead><span className="sr-only">Actions</span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((enquiry) => (
              <TableRow key={enquiry.id}>
                <TableCell>
                  <span className={styles.customerCell}>
                    <strong>{enquiry.firstName} {enquiry.lastName}</strong>
                    <small>{enquiry.email}</small>
                  </span>
                </TableCell>
                <TableCell>
                  <span className={styles.claimCell}>
                    <strong>{enquiry.claimType || "Not specified"}</strong>
                    <small>{sourceLabel(enquiry.source)}</small>
                  </span>
                </TableCell>
                <TableCell className={styles.dateCell}>{formatCreatedAt(enquiry.createdAt)}</TableCell>
                <TableCell><StatusBadge status={enquiry.status} /></TableCell>
                <TableCell className={styles.actionCell}>
                  <Button variant="ghost" size="sm" onClick={() => openEnquiry(enquiry)}>
                    View <ArrowUpRight aria-hidden="true" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className={styles.mobileList}>
        {rows.map((enquiry) => (
          <button type="button" key={enquiry.id} onClick={() => openEnquiry(enquiry)}>
            <span className={styles.mobileCardTop}>
              <strong>{enquiry.firstName} {enquiry.lastName}</strong>
              <StatusBadge status={enquiry.status} />
            </span>
            <span>{enquiry.claimType || "Claim type not specified"}</span>
            <small>{formatCreatedAt(enquiry.createdAt)} · {sourceLabel(enquiry.source)}</small>
          </button>
        ))}
      </div>

      <Sheet open={Boolean(selected)} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <SheetContent className={styles.detailSheet}>
          {selected && (
            <>
              <SheetHeader className={styles.detailHeader}>
                <span className={styles.detailEyebrow}>Enquiry details</span>
                <SheetTitle>{selected.firstName} {selected.lastName}</SheetTitle>
                <SheetDescription>Received {formatCreatedAt(selected.createdAt)} from the {sourceLabel(selected.source).toLowerCase()}.</SheetDescription>
              </SheetHeader>

              <div className={styles.detailBody}>
                <div className={styles.contactActions}>
                  <a href={`mailto:${selected.email}`}><Mail aria-hidden="true" /><span><small>Email</small><strong>{selected.email}</strong></span></a>
                  <a href={`tel:${selected.phone}`}><Phone aria-hidden="true" /><span><small>Phone</small><strong>{selected.phone}</strong></span></a>
                </div>

                <dl className={styles.detailGrid}>
                  <div><dt><UserRound aria-hidden="true" /> Customer</dt><dd>{selected.firstName} {selected.lastName}</dd></div>
                  <div><dt><CalendarDays aria-hidden="true" /> Received</dt><dd>{formatCreatedAt(selected.createdAt)}</dd></div>
                  <div><dt>Claim type</dt><dd>{selected.claimType || "Not specified"}</dd></div>
                  <div><dt>Source</dt><dd>{sourceLabel(selected.source)}</dd></div>
                </dl>

                <section className={styles.messageCard}>
                  <h3><MessageSquareText aria-hidden="true" /> Customer message</h3>
                  <p>{selected.message || "No additional message was provided."}</p>
                </section>

                <section className={styles.statusEditor}>
                  <div><small>Workflow</small><h3>Update status</h3></div>
                  <Select value={nextStatus} onValueChange={(value) => { setNextStatus(value as EnquiryStatus); setSaved(false); }}>
                    <SelectTrigger aria-label="Enquiry status"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {ENQUIRY_STATUSES.map((status) => (
                        <SelectItem key={status} value={status}>{ENQUIRY_STATUS_LABELS[status]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button onClick={saveStatus} disabled={saving || nextStatus === selected.status}>
                    {saving ? "Saving..." : "Save status"}
                  </Button>
                </section>

                {saveError && (
                  <Alert variant="destructive">
                    <AlertTitle>Update failed</AlertTitle>
                    <AlertDescription>{saveError}</AlertDescription>
                  </Alert>
                )}
                {saved && (
                  <Alert className={styles.savedAlert}>
                    <Check aria-hidden="true" />
                    <AlertTitle>Status updated</AlertTitle>
                    <AlertDescription>The enquiry workflow is now up to date.</AlertDescription>
                  </Alert>
                )}
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
}
