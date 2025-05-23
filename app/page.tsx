import { auth } from "@/auth/auth";
import LoginButton from "@/components/LoginButton";
import Image from "next/image";

import UserMenu from "@/components/UserMenu";

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
                <p className="hidden xl:block xl:text-2xl font-bold">Menu</p>
              </div>
              <div className="flex gap-5 items-center">
                <Image
                  src="/assets/search-icon.png"
                  alt="search"
                  width={48}
                  height={36}
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12"
                />
                <p className="hidden xl:block xl:text-2xl font-bold">Search</p>
              </div>
            </div>
            <div className="basis-8/12 md:col-span-2">
              <Image src="/assets/logo.png" alt="Timothy Log LLP Logo" width={485} height={48} />
            </div>

            <div className="flex gap-2 md:gap-8 lg:gap-12 justify-self-end">
              <Image
                src="/assets/language-icon.png"
                alt="menu"
                width={48}
                height={48}
                className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"
              />
              <Image
                src="/assets/linkedin-icon.png"
                alt="search"
                width={48}
                height={48}
                className="w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="container mx-auto px-3 md:px-0 my-5">
        <div className="flex">
          <div>{!session ? <LoginButton /> : <UserMenu />}</div>
        </div>
      </section>
    </>
  );
}
