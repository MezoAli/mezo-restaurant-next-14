"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "@/styles/main-header.module.css";
const NavLinks = () => {
  const pathname = usePathname();
  const menues = [
    { name: "Browse Meals", link: "/meals" },
    { name: "Foodies Community", link: "/community" },
  ];

  return (
    <ul>
      {menues?.map((item) => {
        const active = pathname === item.link;
        return (
          <li key={item.name}>
            <Link href={item.link} className={active ? classes.active : ""}>
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
