import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { viewportOnce } from '@/animations/motion';

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow: ReactNode;
  /** Main heading; accepts rich content (line breaks, highlighted spans). */
  title: ReactNode;
  /** Optional supporting paragraph below the title. */
  subtitle?: ReactNode;
  /** Wrapper classes — controls width, alignment and bottom spacing. */
  className?: string;
  /** Overrides the title line-height when a section needs a tighter value. */
  titleClassName?: string;
}

/**
 * The eyebrow + heading + subtitle block shared by the landing-page sections,
 * including the scroll-into-view reveal. Layout (width, alignment, spacing) is
 * supplied by the caller via `className` so each section keeps its exact look.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  titleClassName = 'leading-[1.08]',
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        className="text-sm font-bold text-brand uppercase tracking-widest mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ delay: 0.05 }}
        className={`text-4xl sm:text-5xl font-black text-gray-900 tracking-tight ${titleClassName} mb-5`}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-500 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
