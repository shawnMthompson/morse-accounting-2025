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
    <header className="relative">
      <Image
        src={Banner}
        alt="Banner Image"
        className="absolute w-full h-96 sm:h-[650px] object-cover bg-black opacity-50"
      />
      <div className="min-h-[600px] sm:min-h-[300px] relative z-10 h-full w-fit flex flex-col justify-center text-white sm:pl-12 sm:pt-60 p-5 text-center sm:text-left items-center sm:items-start">
        <h1 className="text-xl sm:text-4xl font-bold mb-6">
          Get your taxes done right with Deanna!
        </h1>
        <Link href="/contact">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Schedule an Appointment
          </button>
        </Link>
      </div>
    </header>
  );
}
