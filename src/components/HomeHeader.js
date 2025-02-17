import Image from "next/image";
import Link from "next/link";
import Banner from "../../public/banner.png";

/**
 *
 * An image slider might be appropriate for the HomeHeader.
 * Adding some variety and motion to an otherwise static page will make it more lively.
 *
 */

export default function HomeHeader() {
  return (
    <header className="relative flex flex-col items-center">
      <div className="relative w-full h-96 sm:h-[650px]">
        <Image
          src={Banner}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="bg-black opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start text-white text-center sm:text-left p-4 sm:p-12 sm:mt-0 mt-40">
          <h1 className="text-xl sm:text-4xl font-bold mb-6">
            Get your taxes done right with Deanna!
          </h1>
          <Link href="/contact">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
            >
              Schedule an Appointment
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
