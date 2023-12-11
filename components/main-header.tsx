import Link from "next/link";
import Logo from "./logo";
import classes from "@/styles/main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
