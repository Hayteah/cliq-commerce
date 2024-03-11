import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full z-30 bg-gray-50 ">
      <div className="py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href="/">
              <Image src='/img/default.png' width={80} height={150} alt="home page Logo" />
            </Link>
            <div className="md:block hidden">Search Bar</div>
            <div className="flex items-center gap-8 md:gap-12">
                <div>Cart</div>
                <div>User Account</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
