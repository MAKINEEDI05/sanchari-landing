import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, MapPin, Mail, User, Car } from 'lucide-react';
import { COMPANY } from '../../config/company';
import { Container } from './layout/Container';
import { submitContact } from '@/services/contact';

const cities = [
  'Hyderabad', 'Bangalore', 'Pune', 'Mumbai', 'Chennai',
  'Delhi / NCR', 'Kolkata', 'Ahmedabad', 'Other',
];

const perks = [
  'Early access before public launch',
  'Founding user badge in the app',
  `50% off ${COMPANY.name} Pro for early members`,
  'Direct line to the founding team',
];

export function Waitlist() {
  const [form, setForm] = useState({ name: '', email: '', city: '', role: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await submitContact({ type: 'waitlist', ...form });
    setLoading(false);
    if (result.ok) setSubmitted(true);
    else setError(result.error ?? 'Something went wrong. Please try again.');
  };

  return (
    <section id="waitlist" className="py-16 bg-[#060612] overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-indigo-300 text-sm font-bold mb-8">
                <Sparkles className="w-3.5 h-3.5" />
                Launch Status: {COMPANY.launch.status} · Limited Early Access
              </div>

              <h2 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.05] mb-6">
                Be first to experience {COMPANY.name}.
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                Join the waitlist and get early access to India's next-generation mobility platform — built for safety, savings, and smarter cities.
              </p>

              {/* Perks */}
              <div className="space-y-3.5">
                {perks.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-gray-300 font-medium text-sm">{perk}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <p className="text-white font-black text-xl mb-1">Join the Waitlist</p>
                      <p className="text-gray-400 text-sm">Be among the first to get access.</p>
                    </div>

                    {/* Name */}
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        aria-label="Full name"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        aria-label="Email address"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm"
                      />
                    </div>

                    {/* City */}
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none z-10" />
                      <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        aria-label="City"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled className="bg-gray-900">Select your city</option>
                        {cities.map((c) => (
                          <option key={c} value={c} className="bg-gray-900">{c}</option>
                        ))}
                      </select>
                    </div>

                    {/* Role */}
                    <div className="relative">
                      <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none z-10" />
                      <select
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        aria-label="I am a..."
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled className="bg-gray-900">I am a...</option>
                        <option value="rider" className="bg-gray-900">Rider — looking for affordable commutes</option>
                        <option value="driver" className="bg-gray-900">Driver — want to earn on my commute</option>
                        <option value="both" className="bg-gray-900">Both rider and driver</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-brand hover:bg-brand-dark text-white font-black transition-all duration-150 shadow-xl shadow-indigo-900/50 active:scale-[0.98] disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Join Waitlist <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {error ? (
                      <p role="alert" className="text-rose-400 text-xs text-center leading-relaxed">
                        {error}
                      </p>
                    ) : null}

                    <p className="text-gray-600 text-xs text-center leading-relaxed">
                      No spam. No app store yet. Just early access.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-white font-black text-xl mb-2">You're on the list!</h3>
                    <p className="text-gray-400 text-sm mb-1">
                      Welcome, <span className="text-white font-semibold">{form.name || 'friend'}</span>.
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                      We'll reach out at <span className="text-indigo-400">{form.email}</span> when we're ready to launch in {form.city}
                      {form.role && form.role !== 'both' ? ` for ${form.role}s` : ''}.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Store badges */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-500 text-sm font-semibold">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.78 3.59-.74 1.5.04 2.76.69 3.49 1.76-2.95 1.76-2.45 5.56.5 6.78-.71 1.76-1.57 3.32-2.66 4.37zm-3.83-13.6c-.19-1.89 1.35-3.66 3.19-3.86.35 2.11-1.6 3.84-3.19 3.86z"/>
                </svg>
                App Store · Coming Soon
              </div>
              <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-500 text-sm font-semibold">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.83 1-1.3 1.7-.8l14 8.5c.7.4.7 1.5 0 1.9l-14 8.5c-.7.5-1.7.03-1.7-.1z"/>
                </svg>
                Google Play · Coming Soon
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
