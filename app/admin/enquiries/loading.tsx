import { Skeleton } from "@/components/ui/skeleton";

import styles from "./admin.module.css";

export default function EnquiriesLoading() {
  return (
    <div className={styles.loadingShell} aria-label="Loading enquiries">
      <Skeleton className={styles.loadingSidebar} />
      <div className={styles.loadingMain}>
        <Skeleton className={styles.loadingHeader} />
        <div className={styles.loadingCards}>{Array.from({ length: 4 }, (_, index) => <Skeleton key={index} />)}</div>
        <Skeleton className={styles.loadingTable} />
      </div>
    </div>
  );
}
