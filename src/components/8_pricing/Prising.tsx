import { Button } from "@/components/ui/button";

export default function Prising() {
  return (
    <div id="Pricing" className="w-full bg-slate-800 ">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mt-12 lg:mt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/Pricing Plans.jpg?height=600&width=800"
                alt="Website Traffic SMM Panel"
                className="w-full h-full object-fit "
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Pricing Plans
            </h1>
            <p className="text-xl mb-8 text-gray-400">
              We offer a variety of pricing plans to meet the needs of our
              customers. We are confident that we have a package that will suit
              your needs. In addition to being competitive, our pricing is
              transparent as well. In addition, we are dedicated to making sure
              that you get the most out of your investment. Register now and
              view our pricing plans within your account.
            </p>
            <p className="text-xl font-semibold mb-8 text-slate-100">
              Have something else in mind? Let us discuss your needs and build a
              plan for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.websitetrafficsmmpanel.com">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Register For Free
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
