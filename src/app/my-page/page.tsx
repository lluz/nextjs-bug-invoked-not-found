import Link from "next/link";
import styles from "../page.module.css";

export default function MyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <div>
          ----------------- MyPage -----------------

          <br />
          <br />
          <Link 
            href="/"
            style={{textDecoration: 'underline'}}
          >&lt; Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
