"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./ade.png";
import styles from '../Navbar/styles.module.css';
import useWindowSize from "@/app/utils/useWindowSize";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const { width } = useWindowSize();
  const [showDropdown, setShowDropdown] = useState(false);
  const isMobile = width <= 600;
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  }
  

  return (
    <>
      <section className={`${styles.navbar} flex m-0 py-4 px-10 lg:px-20`}>
      <Link href="/" className="w-1/2">
      <Image
          src={Logo}
          alt="Adex logo"
          width={50}
          quality={100}
        />
      </Link>
        
        {isMobile ? (
          <div className="w-1/2 flex justify-end">
          <button className="my-auto" onClick={toggleDropdown}>
          <FiMenu size={30}/> 
          </button>
          </div>
          
        ) : (
          <div className="flex w-1/2 justify-end gap-20">
            <Link className="my-auto" href="/">Home</Link>
            <Link className="my-auto" href="/news">News</Link>
            <Link className="my-auto" href="/user">User</Link>
            <Link className="my-auto" href="/news/latest">Latest</Link>
          </div>
        )}
        {showDropdown && isMobile && (
          <div className={`${styles.dropdown} ${showDropdown ? `${styles.open} h-screen` : ''}`}>
            <Link onClick={handleClick} href="/">Home</Link>
            <Link onClick={handleClick} href="/news">News</Link>
            <Link onClick={handleClick} href="/user">User</Link>
            <Link onClick={handleClick} href="/news/latest">Latest</Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;
