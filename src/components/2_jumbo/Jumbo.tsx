import React from "react";
import { Button } from "../ui/button";
import WhatWeDo from "../what_we_do/WhatWeDo";

const Jumbo = () => {
  return (
    <div className="text-gray-900 bg-slate-800">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mt-12 lg:mt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/Let Your Website Traffic Skyrocket Instantly.jpg?height=600&width=800"
                alt="Website Traffic SMM Panel"
                className="w-full h-full object-fit "
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Let Your Website Traffic Skyrocket Instantly
            </h1>
            <p className="text-xl mb-8 text-slate-100">
              Sign up Now to enjoy real, targeted website traffic for more
              visibility and sales. Is your website struggling to attract the
              attention it deserves? We provide SMM solutions to companies
              around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.websitetrafficsmmpanel.com">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Sign Up
                </Button>
              </a>

              <a href="https://app.websitetrafficsmmpanel.com">
                <Button
                  variant="outline"
                  className="text-purple-600 border-purple-600 hover:bg-purple-100 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
                >
                  Log in to your dashboard
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
    </div>
  );
};

export default Jumbo;
