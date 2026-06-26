import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { Container } from './layout/Container';

const partners = [
  {
    name: 'Mappls',
    sub: 'Primary Maps',
    color: '#FF5722',
    bg: '#FFF3F0',
    border: '#FFD0C0',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 14 6 14s6-9.582 6-14c0-3.314-2.686-6-6-6z"
          fill="#FF5722" />
        <circle cx="12" cy="8" r="2.5" fill="white" />
      </svg>
    ),
  },
  {
    name: 'NavIC',
    sub: 'Indian Satellite Nav',
    color: '#1565C0',
    bg: '#E8F0FE',
    border: '#C0D4F8',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="3.5" fill="#1565C0" />
        <circle cx="12" cy="12" r="7" stroke="#1565C0" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
        <circle cx="12" cy="12" r="10.5" stroke="#FF9933" strokeWidth="1.2" strokeDasharray="4 2.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    sub: 'Cloud Infrastructure',
    color: '#C45000',
    bg: '#FFF8EE',
    border: '#FFD9AA',
    logo: (
      <svg viewBox="0 0 32 22" fill="none" className="w-9 h-6">
        <path d="M6 13 L8.5 6 L11 13 L13.5 6 L16 13" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M4 19 Q16 25 28 19" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M25 16.5 L28.5 19 L25 21.5" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    sub: 'Auth & Push',
    color: '#E37400',
    bg: '#FFF8E1',
    border: '#FFE082',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M5.5 19L8 7l3.5 6L14 3l1.5 4.5L18.5 19H5.5z" fill="#FFCA28" />
        <path d="M5.5 19L9.5 12l2.5 4.5L14 3l1.5 4.5L18.5 19" fill="#FFA000" opacity="0.75" />
        <path d="M5.5 19L12 8l6.5 11H5.5z" fill="#FF6F00" opacity="0.35" />
      </svg>
    ),
  },
  {
    name: 'Razorpay',
    sub: 'Payments',
    color: '#2D81FF',
    bg: '#EFF6FF',
    border: '#BDD7FF',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M5 20L12.5 4L15.5 10.5L20 4L12.5 20L9.5 13.5L5 20z" fill="#3395FF" />
      </svg>
    ),
  },
  {
    name: 'DigiLocker',
    sub: 'KYC & Docs',
    color: '#1A73E8',
    bg: '#E8F0FE',
    border: '#C0D4F8',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="5" y="10" width="14" height="11" rx="2" fill="#1A73E8" />
        <path d="M8 10V7a4 4 0 018 0v3" stroke="#1A73E8" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="12" cy="15.5" r="1.5" fill="white" />
        <path d="M12 17v1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    sub: 'Database',
    color: '#116149',
    bg: '#EDFAF3',
    border: '#A8E6C8',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2c0 0 5 7 5 12.5C17 19.5 14.8 22 12 22s-5-2.5-5-7.5S12 2 12 2z" fill="#13AA52" />
        <path d="M12 5v15" stroke="#116149" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'Twilio',
    sub: 'SMS & OTP',
    color: '#C3001D',
    bg: '#FFF0F2',
    border: '#FFBFC8',
    logo: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="9.5" fill="#F22F46" />
        <circle cx="9.2" cy="9.2" r="2" fill="white" />
        <circle cx="14.8" cy="9.2" r="2" fill="white" />
        <circle cx="9.2" cy="14.8" r="2" fill="white" />
        <circle cx="14.8" cy="14.8" r="2" fill="white" />
      </svg>
    ),
  },
];

export function PartnerBar() {
  return (
    <section className="py-14 border-y border-gray-100 bg-gray-50/60">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-9"
        >
          Built on trusted infrastructure
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:bg-[var(--partner-bg)] cursor-default"
              style={{ borderColor: p.border, ['--partner-bg']: p.bg } as CSSProperties}
            >
              <div className="shrink-0">{p.logo}</div>
              <div>
                <p className="text-sm font-black tracking-tight leading-none mb-0.5 transition-colors duration-200"
                  style={{ color: p.color }}>
                  {p.name}
                </p>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider leading-none">
                  {p.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
