import React from 'react';
import { Link } from 'react-router';
import { Twitter, Linkedin, Instagram, Facebook, Youtube, Github, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import logoDark from '../../assets/sanchari-logo.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { COMPANY } from '../../config/company';
import { NAVIGATION } from '../../config/navigation';
import { Container } from './layout/Container';

const SOCIALS = [
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10' },
  { key: 'x', Icon: Twitter, label: 'X', color: 'hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/10' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/10' },
  { key: 'facebook', Icon: Facebook, label: 'Facebook', color: 'hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/10' },
  { key: 'youtube', Icon: Youtube, label: 'YouTube', color: 'hover:text-red-500 hover:border-red-500/30 hover:bg-red-500/10' },
  { key: 'github', Icon: Github, label: 'GitHub', color: 'hover:text-gray-200 hover:border-gray-200/30 hover:bg-gray-200/10' },
] as const;

function FLink({ name, href }: { name: string; href: string }) {
  const isHash = href.startsWith('/#');
  const base = 'text-sm text-gray-500 hover:text-gray-200 transition-colors duration-150';

  if (isHash) {
    return <a href={href} className={base}>{name}</a>;
  }
  return <Link to={href} className={base}>{name}</Link>;
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.18em] mb-4">
      {children}
    </p>
  );
}

export function Footer() {
  const socialLinks = SOCIALS.filter((s) => COMPANY.social[s.key]);

  return (
    <footer id="contact" className="relative overflow-hidden" style={{ backgroundColor: '#080810' }}>

      {/* Visual break from Waitlist */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand/[0.06] to-transparent pointer-events-none" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <Container className="relative z-10 pt-12 pb-6">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 lg:gap-16 pb-10 border-b border-white/[0.07]">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="inline-flex items-center gap-2 w-fit">
              <ImageWithFallback src={logoDark} alt="" width={40} height={40} loading="lazy" className="h-10 w-10 object-contain" />
              <span className="font-black text-base text-white tracking-[-0.02em]">{COMPANY.name}</span>
            </Link>

            <div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                {COMPANY.tagline}
              </p>
              <p className="text-brand/50 text-xs font-semibold mt-1.5">
                Launch Status: {COMPANY.launch.status}
              </p>
            </div>

            {/* Social icons — rendered only for accounts that have a URL */}
            {socialLinks.length > 0 && (
              <div className="flex gap-2">
                {socialLinks.map(({ key, Icon, label, color }) => (
                  <a
                    key={key}
                    href={COMPANY.social[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-gray-500 transition-all duration-200 ${color}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}

            {/* Contact info */}
            <div className="space-y-2 pt-1">
              <a
                href={`mailto:${COMPANY.emails.contact}`}
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 text-gray-600 group-hover:text-gray-400 transition-colors" />
                {COMPANY.emails.contact}
              </a>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                {COMPANY.address}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">

            <div>
              <ColHeading>Product</ColHeading>
              <ul className="space-y-2.5">
                {NAVIGATION.footer.product.map((l) => (
                  <li key={l.name}><FLink name={l.name} href={l.href} /></li>
                ))}
              </ul>
            </div>

            <div>
              <ColHeading>Company</ColHeading>
              <ul className="space-y-2.5">
                {NAVIGATION.footer.company.map((l) => (
                  <li key={l.name}><FLink name={l.name} href={l.href} /></li>
                ))}
              </ul>
            </div>

            <div>
              <ColHeading>Legal</ColHeading>
              <ul className="space-y-2.5">
                {NAVIGATION.footer.legal.map((l) => (
                  <li key={l.name}><FLink name={l.name} href={l.href} /></li>
                ))}
              </ul>
            </div>

            <div>
              <ColHeading>Invest</ColHeading>
              <div className="space-y-3">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Pre-seed round open. ₹15–25 Lakhs.
                </p>
                <Link
                  to="/investors"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 border border-amber-500/25 hover:border-amber-400/40 rounded-lg px-3 py-2 transition-all duration-150 hover:bg-amber-500/5"
                >
                  Investor Deck <ArrowUpRight className="w-3 h-3" />
                </Link>
                <div className="pt-1">
                  <a
                    href={`mailto:${COMPANY.emails.investors}`}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    <Mail className="w-3 h-3 shrink-0" />
                    {COMPANY.emails.investors}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
            <p className="text-[11px] text-gray-700">
              {COMPANY.copyright}
            </p>
            <span className="hidden sm:inline text-gray-800 text-xs">·</span>
            <span className="text-[11px] text-gray-700 italic">Not yet available on app stores.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-[11px] text-gray-700 hover:text-gray-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[11px] text-gray-700 hover:text-gray-400 transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
