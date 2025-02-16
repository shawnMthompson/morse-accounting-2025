import Image from "next/image";
import Link from "next/link";
import Banner from "../../public/accounting.jpg";

export default function HomeHeader() {
  return (
    <header className="relative">
      <Image
        src={Banner}
        alt="Banner Image"
        className="absolute w-full h-96 sm:h-[500px] object-cover brightness-75"
      />
      <div className="mr-10 min-h-[350px] sm:min-h-[500px] relative z-10 h-full w-full flex flex-col justify-center text-white p-6 text-center items-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6">
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
