import { ArrowRightIcon } from "@heroicons/react/solid";
import type { NextPage } from "next";
import Link from "next/link";
import Clientelle from "../components/Clientelle";
import CTASection from "../components/CTASection";
import Hero from "../components/Hero";
import ApricusFancyIcon from "../components/layouts/ApricusFancyIcon";
import Services from "../components/Services";
import Team from "../components/Team";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />

      <section className="bg-blue-50 dark:bg-gray-800">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className=" font-normal text-gray-700 sm:text-lg dark:text-gray-400">
            <ApricusFancyIcon />
            <h2 className="apricus-heading-black">About Us</h2>
            <p className="mb-4">
              We believe that it is important that our solutions are practical and make business sense. We act on behalf of a wide range of clients from individuals to national and multinational
              corporations. to the excellence of our personal service and our business acumen. We offer every client the same level of dedicated attention in a working environment that inspires
              creative thinking, practical solutions and positive results. Our attention to personal detail is meticulous.
            </p>
            <p className="mb-4">Our attention to personal detail is meticulous.</p>
            <Link href="/about-us">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-yellow-700 hover:bg-yellow-800 dark:focus:ring-yellow-900">
                Read More
                <ArrowRightIcon className="w-5 h-5 ml-2 -mr-1" />
              </a>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src={"/assets/about.jpg"} alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src={"/assets/about2.jpg"} alt="office content 2" />
          </div>
        </div>
      </section>

      <Services />
      <Team />
      {/* <Clientelle /> */}
      <CTASection />
    </div>
  );
};

export default Home;
