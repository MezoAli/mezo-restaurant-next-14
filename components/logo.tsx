import Link from "next/link";
import LogoImage from "@/assets/logo.png";
import Image from "next/image";
import classes from "@/styles/main-header.module.css";

const Logo = () => {
  return (
    <Link className={classes.logo} href="/">
      <Image
        src={LogoImage}
        alt="a plate with food on it"
        priority
        // width={LogoImage.width}
        // height={1000}
      />
      NextLevel Food
    </Link>
  );
};

export default Logo;
