import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <header>
      <nav
        className={clsx(
          "h-16 flex-shrink-0 bg-gray-800 shadow-md text-white font-roboto text-base font-semibold flex items-center",
          pathname === "/" && "pl-[45%]"
        )}
      >
        {pathname !== "/" && (
          <>
            <div className="flex ml-[3vw]">
              <svg
                className="w-4 h-6 mr-[10px]"
                viewBox="0 0 9 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 13.2375L3.43725 7.5L9 1.7625L7.28745 0L0 7.5L7.28745 15L9 13.2375Z"
                  fill="white"
                />
              </svg>
              <Link
                href="/"
                className="text-white text-base font-medium no-underline"
              >
                Back
              </Link>
            </div>
          </>
        )}
        <h1
          className={clsx(
            "text-custom-gray font-roboto text-4xl font-bold text-white",
            pathname !== "/" && "mr-[3vw] pl-[calc(45%-64px)]"
          )}
        >
          Home
        </h1>
      </nav>
    </header>
  );
};

export default Header;
