import Link from "next/link";
import styles from "./styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_menus}>
        <li className={styles.li}>
          <Link href="/">메인</Link>
        </li>
        <li className={styles.li}>
          <Link href="/board/board">공원 등록</Link>
        </li>
        <li className={styles.li}>
          <Link href="/board/board-list">공원 목록</Link>
        </li>
      </ul>
      <ul className={styles.nav_auth}>
        <li className={styles.li}>
          <Link href="/user/join">회원가입</Link>
        </li>
        <li className={styles.li}>
          <Link href="/user/login">로그인</Link>
        </li>
      </ul>
    </nav>
  );
}
