// import Link from "next/link";
// import React from "react";
import { APRICUS_LOGO_URL } from "../lib/data";
import { NavItems } from "../lib/Navigation";

// const Navbar = () => {
//   return (
//     <nav className="bg-apricusblue-700  border-gray-200 px-4 lg:px-6 py-6 md:py-8  dark:bg-apricusblue-700 sticky top-0 z-50">
//       <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//         <Link href="/">
//           <a className="flex items-center">
//             <img src={APRICUS_LOGO_URL} className="mr-3 h-6 sm:h-9" alt="Apricus Advocates Logo" />
//             <span className=" text-gray-300 self-center text-xl font-semibold whitespace-nowrap dark:text-white">Apricus Advocates</span>
//           </a>
//         </Link>

//         <div className="flex items-center "></div>
//         <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
//           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//             {NavItems.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.link}
//                   className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-apricusblue-700  border-gray-200 px-4 lg:px-6 py-2 md:py-4  dark:bg-apricusblue-700 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none  focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between bg-green">
                <div className="flex-shrink-0 flex items-center">
                  <a href={"/"}>
                    <img src={APRICUS_LOGO_URL} className="mr-3 h-6 sm:h-9" alt="Apricus Advocates Logo" />
                  </a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {NavItems.map((item) => (
                      <a key={item.name} href={item.link} className={"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NavItems.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.link} className={"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
