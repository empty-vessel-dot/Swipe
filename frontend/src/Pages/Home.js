import React from "react";
import phone from "../assets/phone.png";
import amazon from "../assets/amazon.png";
import google from "../assets/google.png";
import instacart from "../assets/instacart.png";
import lyft from "../assets/lyft.png";
import salesforce from "../assets/salesforce.png";
import shopify from "../assets/shopify.png";
import slack from "../assets/slack.png";
import zoom from "../assets/zoom.png";
import credit_card from "../assets/credit-card.png";
import slack_invoice from "../assets/slack-invoice.png";
import phone_2 from "../assets/phone_2.png";
import dash from "../assets/dash.png";
import api_code from "../assets/api-code.png";
import terminal_code from "../assets/terminal-code.png";
import tools_icon from "../assets/tools-icon.png";
import cube_icon from "../assets/cube-icon.png";
import cloud from "../assets/cloud-icon.png";
import cycle from "../assets/cycle-icon.png";
import shield from "../assets/shield-icon.png";
import bar from "../assets/bars-icon.png";
import earth from "../assets/global-graphic.png";
import swipe from "../assets/swipe-sessions.png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import logo from "../assets/logo-dark.svg";
import location from "../assets/location-icon.png";
import chat from "../assets/comment-icon.png";

