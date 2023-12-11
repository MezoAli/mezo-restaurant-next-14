import Logo from "./logo";
import classes from "@/styles/main-header.module.css";
import NavLinks from "./navLinks";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Logo />
      <nav className={classes.nav}>
        <NavLinks />
      </nav>
    </header>
  );
};

export default MainHeader;
