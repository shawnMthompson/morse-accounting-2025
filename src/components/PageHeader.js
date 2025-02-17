import Image from "next/image";
import Banner from "../../public/accounting.jpg";

// Accept a pageTitle parameter, use that as the page name. Accept parameters to track site directions as well, though it will pretty much always just be (Home -> Current Page).

export default function PageHeader() {
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
          <h1 className="text-2xl sm:text-4xl font-bold mb-6">
            {/* Page Name (e.g. About, Accounting, Contact) */}
          </h1>
        </div>
      </div>
    </header>
  );
}
