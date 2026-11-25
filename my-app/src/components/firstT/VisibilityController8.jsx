// Ilya Zeldner - Web Technologies Practice 5 (Example 8A: Controlling Child Visibility via Props)
//
// HOW IT WORKS:
//   - Passes `isVisible={true}` to the first child and `isVisible={false}` to the second child.
//   - Note: Interactive toggling on button click requires `useState` (coming in Practice 6).

import ToggleableText from './ToggleableText8';

export default function VisibilityController() {
  return (
    <div className="space-y-2">
      <ToggleableText text="Visible message: isVisible={true} mounts this banner." isVisible={true} />
      <ToggleableText text="Hidden message: isVisible={false} renders nothing in DOM." isVisible={false} />
      <p className="text-xs text-slate-500">
        (The second <code>ToggleableText</code> renders nothing because <code>isVisible</code> is false.)
      </p>
    </div>
  );
}
