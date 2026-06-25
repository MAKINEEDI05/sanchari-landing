import type { Variants } from 'motion/react';
import { EASE_OUT_EXPO, motionDuration } from '@/theme';

/**
 * Shared `motion` presets.
 *
 * These capture the entrance and float animations repeated across the landing
 * sections so timings stay consistent and identical to the original design.
 */

/** Reusable `whileInView` config — animate once when scrolled into view. */
export const viewportOnce = { once: true } as const;

/** Fade-and-rise entrance. `y` defaults to 16px; override per call site. */
export const fadeUp = (y = 16, delay = 0): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.reveal, ease: EASE_OUT_EXPO, delay },
  },
});

/** Parent container that staggers the entrance of its children. */
export const staggerContainer = (
  staggerChildren = 0.09,
  delayChildren = 0.05,
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Single staggered child paired with {@link staggerContainer}. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDuration.reveal, ease: EASE_OUT_EXPO },
  },
};

/** Continuous vertical drift used by the Hero's floating cards. */
export const floatLoop = (offsets: number[], duration: number) => ({
  animate: { y: offsets },
  transition: { repeat: Infinity, duration, ease: 'easeInOut' as const },
});
