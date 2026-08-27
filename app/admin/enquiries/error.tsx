"use client";

import { CircleAlert } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import styles from "./admin.module.css";

export default function EnquiriesError({ reset }: { reset: () => void }) {
  return (
    <main className={styles.errorShell}>
      <Alert variant="destructive" className={styles.errorCard}>
        <CircleAlert aria-hidden="true" />
        <AlertTitle>Enquiries could not be loaded</AlertTitle>
        <AlertDescription>The database may still be preparing. Try again in a moment.</AlertDescription>
      </Alert>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
