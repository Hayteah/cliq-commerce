import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Categories = [
  { name: "Phones" },
  { name: "Laptops" },
  { name: "Desktops" },
  { name: "Watches" },
  { name: "TVs" },
  { name: "Accesories" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white text-sm mt-16 ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-lg font-bold mb-2">Shop Categories</h3>
            {Categories.map((category) => (
              <Link href="#" key={category.name}>
                {category.name}
              </Link>
            ))}
          </FooterList>
          <FooterList>
            <h3 className="text-lg font-bold mb-2">Customer Service</h3>
            <Link href="#">Contact Us </Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns and Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className=" w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About us</h3>
            <p className="mb-2 text-justify">
              CliqNShop has grown from a small local retailer to one of the
              premier destinations for high-quality electronic goods. Our
              journey began in Berlin Germany, with a simple mission: to bring
              the latest in technology to our community at competitive prices.
              Today, we offer a vast selection of products from the world's
              leading brands, serving thousands of satisfied customers across
              the nation.
            </p>
            <p>
              &copy; {new Date().getFullYear()} CliqNShop. All rights reserved.
            </p>
          </div>
          <FooterList>
            <h3 className="text-lg font-bold mb-2">Follow us</h3>
            <div className="flex gap-2 text-2xl">
              <Link href="#">
                <MdFacebook />
              </Link>
              <Link href="#">
                <RiTwitterXFill />
              </Link>
              <Link href="#">
                <AiFillInstagram />
              </Link>
              <Link href="#">
                <FaYoutube />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
