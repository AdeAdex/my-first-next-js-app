import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./ade.png";
import styles from '../Navbar/styles.module.css'

const Navbar = () => {
  return (
    <>
      <section className={`${styles.navbar} flex gap-20 m-10 py-4 px-10`}>
        <Image
          src={Logo}
          alt="Adex logo"
          width={50}
          quality={100}
        //   placeholder="blur"
        />
        <Link className="my-auto" href="/">Home</Link>
        <Link className="my-auto" href="/news">news</Link>
        <Link className="my-auto" href="/user">user</Link>
        <Link className="my-auto" href="/news/latest">latest</Link>
      </section>
    </>
  );
};

export default Navbar;
