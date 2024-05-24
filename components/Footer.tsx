import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col lg:flex-row justify-between">
        <div className="flex items-center mb-8 lg:mb-0">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="rounded-xl"
          />
          <p className="ml-4 text-white text-3xl">All rights reserved.</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#home" className="text-white">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-white">About Us</a></li>
              <li className="mb-2"><a href="#services" className="text-white">Services</a></li>
              <li className="mb-2"><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <form>
              <Input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l bg-gray-700 border border-gray-600 text-white"
              />
              <Button
                type="submit"
                className="p-2 rounded-r bg-blue-500 border border-blue-500 text-white mt-5"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
