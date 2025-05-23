import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-1/2 space-y-2 mt-10 mb-10">
      <h5 className="text-2xl text-center font-bold">GET IN TOUCH</h5>
      <p className="text-center">
        We are eager to discuss your business needs, and answer any questions
        that you may have.<br className="mb-2"></br>Enter your details at the contact section of our
        website and we&apos;ll get back to you as soon as we can!
      </p>
      <hr></hr>
      <Link href="/contact">
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2"
        >
          Pass us a Message
        </button>
      </Link>
    </div>
  );
}
