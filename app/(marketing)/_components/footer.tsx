import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t bg-slate-100 dark:bg-gray-900">
      <div className="container px-3 py-6 mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <div className="flex items-center text-sm gap-x-2">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <p className="font-bold text-xl">Simplify</p>
          </div>

          <div className="flex -mx-2">
            <Link
              href="#"
              className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="Github"
            >
              <Image src="/github.svg" alt="linkedin" width={24} height={24} />
            </Link>

            <Link
              href="#"
              className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <Image src="/linkedin.svg" alt="linkedin" width={24} height={24}/>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
