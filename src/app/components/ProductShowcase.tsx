import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProductShowcase() {
  return (
    <section className="py-24 overflow-hidden bg-gray-900 text-white relative" id="screenshots">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand rounded-full blur-[150px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan rounded-full blur-[150px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Beautifully Designed. <br/> Incredibly Powerful.
          </h2>
          <p className="text-xl text-gray-400">
            A premium, intuitive interface that makes ride-sharing effortless and secure.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Left Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: -50, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: -5 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="w-[280px] h-[580px] mx-auto bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                <div className="w-full h-full bg-gray-100 rounded-[2.25rem] overflow-hidden relative">
                  <ImageWithFallback src="https://images.unsplash.com/photo-1601972599748-19fe5a7e756f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="App Screen" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                     <div className="text-white font-bold text-xl mb-1">Smart Route Search</div>
                     <div className="text-white/80 text-sm">Find commuters on your daily path instantly.</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Mockup - Main */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-20"
            >
              <div className="w-[320px] md:w-[340px] h-[680px] mx-auto bg-black rounded-[3rem] p-3 shadow-[0_0_80px_rgba(79,70,229,0.4)] border-4 border-gray-800">
                <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl w-40 mx-auto z-30"></div>
                <div className="w-full h-full bg-white rounded-[2.25rem] overflow-hidden relative">
                   <ImageWithFallback src="https://images.unsplash.com/photo-1585014165903-6d6c6ebad3e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" alt="Dashboard" className="w-full h-1/2 object-cover" />
                   <div className="h-1/2 bg-white p-6 relative">
                     <div className="absolute -top-10 right-6 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden">
                       <img src="https://i.pravatar.cc/100?img=47" alt="User" />
                     </div>
                     <h3 className="font-bold text-gray-900 text-2xl mb-1">Trip in Progress</h3>
                     <p className="text-[#10B981] font-semibold text-sm mb-6 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse"></span> Live Tracking Active</p>
                     
                     <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-sm font-semibold text-gray-500">ETA</span>
                         <span className="font-bold text-gray-900">14 mins</span>
                       </div>
                       <div className="w-full bg-gray-200 rounded-full h-2">
                         <div className="bg-gradient-to-r from-brand to-brand-cyan h-2 rounded-full w-[70%]"></div>
                       </div>
                     </div>
                     
                     <button className="w-full py-4 rounded-xl bg-gray-900 text-white font-bold mb-2">View Details</button>
                     <button className="w-full py-3 rounded-xl bg-red-50 text-red-600 font-bold border border-red-100">SOS Emergency</button>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Right Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 5 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="w-[280px] h-[580px] mx-auto bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800">
                <div className="w-full h-full bg-gray-100 rounded-[2.25rem] overflow-hidden relative flex flex-col">
                  <div className="p-6 bg-white border-b border-gray-100">
                    <h3 className="font-bold text-gray-900 text-xl">Verification Hub</h3>
                    <p className="text-sm text-gray-500">100% Trust Infrastructure</p>
                  </div>
                  <div className="flex-1 bg-gray-50 p-4 space-y-4">
                    {['Driving License', 'Vehicle RC', 'Insurance', 'PUC Check'].map((doc, i) => (
                      <div key={i} className="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
                         <div className="font-semibold text-gray-800 text-sm">{doc}</div>
                         <div className="text-[#10B981] bg-emerald-50 px-2 py-1 rounded text-xs font-bold">Verified</div>
                      </div>
                    ))}
                    <div className="mt-8 text-center p-4 bg-brand/10 rounded-2xl border border-brand/20">
                      <div className="text-3xl mb-2">🏆</div>
                      <div className="font-bold text-brand">Gold Tier Member</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}