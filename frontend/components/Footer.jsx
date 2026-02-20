import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-neutral-800">

      <div className="text-center py-12">

        {/* Logo */}
        <Link href="/">
          <img
            src="/assets/Sign-white.png"
            alt="Klinton Logo"
            className="w-36 mx-auto mb-4 dark:hidden"
          />
          <img
            src="/assets/Sign-black.png"
            alt="Klinton Logo"
            className="w-36 mx-auto mb-4 hidden dark:block"
          />
        </Link>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Mail size={16} />
          <a
            href="mailto:klinton.developer365@gmail.com"
            className="hover:underline"
          >
            klinton.developer365@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-[10%] py-6 text-sm text-gray-500 dark:text-gray-400">

        <p>
          © {new Date().getFullYear()} Klinton A. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 mt-4 sm:mt-0">

          <a
            href="https://github.com/Klinton0365"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/klinton-a-191338246/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://wa.me/917339047488?text=Hello%20Klinton,%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99m%20interested%20in%20discussing%20a%20potential%20project%20collaboration.%20I%E2%80%99d%20love%20to%20connect%20and%20explore%20how%20we%20can%20work%20together."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <MessageCircle size={20} />
          </a>

        </div>
      </div>
    </footer>
  );
}

// export default function Footer() {
//     return (
//         <div className="mt-20">
//             <div className="text-center">
//                 <a href="https://prebuiltui.com?utm_source=eliana">
//                     <img src="/assets/Sign-white.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
//                     <img src="/assets/Sign-black.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />
//                 </a>


//                 <div className="w-max flex items-center gap-2 mx-auto">
//                     <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
//                     <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

//                     <a href="mailto:klinton.developer365@gmail.com">klinton.developer365@gmail.com</a>
//                 </div>
//             </div>
//             <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
//                 <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com?utm_source=eliana">Klinton A</a>. All rights reserved.</p>
//                 <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
//                     <li><a target='_blank' href="https://github.com/prebuiltui">GitHub</a></li>
//                     <li><a target='_blank' href="linkedin.com/company/prebuiltui">LinkedIn</a></li>
//                     <li><a target='_blank' href="https://x.com/prebuiltui">Whatsapp</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }