import { Button } from "@/components/ui/button";
import {
  Server,
  ShieldCheck,
  Users,
  Globe,
  BarChart2,
  DollarSign,
  Activity,
  TrendingUp,
  UserCheck,
  Search,
} from "lucide-react";

export default function Hero() {
  const features = [
    { icon: Server, text: "Direct provider (own servers)" },
    { icon: ShieldCheck, text: "Non-drop traffic" },
    { icon: Users, text: "Real users" },
    { icon: Globe, text: "Geographic targeting" },
    { icon: BarChart2, text: "Showing on Google Analytics" },
    { icon: DollarSign, text: "Cheapest rates in the market" },
    { icon: Activity, text: "Full traffic tracking" },
    { icon: TrendingUp, text: "Natural pattern and growth" },
    { icon: UserCheck, text: "Quality User Behaviour" },
    { icon: Search, text: "Increase Search Engine Ranking" },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Website Traffic SMM Panel
            </h1>
            <div className="flex gap-4 bg-white my-10 py-4 rounded-lg">
              <ul className="space-y-4">
                {features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <feature.icon className="h-6 w-6 mr-3 text-purple-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {features.slice(5, 10).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <feature.icon className="h-6 w-6 mr-3 text-purple-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.websitetrafficsmmpanel.com">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  SIGN UP - GET $1 FREE CREDIT
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="/Website Traffic SMM Panel Header image.jpg?height=600&width=800"
                alt="Website Traffic SMM Panel"
                className="w-full h-full object-fit "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
