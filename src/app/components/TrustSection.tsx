import React from 'react';
import { motion } from 'motion/react';
import {
  VerifiedDriverBadge,
  VerifiedVehicleBadge,
  SecurePaymentBadge,
  LiveTrackingBadge,
} from './icons/SanchariIcons';

export function TrustSection() {
  const trustSignals = [
    { icon: <VerifiedDriverBadge />, title: 'Verified Drivers' },
    { icon: <VerifiedVehicleBadge />, title: 'Verified Vehicles' },
    { icon: <SecurePaymentBadge />, title: 'Secure Payments' },
    { icon: <LiveTrackingBadge />, title: 'Live Tracking' },
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Built on Trust & Safety
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform is built on a foundation of trust, safety, and transparency. Every commuter will be verified before they share a ride.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {trustSignals.map((signal, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 transition-all"
            >
              <div className="w-14 h-14 flex items-center justify-center">
                {signal.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{signal.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold text-gray-500 tracking-wider">AWS</div>
          <div className="text-xl font-bold text-gray-500 tracking-wider">Firebase</div>
          <div className="text-xl font-bold text-gray-500 tracking-wider">Google Maps</div>
          <div className="text-xl font-bold text-gray-500 tracking-wider">Razorpay</div>
          <div className="text-xl font-bold text-gray-500 tracking-wider">DigiLocker</div>
        </div>
      </div>
    </section>
  );
}