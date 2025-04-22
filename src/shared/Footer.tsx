import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 py-6 mt-10 border-t dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Refabry. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/privacy-policy"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/contact"
            className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
