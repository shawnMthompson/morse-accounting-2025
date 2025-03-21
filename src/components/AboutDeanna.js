import Image from "next/image";
import DeannaT from "../../public/DeannaT.webp";

export default function AboutDeanna() {
  return (
    <section className="flex flex-col md:flex-row p-8 md:p-12 justify-center md:space-y-0 md:space-x-12">
      <div className="basis-full md:basis-1/2 flex justify-center items-center max-w-md mx-auto md:mx-0 mb-8 md:mb-0">
        <Image
          src={DeannaT}
          alt="Image of Deanna"
          className="rounded-lg max-w-full h-auto min-h-[300px] min-w-[350px]"
        />
      </div>
      <div className="basis-full md:basis-1/2 flex flex-col justify-center space-y-6">
        <div className="space-y-3 mb-10">
          <h2 className="text-5xl mb-4 text-center md:text-left text-white text-nowrap">
            About Deanna
          </h2>
          <p className="text-center md:text-left text-lg text-gray-500">
            Hello, I&apos;m Deanna Thompson — an accountant and the business
            owner of Morse Accounting & Income Tax Service.
          </p>
          <p className="text-center md:text-left text-lg text-gray-500">
            I started my business in 1989 in Detroit, Maine and I&apos;ve been
            running it for 35+ years.
          </p>
          <p className="text-center md:text-left text-lg text-gray-500">
            I received my Bachelor&apos;s Degree in Accounting from Husson
            College in 1998 and my certification completions from Federated Tax
            Service in 1990. I am also a certified tax collector and treasurer
            under the Maine Tax Collector Treasurer Association.
          </p>
        </div>
      </div>
    </section>
  );
}
