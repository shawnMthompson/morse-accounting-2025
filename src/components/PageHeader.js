import Image from "next/image";
import Banner from "../../public/accounting.jpg";
import { FaArrowRight } from "react-icons/fa";

import Link from "next/link";

export default function PageHeader({ previousPage, currentPage }) {
  return (
    <header className="relative flex flex-col items-center">
      <div className="relative w-full h-96 sm:h-[300px]">
        <Image
          src={Banner}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="bg-black opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start text-white text-center sm:text-left p-4 sm:p-12 sm:mt-0 mt-40">
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">{currentPage}</h1>
          <nav className="text-sm flex items-center space-x-2">
            <Link href="/" className="underline">
              {previousPage}
            </Link>
            {<FaArrowRight />}
            <span>{currentPage}</span>
          </nav>
        </div>
      </div>
    </header>
  );
}
