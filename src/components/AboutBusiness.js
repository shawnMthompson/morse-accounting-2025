import Image from "next/image";
import Sign from "../../public/MAITS-Sign.png";

export default function AboutBusiness() {
  return (
    <section className="flex flex-col md:flex-row p-8 md:p-12 justify-center space-y-8 md:space-y-0 md:space-x-12">
      <div className="basis-full md:basis-1/2 flex flex-col justify-center space-y-6">
        <div className="space-y-3 mb-10">
          <h2 className="text-5xl mb-4 text-center md:text-left text-white">
            Morse Accounting and Income Tax Service
          </h2>
          <p className="text-center md:text-left text-lg text-gray-500">
            My business is family-oriented. We want everyone coming into our
            business to feel comfortable and feel like they are important in
            every aspect of their life and business.
          </p>
          <p className="text-center md:text-left text-lg text-gray-500">
            Managing 250+ clients each tax season, I&apos;ve gained a lot of
            knowledge and expertise in the field.
          </p>
          <p className="text-center md:text-left text-lg text-gray-500">
            If you are looking to get your taxes done with us, please refer to
            the contact section of our website — we look forward to hearing from
            you!
          </p>
        </div>
      </div>
      <div className="basis-full md:basis-1/2 flex justify-center items-center max-w-md mx-auto md:mx-0">
        <Image
          src={Sign}
          alt="Image of Deanna"
          className="rounded-lg max-w-full h-auto min-h-[300px] min-w-[350px]"
        />
      </div>
    </section>
  );
}
