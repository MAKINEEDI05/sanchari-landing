import React from 'react';
import { Leaf, Car, Battery, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY } from '../../config/company';

export function SmartCity() {
  const impacts = [
    { icon: <Car />, title: "Reduced Congestion", desc: "Taking thousands of single-occupancy vehicles off the road." },
    { icon: <Leaf />, title: "Lower Emissions", desc: "Significantly reducing carbon footprint per commuter." },
    { icon: <Battery />, title: "Energy Efficiency", desc: "Optimizing fuel consumption through shared journeys." },
    { icon: <Building2 />, title: "ESG Alignment", desc: "Helping corporations meet their sustainability goals." }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 border-t border-emerald-100 overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-6">
            <Leaf className="w-4 h-4" />
            Smart City Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Building Greener, Smarter Cities
          </h2>
          <p className="text-xl text-gray-600">
            Every shared ride on {COMPANY.name} contributes directly to reducing traffic congestion and urban pollution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(impact.icon as React.ReactElement, { className: 'w-8 h-8' })}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{impact.title}</h3>
              <p className="text-gray-500">{impact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}