import { MotionConfig } from 'motion/react';
import { RouterProvider } from 'react-router';
import { router } from './routes.tsx';

export default function App() {
  // `reducedMotion="user"` makes every motion component honour the user's
  // prefers-reduced-motion setting (transform/layout animations are skipped,
  // opacity is preserved) without touching individual animations.
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  );
}
