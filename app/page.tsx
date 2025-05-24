import { auth } from "@/auth/auth";
import LoginButton from "@/components/LoginButton";
import StockList from "@/components/StockList";
import Subscription from "@/components/Subscription";

import LatestNewsSection from "@/components/LatestNewsSection";
import UserMenu from "@/components/UserMenu";
import Image from "next/image";

const STOCK_API_KEY = process.env.TWELVE_DATA_API_KEY!;

export default async function page() {
  const session = await auth();
  return (
    <>
      <header className="bg-brand-blue-dark py-10">
        <div className="px-5">
          <div className="flex justify-between gap-5 items-center md:gap-0 md:grid md:grid-cols-4 md:justify-items-center md:place-items-center">
            <div className="flex gap-2 md:gap-8 lg:gap-12 justify-self-start">
              <div className="flex gap-5 items-center">
                <Image
                  src="/assets/menu-icon.png"
                  alt="menu"
                  width={48}
                  height={36}
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
                />
                <p className="hidden xl:block xl:text-2xl font-bold text-brand-beige">Menu</p>
              </div>
              <div className="flex gap-5 items-center">
                <Image
                  src="/assets/search-icon.png"
                  alt="search"
                  width={48}
                  height={36}
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
                />
                <p className="hidden xl:block xl:text-2xl font-bold text-brand-beige">Search</p>
              </div>
            </div>
            <div className="basis-8/12 md:col-span-2">
              <Image src="/assets/logo.png" alt="Timothy Log LLP Logo" width={485} height={48} />
            </div>

            <div className="flex gap-2 md:gap-8 lg:gap-12 justify-self-end">
              <Image
                src="/assets/language-icon.png"
                alt="language"
                width={48}
                height={48}
                className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"
              />
              <Image
                src="/assets/linkedin-icon.png"
                alt="linkedin"
                width={48}
                height={48}
                className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="container mx-auto px-3 md:px-2 my-5">
        <div className="flex justify-end mb-2 lg:hidden lg:mb-0">
          {!session ? <LoginButton /> : <UserMenu />}
        </div>
        <div className="lg:grid lg:grid-cols-5 lg:space-x-14 lg:space-y-0 space-y-5">
          <div className="col-span-3">
            <StockList apiKey={STOCK_API_KEY} />
          </div>
          <div className="col-span-2 flex gap-3">
            <div className="grow">
              <Subscription />
            </div>

            <div className="hidden lg:block">{!session ? <LoginButton /> : <UserMenu />}</div>
          </div>
        </div>
      </section>
      <section
        className="relative min-h-[450px] bg-[url('/assets/hero-banner-mobile.png')] md:bg-[url('/assets/hero-banner.png')] bg-cover bg-center"
        id="hero"
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-t md:bg-gradient-to-tr from-black/90 to-transparent " />

        <div className="container mx-auto px-3 md:px-2 my-5 h-full w-full">
          <h1 className="text-[#97999b] lowercase text-5xl drop-shadow-lg absolute top-72  z-20">
            latest news <br />
            <span className="ms-10 uppercase text-gray-50 drop-shadow-lg">& Insights</span>
          </h1>
        </div>
      </section>
      <section className="bg-brand-blue-dark mb-10">
        <div className="container mx-auto px-3 md:px-2 py-8">
          <div className="flex flex-wrap justify-between items-center gap-3">
            <p className="uppercase font-medium text-gray-50 text-xl">
              STAY INFORMED ON THE MOST PRESSING LEGAL AND REGULATORY NEWS
            </p>
            <div>
              <a
                href="https://www.linkedin.com/company/timothy-loh-solicitors/"
                className="text-brand-beige flex flex-wrap justify-center items-center gap-2"
              >
                <Image src="/assets/linkedin-icon.png" alt="linkedin" width={25} height={25} />
                <p className="text-md lg:text-2xl font-medium">Follow us on Linkedin</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-blue-dark">
        <div className="container mx-auto px-3 md:px-2 py-5">
          <LatestNewsSection />
        </div>
      </section>
    </>
  );
}