import { FaArrowRight } from "react-icons/fa6";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex justify-center items-center gap-48">
          <div className="flex flex-col ">
            <h1 className="font-bold text-7xl w-[450px] ">Payment</h1>
            <h1 className="font-bold text-7xl w-[450px] mt-5 ">
              Infrastructure
            </h1>
            <h1 className="font-bold text-7xl w-[450px] mt-5">for the world</h1>
            <h1 className=" w-[400px]  mt-10">
              Tons of companies all over the world use Swipe’s seamless platform
              to manage their businesses's entire financial transaction
              infrastructure online.
            </h1>
            <div className="flex gap-10 mt-5">
              <button className="bg-purple-800 flex justify-center items-center gap-3 text-white p-2 rounded-xl cursor-pointer hover:bg-opacity-65">
                Start now
                <FaArrowRight />
              </button>
              <button className="border flex justify-center items-center gap-3 text-purple-500 p-2 rounded-xl cursor-pointer hover:bg-purple-200 ">
                Contact Sales <FaArrowRight color="purple" />
              </button>
            </div>
          </div>
          <img className="h-[600px]" src={phone} />
        </div>

        <div className="mt-20 flex flex-col justify-center items-center gap-10">
          <div className="image flex gap-10">
            <img className="h-16" src={instacart} />
            <img className="h-16" src={salesforce} />
            <img className="h-16" src={amazon} />
            <img className="h-16" src={slack} />
          </div>
          <div className="image flex gap-10">
            <img className="h-16" src={shopify} />
            <img className="h-16" src={google} />
            <img className="h-16" src={lyft} />
            <img className="h-16" src={zoom} />
          </div>
        </div>

        <div className="mt-20 bg-blue-50  flex flex-col items-center ">
          <div className="flex flex-col mt-20 p-4">
            <h1 className="text-violet-700 font-bold text-xl">
              Unified platform
            </h1>
            <h1 className="text-5xl font-bold mt-10">
              All the payment products you'll
            </h1>
            <h1 className="text-5xl font-bold mt-5">ever need</h1>
            <div className="flex justify-between gap-20 text-lg">
              <h1 className="w-[500px] mt-10">
                We've got everything you'll need and more to build websites and
                apps that handle payments, payouts, and much more. Swipe’s
                products power payments for{" "}
                <span className="text-blue-500">all kinds of retailers</span> ,
                all kinds of businesses, software platforms & marketplaces, and
                everything in between
              </h1>
              <h1 className="w-[500px] mt-10">
                We also help companies{" "}
                <span className="text-blue-500">
                  fraud, issue invoices, send virtual and physical cards, manage
                  financing, wrangle business spend, and much more.
                </span>
              </h1>
            </div>
            <button className="bg-blue-600 flex justify-center items-center gap-3 text-white p-2 rounded-xl cursor-pointer hover:bg-opacity-65 w-fit mt-10">
              Start now
              <FaArrowRight />
            </button>
            <div className="flex mt-20 justify-between gap-10">
              <div className="flex flex-col gap-20 justify-center items-center">
                <img className="h-60 " src={credit_card} />
                <img className="h-[600px]" src={phone_2} />
              </div>

              <div className="flex flex-col  gap-10">
                <img className="h-[400px]" src={slack_invoice} />
                <img className="h-[400px]" src={dash} />
              </div>
            </div>
          </div>
          <div className="relative h-screen  w-full flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-blue-900 "
              style={{ clipPath: "polygon(0 20%, 100% 0, 100% 90%, 0% 100%)" }}
            ></div>
            <div className="relative z-10 text-white p-4 mt-20">
              <h1 className="">Designed For enginners</h1>
              <h1 className="text-4xl font-bold mb-4">
                The world's best and most
              </h1>
              <h1 className="text-4xl font-bold mb-4">intuitive APIs</h1>
              <p className=" w-[400px]">
                We abstract the hard stuff away so your team can focus on
                building good technology, instead of spending time and money
                reinventing the wheel.
              </p>
              <button className="px-6 py-3 bg-blue-500 rounded-full text-white mt-5">
                Start Now
              </button>
              <div className=" relative z-10 flex gap-10 mt-5 justify-center">
                <div className=" relative z-10 flex flex-col mt-5">
                  <img className="h-10 w-10" src={tools_icon} />
                  <h1 className="text-lg font-bold mt-2">
                    Tools for all stacks
                  </h1>
                  <p className=" w-[300px] mt-2">
                    We offer front end and back end libraries n some of the most
                    widely used technologies, old and new.
                  </p>
                  <button className="px-6 py-3 bg-blue-500 rounded-full text-white w-fit mt-2 hover:bg-opacity-45">
                    Start Now
                  </button>
                </div>
                <div className=" relative z-10 flex flex-col mt-5">
                  <img className="h-10 w-10" src={cube_icon} />
                  <h1 className="text-lg font-bold mt-2">
                    Custom integerations
                  </h1>
                  <p className=" w-[300px] mt-2">
                    Use integrations for system like Shopify, Woocommerce,
                    NetSuite, and more.
                  </p>
                  <button className="px-6 py-3 bg-blue-500 rounded-full text-white w-fit mt-2 hover:bg-opacity-45">
                    Explore Partners
                  </button>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col gap-10 ml-20">
              <img className="h-[250px] rounded-xl" src={api_code} />
              <img className="h-[250px] rounded-xl" src={terminal_code} />
            </div>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-start items-center ">
          <h1 className="text-blue-800 text-lg font-black">Why Swipe</h1>
          <h1 className="text-black text-3xl font-black">
            A tech-first approach to finance
          </h1>
          <div className="flex justify-center items-center gap-10  mt-10">
            <div className="flex flex-col ">
              <img className="h-10 w-10" src={cloud} />
              <h1 className="mt-5 font-bold text-lg">Efficient Always</h1>
              <p className="w-[300px] mt-2">
                We've optimized every level of the finance stack, from
                integrations to prebuilt checkout flows - no detail has been
                spared.
              </p>
            </div>
            <div className="flex flex-col ">
              <img className="h-10 w-10" src={cycle} />
              <h1 className="mt-5 font-bold text-lg">Fast-Improving</h1>
              <p className="w-[300px] mt-2">
                We make constant updates and improvements to help you stay on
                the cutting edge of your industry, deploying to production
                around 20X per day!
              </p>
            </div>
            <div className="flex flex-col ">
              <img className="h-10 w-10" src={shield} />
              <h1 className="mt-5 font-bold text-lg">Tried and true</h1>
              <p className="w-[300px] mt-2">
                Our systems operate with 100% uptime, with scalability and
                uptime as a guarantee. Swipe is super duper certified so don't
                worry
              </p>
            </div>
            <div className="flex flex-col ">
              <img className="h-10 w-10" src={bar} />
              <h1 className="mt-5 font-bold text-lg">Crazy Optimized</h1>
              <p className="w-[300px] mt-2">
                We use machine learning trained on billions of data points to
                help optimize all products, from fraud to revenue recovery and
                more.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-screen  w-full flex flex-col items-center justify-center overflow-hidden">
          <div className="flex mt-20">
            <div
              className="absolute inset-0 bg-blue-900 "
              style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)" }}
            ></div>
            <div className="relative z-10 text-white p-4 mt-20">
              <h1 className="">Globalscale</h1>
              <h1 className="text-4xl font-bold mb-4">
                A structure for global
              </h1>
              <h1 className="text-4xl font-bold mb-4">businesses</h1>
              <p className=" w-[400px]">
                Swipe makes moving money simple, borderless, and programmable -
                just like the rest of the internet. We have teams all over the
                world and we process billions and billions of dollars yearly for{" "}
                <span className="text-blue-400">
                  startups, Fortune 500s, and everything in between.
                </span>
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-10 ml-20">
              <img className="h-[500px] rounded-xl" src={earth} />
            </div>
          </div>
          <div className="relative z-10 flex gap-14 text-white justify-evenly items-center ">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">250M+</h1>
              <h1 className="w-[200px]">
                API requests each day, peaking at 15,000 requests a second.
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">97%</h1>
              <h1 className="w-[200px]">
                of US adults have bought from businesses that use Swipe.
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">135+</h1>
              <h1 className="w-[200px]">
                currencies and payment methods supported
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">35+</h1>
              <h1 className="w-[200px]">
                countries with local . acquiring , optimizing acceptance rates
              </h1>
            </div>
          </div>
        </div>

        <div className="flex mt-20 justify-center items-center gap-20 mb-20">
          <div className="flex flex-col ">
            <h1 className="text-blue-700 font-bold text-lg">Virtual events</h1>
            <h1 className="font-bold text-4xl mt-10">
              Check out Sessions now!
            </h1>
            <h1 className="w-[400px] mt-5">
              Swipe Sessions is our annual conference - it's now available to
              watch on demand! Check it out and become an "internet economy"
              genius, and see how Swipe can transform the way you do business
              online.
            </h1>
            <button className="bg-blue-600 flex justify-center items-center gap-3 text-white p-2 rounded-xl cursor-pointer hover:bg-opacity-65 w-fit mt-10">
              Start now
              <FaArrowRight />
            </button>
          </div>
          <div className="bg-white shadow-xl h-[400px] w-[500px] rounded-xl ">
            <div
              className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-200 h-[250px] p-4 flex flex-col justify-center items-center rounded-xl "
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 0% 100%)" }}
            >
              <img className="h-10" src={swipe} />
              <div className="absolute flex mt-48 mr-40">
                <img className="h-20 -mr-[20px] " src={avatar1} />
                <img className="h-20" src={avatar2} />
              </div>
            </div>
            <div className="ml-10 flex flex-col gap-3 mt-8">
              <h1 className="font-bold text-purple-600">keynote</h1>
              <h1 className="w-[200px] text-sm">
                Everything you need to know about the internet economy
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-20 mt-20 mb-20">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl">What are you waiting for?</h1>
            <h1 className="mt-5 w-[400px]">
              Explore <span className="text-blue-500">Swipe</span> now, or
              create an account and start accepting payments today! If you need
              a custom package for your business, let's chat today. Start now
            </h1>
            <button className="bg-blue-600 flex justify-center items-center gap-3 text-white p-2 rounded-xl cursor-pointer hover:bg-opacity-65 w-fit mt-10">
              Start now
              <FaArrowRight />
            </button>
          </div>
          <div className="flex flex-col">
            <img className="h-14 w-14" src={shield} />
            <h1 className="font-bold text-lg">Always know what you pay</h1>
            <h1 className="w-[200px] mt-5">
              Integrated per-transaction pricing with no hidden fees.
            </h1>
            <button className="bg-blue-600 flex justify-center items-center gap-3 text-white p-2 rounded-xl cursor-pointer hover:bg-opacity-65 w-fit mt-10">
              Pricing details
              <FaArrowRight />
            </button>
          </div>
          <div className="flex flex-col justify-center">
            <img className="h-10 w-10" src={bar} />
            <h1 className="font-bold text-lg mt-4">Start your integration</h1>
            <h1 className="w-[200px] mt-5">
              Get up and running with Stripe in as little as 10 minutes.
            </h1>
            <button className="bg-blue-600 flex justify-center items-center gap-3 text-white p-2 rounded-xl cursor-pointer hover:bg-opacity-65 w-fit mt-3">
              API reference
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="h-[400px] bg-slate-100 flex gap-32 p-4 justify-center  items-center">
          <div className="flex flex-col items-start">
            <img src={logo} />
            <div className="flex justify-center items-center mt-10">
              <img className="h-5" src={location} />
              <h1>Unitd getting-started-section</h1>
            </div>
            <div className="flex justify-center items-center ">
              <img className="h-5" src={chat} />
              <h1>English(United states)</h1>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl">Products</h1>
            <h1 className="mt-10 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Atlas
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Billing
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Invoicing
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Payments
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Checkout
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Identity
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl">Use Cases</h1>
            <h1 className="mt-10 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              eCommerce
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Saas
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Marketplaces
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Embedded Finance
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Crypto
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Creator Economy
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <h1 className="font-bold text-xl">Resources</h1>
            <h1 className="mt-10 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Support Center
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Guides
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Blog
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Licenses
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Privacy & Terms
            </h1>
            <h1 className="mt-5 cursor-pointer hover:underline underline-offset-4 hover:text-purple-600">
              Cookie Settings
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
