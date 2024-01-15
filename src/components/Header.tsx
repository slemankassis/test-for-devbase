import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <nav className={styles.title}>
        {pathname !== "/" && <Link href="/">Back</Link>}
        <h1>Home</h1>
      </nav>
    </header>
  );
};

export default Header;
