import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center mx-auto mb-8">
          <MapPin className="w-10 h-10 text-[#4F46E5]" />
        </div>
        <p className="text-[#4F46E5] font-black text-6xl mb-4">404</p>
        <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">No route found here.</h1>
        <p className="text-gray-500 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          Looks like this destination doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4F46E5] text-white font-bold hover:bg-[#4338CA] transition-colors shadow-xl shadow-indigo-500/25"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
