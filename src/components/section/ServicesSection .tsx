"use client";
import { Monitor, ShoppingCart, ShieldCheck, Truck } from "lucide-react";

const services = [
  {
    icon: <ShoppingCart size={40} className="text-violet-600" />,
    title: "Easy Shopping",
  },
  {
    icon: <Truck size={40} className="text-violet-600" />,
    title: "Fast Delivery",
  },
  {
    icon: <ShieldCheck size={40} className="text-violet-600" />,
    title: "Secure Payments",
  },
  {
    icon: <Monitor size={40} className="text-violet-600" />,
    title: "24/7 Support",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-violet-50 dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-violet-700 dark:text-violet-300 mb-10">
          Our Services
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[45%] lg:w-[22%] bg-white dark:bg-zinc-800 rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 hover:bg-violet-100 dark:hover:bg-violet-800 transition-all duration-300"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
