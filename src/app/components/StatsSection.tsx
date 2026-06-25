import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../../config/stats';

export function StatsSection() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.marketing.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`${stat.bg || 'bg-gray-50'} ${stat.border || 'border-gray-100'} border rounded-3xl p-6 md:p-8 text-center hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 group`}
            >
              <div
                className={`text-3xl md:text-4xl lg:text-5xl font-black ${stat.textColor || 'text-gray-900'} mb-2 bg-clip-text bg-gradient-to-br ${stat.color || 'from-gray-950 to-gray-750'} text-transparent`}
              >
                {stat.value}
              </div>
              <div className="font-bold text-gray-900 text-sm md:text-base mb-1 leading-snug">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 leading-relaxed hidden md:block">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
