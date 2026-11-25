// Ilya Zeldner - Web Technologies Practice 5 (Example 11: Composition with `children` & Slot Props)
//
// HOW IT WORKS:
//   - Any JSX placed between `<CardWrapper>...</CardWrapper>` arrives automatically in `children`.
//   - Also supports a named `footer` slot prop for bottom metadata or actions.
//
// PROS:
//   - Prevents "Prop Explosion" — parents can pass paragraphs, badges, forms, or nested cards inside.

export default function CardWrapper({ title, subtitle, footer, children }) {
  return (
    <section className="border border-slate-200 rounded-xl p-5 shadow-xs bg-white">
      <header className="border-b border-slate-200 pb-3 mb-4">
        <h3 className="text-lg font-bold text-slate-900">{title}</h3>
        {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
      </header>
      <div className="text-slate-700 text-sm">{children}</div>
      {footer && (
        <footer className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
          {footer}
        </footer>
      )}
    </section>
  );
}
