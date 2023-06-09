import Link from "next/link";
import styles from "../page.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/skills">Experiences</Link>
        </li>
        <li>
          <Link href="/login">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
}
