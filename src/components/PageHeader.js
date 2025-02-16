import Image from "next/image";
import Banner from "../../public/accounting.jpg";

export default function PageHeader() {
  return (
    <header className="relative">
      <Image
        src={Banner}
        alt="Banner Image"
        className="absolute w-full h-96 sm:h-[500px] object-cover brightness-75"
      />
      <div className="mr-10 min-h-[350px] sm:min-h-[500px] relative z-10 h-full w-full flex flex-col justify-center text-white p-6 text-center items-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6">
          {/* Page Name (e.g. About, Accounting, Contact) */}
        </h1>
        {/* Element to Track Site Directions (e.g. Home -> About (Current Page)  ) */}
      </div>
    </header>
  );
}
