// Ilya Zeldner - Web Technologies Practice 5 (Example 8B: Controlling Child Visibility via Props)
//
// HOW IT WORKS:
//   - Renders two `<ToggleableText />` instances: one with `isVisible={true}` and one with `isVisible={false}`.
//   - Demonstrates how boolean props control whether a child renders into the DOM at all.

import ToggleableText from './TogglebleText8';

export default function VisibilityController() {
  return (
    <div className="space-y-2">
      <ToggleableText text="Visible message: isVisible={true} renders this banner." isVisible={true} />
      <ToggleableText text="Hidden message: isVisible={false} renders nothing." isVisible={false} />
      <p className="text-xs text-slate-500">
        (Notice the second <code>ToggleableText</code> component is hidden because <code>isVisible</code> is false.)
      </p>
    </div>
  );
}
