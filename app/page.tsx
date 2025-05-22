"use client";
import Image from "next/image";
import React from "react";

export default function LoginButton() {
  return (
    <>
      <nav className="bg-brand py-10">
        <div className="container px-5 lg:px-5 mx-auto">
          <div className="flex justify-between gap-5">
            <div className="flex gap-2 md:gap-4 lg:gap-6">
              <div className="flex gap-5 items-center">
                <Image
                  src="/assets/menu-icon.png"
                  alt="menu"
                  width={40}
                  height={36}
                  sizes="(max-width: 768px) 20px, 48px"
                />
                <p className="hidden lg:block lg:text-2xl font-bold">Menu</p>
              </div>
              <div className="flex gap-5 items-center">
                <Image
                  src="/assets/search-icon.png"
                  alt="search"
                  width={40}
                  height={36}
                  sizes="(max-width: 768px) 20px, 48px"
                />
                <p className="hidden lg:block lg:text-2xl font-bold">Search</p>
              </div>
            </div>

            <Image
              src="/assets/logo.png"
              alt="Timothy Log LLP Logo"
              width={485}
              height={48}
              sizes="(max-width: 768px) 180px, 485px"
            />

            <div className="flex gap-2 md:gap-8 lg:gap-12">
              <Image
                src="/assets/language-icon.png"
                alt="menu"
                width={48}
                height={48}
                sizes="(max-width: 768px) 20px, 48px"
              />
              <Image
                src="/assets/linkedin-icon.png"
                alt="search"
                width={48}
                height={48}
                sizes="(max-width: 768px) 20px, 48px"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
