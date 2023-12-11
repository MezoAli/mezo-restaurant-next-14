import Link from "next/link";
import LogoImage from "@/assets/logo.png";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={LogoImage.src}
        alt="a plate with food on it"
        width={LogoImage.width}
      />
      NextLevel Food
    </Link>
  );
};

export default Logo;
