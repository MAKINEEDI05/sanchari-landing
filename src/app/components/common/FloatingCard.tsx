import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { floatLoop } from '@/animations/motion';

interface FloatingCardProps {
  /** Vertical drift keyframes for the idle float loop, in pixels. */
  offsets: number[];
  /** Float loop duration, in seconds. */
  duration: number;
  /** Positioning + width classes, relative to the anchoring phone container. */
  className?: string;
  /** Icon element rendered inside the coloured badge. */
  icon: ReactNode;
  /** Background utility for the icon badge (e.g. `bg-emerald-100`). */
  iconBgClassName: string;
  title: string;
  subtitle: string;
}

/**
 * Small information card that floats beside the Hero phone mockup. It is
 * positioned absolutely against the phone's anchor container (see Hero), so the
 * cards stay attached to the device at every breakpoint where they are shown.
 */
export function FloatingCard({
  offsets,
  duration,
  className,
  icon,
  iconBgClassName,
  title,
  subtitle,
}: FloatingCardProps) {
  return (
    <motion.div
      {...floatLoop(offsets, duration)}
      className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl shadow-black/10 ${className ?? ''}`}
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBgClassName}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold leading-tight text-gray-900">{title}</p>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}
