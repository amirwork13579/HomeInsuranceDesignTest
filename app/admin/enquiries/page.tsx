import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Activity,
  CheckCircle2,
  Clock3,
  Download,
  Inbox,
  LayoutDashboard,
  LogOut,
  Search,
  ShieldCheck,
  SquareArrowOutUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { chatGPTSignOutPath } from "@/app/chatgpt-auth";
import {
  getEnquiryReport,
  getEnquiryStats,
  listEnquiries,
} from "@/db/enquiries";
import { requireAdminUser } from "@/lib/admin-auth";
import {
  ENQUIRY_STATUSES,
  ENQUIRY_STATUS_LABELS,
  isEnquiryStatus,
} from "@/lib/enquiry-status";

import { EnquiriesDashboard } from "./enquiries-dashboard";
import { EnquiryReport } from "./enquiry-report";
import styles from "./admin.module.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Enquiries | Home Claims Assist Admin",
  robots: { index: false, follow: false },
};

const PAGE_SIZE = 20;

type AdminSearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pageHref(page: number, query: string, status?: string) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (status) params.set("status", status);
  if (page > 1) params.set("page", String(page));
  const search = params.toString();
  return `/admin/enquiries${search ? `?${search}` : ""}`;
}

function exportHref(query: string, status?: string) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (status) params.set("status", status);
  const search = params.toString();
  return `/api/admin/enquiries/export${search ? `?${search}` : ""}`;
}

function visiblePages(current: number, total: number) {
  const start = Math.max(1, Math.min(current - 2, total - 4));
  const end = Math.min(total, start + 4);
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

export default async function EnquiriesAdminPage({
  searchParams,
}: {
  searchParams: AdminSearchParams;
}) {
  const admin = await requireAdminUser("/admin/enquiries");
  const params = await searchParams;
  const query = (firstValue(params.q) ?? "").trim().slice(0, 100);
  const rawStatus = firstValue(params.status);
  const status = isEnquiryStatus(rawStatus) ? rawStatus : undefined;
  const requestedPage = Number.parseInt(firstValue(params.page) ?? "1", 10);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  const [{ enquiries, total }, stats, report] = await Promise.all([
    listEnquiries({ page, pageSize: PAGE_SIZE, query, status }),
    getEnquiryStats(),
    getEnquiryReport(),
  ]);
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  if (total > 0 && page > totalPages) {
    redirect(pageHref(totalPages, query, status));
  }

  const pageNumbers = visiblePages(Math.min(page, totalPages), totalPages);
  const resultLabel = total === 1 ? "1 enquiry" : `${total} enquiries`;

  const statCards = [
    { label: "New", value: stats.new, icon: Inbox, tone: styles.statBlue },
    { label: "Contacted", value: stats.contacted, icon: Clock3, tone: styles.statAmber },
    { label: "In progress", value: stats.inProgress, icon: Activity, tone: styles.statPurple },
    { label: "Resolved", value: stats.resolved, icon: CheckCircle2, tone: styles.statGreen },
  ];

  return (
    <div className={styles.adminShell}>
      <aside className={styles.sidebar}>
        <div className={styles.adminBrand}>
          <span><ShieldCheck aria-hidden="true" /></span>
          <div><strong>HCA Admin</strong><small>Claims workspace</small></div>
        </div>
        <nav aria-label="Admin navigation">
          <Link href="/admin/enquiries" aria-current="page"><LayoutDashboard aria-hidden="true" /> Enquiries <span>{stats.new}</span></Link>
          <a href="/" target="_blank" rel="noreferrer"><SquareArrowOutUpRight aria-hidden="true" /> View website</a>
        </nav>
        <div className={styles.sidebarUser}>
          <span>{admin.displayName.slice(0, 1).toUpperCase()}</span>
          <div><strong>{admin.displayName}</strong><small>{admin.email}</small></div>
          <a href={chatGPTSignOutPath("/")} aria-label="Sign out"><LogOut aria-hidden="true" /></a>
        </div>
      </aside>

      <main className={styles.adminMain}>
        <header className={styles.adminHeader}>
          <div><p>Claims workspace</p><h1>Customer enquiries</h1><span>Review consultation requests and keep every claim moving.</span></div>
          <div className={styles.headerActions}>
            <span className={styles.totalPill}><b>{stats.total}</b> total enquiries</span>
            <a href="/" target="_blank" rel="noreferrer">Open website <SquareArrowOutUpRight aria-hidden="true" /></a>
          </div>
        </header>

        <div className={styles.adminContent}>
          <section className={styles.statsGrid} aria-label="Enquiry summary">
            {statCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.label} className={styles.statCard}>
                  <CardHeader><CardTitle>{card.label}</CardTitle><span className={card.tone}><Icon aria-hidden="true" /></span></CardHeader>
                  <CardContent><strong>{card.value}</strong><small>{stats.total ? `${Math.round((card.value / stats.total) * 100)}% of total` : "No enquiries yet"}</small></CardContent>
                </Card>
              );
            })}
          </section>

          <EnquiryReport report={report} />

          <Card className={styles.workspaceCard}>
            <div className={styles.workspaceTop}>
              <div><p>Enquiry queue</p><h2>{resultLabel}</h2></div>
              <div className={styles.workspaceControls}>
                <form action="/admin/enquiries" method="get" className={styles.filters}>
                  <label className={styles.searchField}><span className="sr-only">Search enquiries</span><Search aria-hidden="true" /><Input name="q" defaultValue={query} placeholder="Search customer, email or claim..." /></label>
                  <NativeSelect name="status" defaultValue={status ?? ""} aria-label="Filter by status">
                    <NativeSelectOption value="">All statuses</NativeSelectOption>
                    {ENQUIRY_STATUSES.map((value) => <NativeSelectOption key={value} value={value}>{ENQUIRY_STATUS_LABELS[value]}</NativeSelectOption>)}
                  </NativeSelect>
                  <Button type="submit">Filter</Button>
                  {(query || status) && <Button variant="ghost" asChild><Link href="/admin/enquiries">Clear</Link></Button>}
                </form>
                <a
                  className={styles.exportButton}
                  href={exportHref(query, status)}
                  title="Download up to 5,000 matching enquiries as CSV"
                >
                  <Download aria-hidden="true" /> Export CSV
                </a>
              </div>
            </div>

            <EnquiriesDashboard enquiries={enquiries} />

            {totalPages > 1 && (
              <div className={styles.paginationRow}>
                <span>Page {Math.min(page, totalPages)} of {totalPages}</span>
                <Pagination>
                  <PaginationContent>
                    {page > 1 && <PaginationItem><PaginationPrevious href={pageHref(page - 1, query, status)} /></PaginationItem>}
                    {pageNumbers.map((pageNumber) => (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink href={pageHref(pageNumber, query, status)} isActive={pageNumber === page}>{pageNumber}</PaginationLink>
                      </PaginationItem>
                    ))}
                    {page < totalPages && <PaginationItem><PaginationNext href={pageHref(page + 1, query, status)} /></PaginationItem>}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </Card>
        </div>
      </main>
    </div>
  );
}
