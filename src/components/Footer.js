import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="bg-white border-gray-200 dark:bg-gray-900 dark:text-white font-bold flex flex-col items-center p-4">
      <div className="flex items-center space-x-2">
        <FaRegCopyright />
        <p>Morse Accounting and Income Tax Service {year}</p>
      </div>
    </footer>
  );
}
