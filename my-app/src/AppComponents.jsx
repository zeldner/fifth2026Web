// Ilya Zeldner - Web Technologies Practice 5
// React 19 Components & Props Interactive Learning Dashboard (AppComponents.jsx)
//
// Notice: This parent dashboard uses ZERO Hooks (`useState` / `useEffect` are introduced in Practice 6).
// Every multi-file example (#4-#9) displays BOTH the Parent/Container and Child component source code.

import HelloWorldJS from './components/firstT/HelloWorldJS1';
import GreetingJS from './components/firstT/GreetingJS2';
import GreetingJS2 from './components/firstT/GreetingJS3';
import UserList from './components/firstT/UserList4';
import ButtonContainer from './components/firstT/ButtonContainer5';
import ItemListContainer from './components/firstT/ItemListContainer6';
import FormExample from './components/firstT/FormExample7';
import VisibilityController from './components/firstT/VisibilityController8';
import AlertContainer from './components/firstT/AlertContainer9';
import DynamicMenu from './components/firstT/DynamicMenu10';
import CardWrapper from './components/firstT/CardWrapper11';
import UserStatus from './components/firstT/UserStatus12';
import ArticleLayout from './components/firstT/ArticleLayout13';
import ProductCard from './components/firstT/ProductCard14';

const CODE_SNIPPETS = {
  "1": "export default function HelloWorldJS() {\n  return (\n    <div className=\"p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900\">\n      <h2 className=\"text-xl font-bold\">Hello World from React 19!</h2>\n      <p className=\"text-sm text-blue-700 mt-1\">\n        Rendered by a clean functional component with zero boilerplate.\n      </p>\n    </div>\n  );\n}",
  "2": "export default function GreetingJS({ name, role }) {\n  return (\n    <div className=\"p-4 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-950\">\n      <p className=\"text-lg font-semibold\">\n        Welcome, <span className=\"text-indigo-700\">{name}</span>!\n      </p>\n      <p className=\"text-sm text-indigo-700 mt-1\">\n        Role passed via props: <strong>{role}</strong>\n      </p>\n    </div>\n  );\n}",
  "3": "export default function GreetingJS2({ name = 'Guest', coursesCount = 0 }) {\n  return (\n    <div className=\"p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950\">\n      <p className=\"text-lg font-semibold\">\n        Hello, {name.toUpperCase()}!\n      </p>\n      <p className=\"text-sm text-emerald-800 mt-1\">\n        Enrolled courses: <strong>{coursesCount}</strong>{' '}\n        ({coursesCount > 0 ? 'Active Semester' : 'No Courses Yet'})\n      </p>\n    </div>\n  );\n}",
  "4": "// ==========================================\n// File 1 (Parent / Container): UserList4.jsx\n// ==========================================\nimport ProfileCard from './ProfileCard4';\n\nexport default function UserList({ users = [] }) {\n  if (users.length === 0) {\n    return <p className=\"text-sm text-slate-500 italic\">No users available to display.</p>;\n  }\n\n  return (\n    <div className=\"grid grid-cols-1 sm:grid-cols-3 gap-3\">\n      {users.map((user) => (\n        <ProfileCard\n          key={user.id ?? user.name}\n          name={user.name}\n          age={user.age}\n          occupation={user.occupation}\n        />\n      ))}\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): ProfileCard4.jsx\n// ==========================================\nexport default function ProfileCard({ name, age, occupation }) {\n  return (\n    <article className=\"p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow\">\n      <div className=\"flex items-center justify-between mb-2\">\n        <h3 className=\"text-base font-bold text-slate-900\">{name}</h3>\n        <span className=\"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800\">\n          Age {age}\n        </span>\n      </div>\n      <p className=\"text-sm text-slate-600\">\n        Occupation: <strong className=\"text-slate-800\">{occupation}</strong>\n      </p>\n    </article>\n  );\n}",
  "5": "// ==========================================\n// File 1 (Parent / Container): ButtonContainer5.jsx\n// ==========================================\nimport ActionButton from './ActionButton5';\n\nexport default function ButtonContainer() {\n  const handleAction = (label) => {\n    alert(`ActionButton callback triggered: \"${label}\"`);\n  };\n\n  return (\n    <div className=\"flex flex-wrap gap-3\">\n      <ActionButton text=\"Submit\" variant=\"success\" onClick={() => handleAction('Submit')} />\n      <ActionButton text=\"Cancel\" variant=\"danger\" onClick={() => handleAction('Cancel')} />\n      <ActionButton text=\"Learn More\" variant=\"primary\" onClick={() => handleAction('Learn More')} />\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): ActionButton5.jsx\n// ==========================================\nexport default function ActionButton({\n  text,\n  variant = 'primary',\n  onClick,\n  type = 'button',\n  ...rest\n}) {\n  const variantClasses = {\n    primary: 'bg-blue-600 hover:bg-blue-700 text-white',\n    success: 'bg-emerald-600 hover:bg-emerald-700 text-white',\n    danger: 'bg-rose-600 hover:bg-rose-700 text-white',\n  };\n\n  const activeStyle = variantClasses[variant] || variantClasses.primary;\n\n  return (\n    <button\n      type={type}\n      onClick={onClick}\n      className={`px-4 py-2 rounded-lg font-semibold text-sm shadow-sm transition-colors cursor-pointer disabled:opacity-50 ${activeStyle}`}\n      {...rest}\n    >\n      {text}\n    </button>\n  );\n}",
  "6": "// ==========================================\n// File 1 (Parent / Container): ItemListContainer6.jsx\n// ==========================================\nimport ItemList from './ItemList6';\n\nexport default function ItemListContainer() {\n  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];\n\n  return <ItemList title=\"Fresh Market Items\" items={fruits} />;\n}\n\n// ==========================================\n// File 2 (Child Component): ItemList6.jsx\n// ==========================================\nexport default function ItemList({ title = 'Item List', items = [] }) {\n  return (\n    <div className=\"bg-white p-5 rounded-xl shadow-sm border border-slate-200\">\n      <h4 className=\"text-base font-bold mb-2 text-slate-800\">{title}</h4>\n      {items.length === 0 ? (\n        <p className=\"text-sm text-slate-500\">No items in list.</p>\n      ) : (\n        <ul className=\"list-disc list-inside space-y-1\">\n          {items.map((item) => (\n            <li key={item} className=\"text-sm text-slate-700 hover:text-blue-600 transition-colors\">\n              {item}\n            </li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}",
  "7": "// ==========================================\n// File 1 (Parent / Container): FormExample7.jsx\n// ==========================================\nimport LabeledInput from './LabeledInput7';\n\nexport default function FormExample() {\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    alert('Form submitted! (In Practice 6 we will bind these inputs with useState)');\n  };\n\n  return (\n    <div className=\"w-full max-w-sm p-5 bg-white rounded-xl shadow-sm border border-slate-200\">\n      <h3 className=\"text-lg font-bold mb-4 text-slate-800\">Create Account</h3>\n      <form onSubmit={handleSubmit}>\n        <LabeledInput label=\"Full Name\" type=\"text\" autoComplete=\"name\" required />\n        <LabeledInput label=\"Email\" type=\"email\" autoComplete=\"email\" required />\n        <LabeledInput label=\"Password\" type=\"password\" autoComplete=\"new-password\" required />\n        <button\n          type=\"submit\"\n          className=\"w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors mt-1 cursor-pointer\"\n        >\n          Register\n        </button>\n      </form>\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): LabeledInput7.jsx\n// ==========================================\nexport default function LabeledInput({ label, type = 'text', id, ...rest }) {\n  const inputId = id || `field-${label.toLowerCase().replace(/\\s+/g, '-')}`;\n\n  return (\n    <div className=\"mb-3\">\n      <label\n        htmlFor={inputId}\n        className=\"block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1\"\n      >\n        {label}\n      </label>\n      <input\n        id={inputId}\n        type={type}\n        placeholder={`Enter ${label.toLowerCase()}...`}\n        className=\"w-full py-2 px-3 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n        {...rest}\n      />\n    </div>\n  );\n}",
  "8": "// ==========================================\n// File 1 (Parent / Container): VisibilityController8.jsx\n// ==========================================\nimport ToggleableText from './TogglebleText8';\n\nexport default function VisibilityController() {\n  return (\n    <div className=\"space-y-2\">\n      <ToggleableText text=\"Visible message: isVisible={true} renders this banner.\" isVisible={true} />\n      <ToggleableText text=\"Hidden message: isVisible={false} renders nothing.\" isVisible={false} />\n      <p className=\"text-xs text-slate-500\">\n        (Notice the second <code>ToggleableText</code> component is hidden because <code>isVisible</code> is false.)\n      </p>\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): TogglebleText8.jsx\n// ==========================================\nexport default function ToggleableText({ text, isVisible = false }) {\n  return (\n    <div className=\"min-h-6\">\n      {Boolean(isVisible) && (\n        <p className=\"p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm font-medium\">\n          {text}\n        </p>\n      )}\n    </div>\n  );\n}",
  "9": "// ==========================================\n// File 1 (Parent / Container): AlertContainer9.jsx\n// ==========================================\nimport Alert from './Alert9';\n\nexport default function AlertContainer() {\n  return (\n    <div className=\"space-y-2.5\">\n      <Alert type=\"success\" message=\"Operation completed successfully.\" />\n      <Alert type=\"warning\" message=\"Please back up your database before migrating.\" />\n      <Alert type=\"error\" message=\"Failed to connect to authentication server.\" />\n      <Alert message=\"Default fallback variant when type prop is omitted.\" />\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): Alert9.jsx\n// ==========================================\nexport default function Alert({ type = 'info', message }) {\n  const alertStyles = {\n    success: 'bg-emerald-50 border-emerald-500 text-emerald-900',\n    warning: 'bg-amber-50 border-amber-500 text-amber-900',\n    error: 'bg-rose-50 border-rose-500 text-rose-900',\n    info: 'bg-blue-50 border-blue-500 text-blue-900',\n  };\n\n  const activeClass = alertStyles[type] || alertStyles.info;\n\n  return (\n    <div role=\"alert\" className={`border-l-4 p-3.5 rounded-r-lg ${activeClass} flex items-center text-sm shadow-xs`}>\n      <span className=\"font-bold mr-2 uppercase text-xs tracking-wider\">{type}:</span>\n      <span>{message}</span>\n    </div>\n  );\n}",
  "10": "export default function DynamicMenu({ items = [], activePath = '/' }) {\n  return (\n    <nav aria-label=\"Example Navigation\" className=\"bg-slate-900 p-3 rounded-xl shadow-sm\">\n      <ul className=\"flex flex-wrap gap-2 justify-center\">\n        {items.map((item) => {\n          const isActive = item.path === activePath;\n          return (\n            <li key={item.id}>\n              <a\n                href={item.path}\n                aria-current={isActive ? 'page' : undefined}\n                onClick={(e) => e.preventDefault()}\n                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors inline-block ${\n                  isActive\n                    ? 'bg-blue-600 text-white'\n                    : 'text-slate-300 hover:text-white hover:bg-slate-800'\n                }`}\n              >\n                {item.label}\n              </a>\n            </li>\n          );\n        })}\n      </ul>\n    </nav>\n  );\n}",
  "11": "export default function CardWrapper({ title, subtitle, footer, children }) {\n  return (\n    <section className=\"border border-slate-200 rounded-xl p-5 shadow-sm bg-white\">\n      <header className=\"border-b border-slate-200 pb-3 mb-4\">\n        <h3 className=\"text-lg font-bold text-slate-900\">{title}</h3>\n        {subtitle && <p className=\"text-xs text-slate-500 mt-0.5\">{subtitle}</p>}\n      </header>\n      <div className=\"text-slate-700 text-sm\">{children}</div>\n      {footer && (\n        <footer className=\"mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500\">\n          {footer}\n        </footer>\n      )}\n    </section>\n  );\n}",
  "12": "export default function UserStatus({ username = 'Anonymous', isOnline = false }) {\n  return (\n    <div className=\"p-3.5 border border-slate-200 rounded-xl inline-flex items-center gap-2.5 bg-white shadow-xs m-1\">\n      <span\n        className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-rose-500'}`}\n        aria-hidden=\"true\"\n      />\n      <strong className=\"text-slate-900 text-sm\">{username}</strong>\n      <span\n        className={`text-xs font-bold px-2 py-0.5 rounded-full ${\n          isOnline ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'\n        }`}\n      >\n        {isOnline ? 'ONLINE' : 'OFFLINE'}\n      </span>\n      {isOnline && <span className=\"text-xs text-slate-500\">(Available to chat)</span>}\n    </div>\n  );\n}",
  "13": "export default function ArticleLayout({ title, author = 'Web Engineering Course', content }) {\n  return (\n    <>\n      <header className=\"bg-blue-50 p-4 rounded-t-xl border border-blue-100\">\n        <h3 className=\"text-lg font-bold text-blue-950\">{title}</h3>\n        <p className=\"text-xs text-blue-700 mt-0.5\">By {author}</p>\n      </header>\n\n      <div className=\"p-4 bg-white border-x border-slate-200 text-slate-700 text-sm leading-relaxed\">\n        <p>{content}</p>\n      </div>\n\n      <footer className=\"px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-b-xl text-xs text-slate-500\">\n        Rendered with React Fragments (zero extra wrapper &lt;div&gt; in DOM)\n      </footer>\n    </>\n  );\n}",
  "14": "export default function ProductCard({ product }) {\n  if (!product) {\n    return (\n      <div className=\"border border-rose-200 bg-rose-50 text-rose-700 p-4 rounded-xl text-sm font-medium w-64\">\n        No product data provided (Guard Clause Fallback)\n      </div>\n    );\n  }\n\n  const { name, price, category = 'General', inStock = true } = product;\n\n  return (\n    <div className=\"border border-slate-200 p-5 rounded-xl hover:border-blue-400 transition-colors shadow-xs bg-white w-64\">\n      <div className=\"flex items-start justify-between gap-2 mb-2\">\n        <h4 className=\"text-base font-bold text-slate-900\">{name}</h4>\n        <span\n          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${\n            inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'\n          }`}\n        >\n          {inStock ? 'In Stock' : 'Sold Out'}\n        </span>\n      </div>\n\n      <p className=\"text-slate-700 text-sm\">\n        Price: <span className=\"text-emerald-700 font-bold text-base\">${Number(price).toFixed(2)}</span>\n      </p>\n\n      <div className=\"mt-3 pt-3 border-t border-slate-100\">\n        <span className=\"inline-block bg-slate-100 rounded-full px-3 py-1 text-xs font-semibold text-slate-700\">\n          {category}\n        </span>\n      </div>\n    </div>\n  );\n}"
};

function ExampleInspectorCard({
  number,
  title,
  category,
  files,
  propsPassed,
  howItWorks,
  pros,
  pitfall,
  children,
}) {
  const isMultiFile = files.includes('+');

  return (
    <section
      id={`ex-${number}`}
      className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden scroll-mt-24"
    >
      {/* Card Header */}
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-blue-600 text-white">
            #{number}
          </span>
          <div>
            <h2 className="text-lg font-bold text-slate-900">{title}</h2>
            <p className="text-xs text-slate-500 font-mono">{files}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isMultiFile && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              Parent + Child Composition
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      {/* Card Body: Live Component Preview + Teaching Notes */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Live Rendered Output + Exact Props Passed */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Live Rendered Output
            </div>
            <div className="p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/70">
              {children}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              JSX Usage &amp; Props Passed from Parent
            </div>
            <pre className="p-3.5 rounded-xl bg-slate-900 text-sky-300 text-xs font-mono overflow-x-auto">
              {propsPassed}
            </pre>
          </div>
        </div>

        {/* Right: Engineering Breakdown (How It Works, Pros, Pitfalls) */}
        <div className="lg:col-span-5 space-y-3 text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              How It Works
            </h3>
            <p className="text-slate-600 leading-relaxed">{howItWorks}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              Why Use This Pattern (Pros)
            </h3>
            <p className="text-emerald-900 leading-relaxed">{pros}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">
              Common Pitfall to Avoid
            </h3>
            <p className="text-rose-900 leading-relaxed">{pitfall}</p>
          </div>
        </div>
      </div>

      {/* Collapsible Source Code Drawer (Shows BOTH Parent & Child files when composed!) */}
      <details className="border-t border-slate-200 bg-slate-50/60 group">
        <summary className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-blue-700 hover:text-blue-900 cursor-pointer select-none">
          View Full Component Source Code ({files})
        </summary>
        <div className="px-6 pb-5">
          <pre className="p-4 rounded-xl bg-slate-950 text-slate-100 text-xs font-mono overflow-x-auto leading-relaxed">
            {CODE_SNIPPETS[String(number)]}
          </pre>
        </div>
      </details>
    </section>
  );
}

export default function App() {
  const usersData = [
    { id: 'u-1', name: 'John Doe', age: 30, occupation: 'Software Engineer' },
    { id: 'u-2', name: 'Jane Smith', age: 25, occupation: 'Product Designer' },
    { id: 'u-3', name: 'Alice Johnson', age: 28, occupation: 'Frontend Architect' },
  ];

  const menuItems = [
    { id: 'nav-home', label: 'Home', path: '/' },
    { id: 'nav-about', label: 'About', path: '/about' },
    { id: 'nav-services', label: 'Services', path: '/services' },
    { id: 'nav-contact', label: 'Contact', path: '/contact' },
  ];

  const quickJumpLinks = [
    { num: 1, label: 'Hello World' },
    { num: 2, label: 'Basic Props' },
    { num: 3, label: 'Default Props' },
    { num: 4, label: 'User List' },
    { num: 5, label: 'Callbacks' },
    { num: 6, label: 'Item List' },
    { num: 7, label: 'Form Inputs' },
    { num: 8, label: 'Toggle &&' },
    { num: 9, label: 'Dynamic Styles' },
    { num: 10, label: 'Nav Menu' },
    { num: 11, label: 'children' },
    { num: 12, label: 'Ternary UI' },
    { num: 13, label: 'Fragments' },
    { num: 14, label: 'Object Props' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16">
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                React 19 Components &amp; Props — Practice 5 Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Progressive 14-step curriculum • Pure Functional Components, JSX, Props, Composition &amp; Tailwind CSS v4 (Zero Hooks yet!)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                React 19 + Vite SWC
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                14 Examples
              </span>
            </div>
          </div>

          <nav aria-label="Jump to example" className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
            {quickJumpLinks.map((item) => (
              <a
                key={item.num}
                href={`#ex-${item.num}`}
                className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-colors"
              >
                #{item.num} {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        <ExampleInspectorCard
          number={1}
          title="First Functional Component & JSX"
          category="JSX Basics"
          files="HelloWorldJS1.jsx"
          propsPassed="<HelloWorldJS />"
          howItWorks="Defines a capitalized JavaScript function returning JSX markup. Modern React (17+) compiles JSX automatically without needing `import React from 'react'`."
          pros="Encapsulates UI into reusable, self-contained building blocks."
          pitfall="Component names MUST start with an uppercase letter (`HelloWorldJS`), otherwise React treats them as built-in HTML tags."
        >
          <HelloWorldJS />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={2}
          title="Passing Props & Parameter Destructuring"
          category="Props Basics"
          files="GreetingJS2.jsx"
          propsPassed='<GreetingJS name="John Doe" role="Software Engineer" />'
          howItWorks="Parent passes attributes (`name`, `role`) into JSX; child destructures `{ name, role }` directly in its function parameters."
          pros="Clean, readable syntax that eliminates repetitive `props.` prefixes."
          pitfall="Props are strictly read-only (immutable). Never modify `name = '...'` inside the child component."
        >
          <GreetingJS name="John Doe" role="Software Engineer" />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={3}
          title="Default Prop Values & JavaScript Expressions"
          category="Modern React 19"
          files="GreetingJS3.jsx"
          propsPassed={`<GreetingJS2 name="Jane Smith" coursesCount={4} />\n<GreetingJS2 /> {/* Uses default values! */}`}
          howItWorks="Uses ES6 default parameters (`name = 'Guest'`, `coursesCount = 0`) right in the function signature and embeds JS expressions inside `{ ... }`."
          pros="Replaces legacy Class Components (`extends React.Component`) and deprecated `defaultProps`."
          pitfall="Only JS expressions (values) can go inside `{}` — statements like `if` or `for` are invalid inside JSX."
        >
          <div className="space-y-3">
            <GreetingJS2 name="Jane Smith" coursesCount={4} />
            <GreetingJS2 />
          </div>
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={4}
          title="Component Composition & Lists with Stable Keys"
          category="Lists & Composition"
          files="UserList4.jsx + ProfileCard4.jsx"
          propsPassed="<UserList users={usersData} />"
          howItWorks="React favors Composition over Inheritance: `UserList` (Parent) maps over `usersData` and composes a `<ProfileCard />` (Child) for each user, passing `key={user.id}`."
          pros="Clean separation of concerns — `UserList` manages the collection while `ProfileCard` formats a single user."
          pitfall="Avoid `key={index}` when lists can be filtered, sorted, or deleted — always use a stable unique ID."
        >
          <UserList users={usersData} />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={5}
          title="Event Handling via Callback Props & ...rest"
          category="Events & Callbacks"
          files="ButtonContainer5.jsx + ActionButton5.jsx"
          propsPassed='<ActionButton text="Submit" variant="success" onClick={() => handleAction("Submit")} />'
          howItWorks="Parent (`ButtonContainer`) passes an `onClick` callback function down to `ActionButton`, which attaches it to `<button>` and forwards `{...rest}` attributes."
          pros="Decouples button styling from business logic; one button component handles any action."
          pitfall="Pass a function reference `onClick={() => handle(x)}`, NOT an immediate invocation `onClick={handle(x)}`."
        >
          <ButtonContainer />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={6}
          title="Container & Presentational List Pattern"
          category="Lists & Structure"
          files="ItemListContainer6.jsx + ItemList6.jsx"
          propsPassed='<ItemList title="Fresh Market Items" items={["Apple", "Banana", "Cherry", "Date"]} />'
          howItWorks="`ItemListContainer` supplies the array data while `ItemList` renders valid semantic HTML (`<h4>` outside `<ul>`, `<li>` inside `<ul>`)."
          pros="Clean HTML semantics and graceful empty-array handling."
          pitfall="Never put an `<h4>` directly inside a `<ul>` — only `<li>` elements are valid direct children of `<ul>`."
        >
          <ItemListContainer />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={7}
          title="Accessible Reusable Inputs (htmlFor + ...rest)"
          category="Forms & A11y"
          files="FormExample7.jsx + LabeledInput7.jsx"
          propsPassed='<LabeledInput label="Email" type="email" autoComplete="email" required />'
          howItWorks="`FormExample` composes three `LabeledInput` fields. Each `LabeledInput` links `<label htmlFor={inputId}>` to `<input id={inputId} />` and forwards `{...rest}`."
          pros="Clicking any label focuses its input automatically and supports screen readers."
          pitfall="In JSX, use `htmlFor` instead of `for` (since `for` is a reserved JavaScript keyword)."
        >
          <FormExample />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={8}
          title="Conditional Rendering with Logical &&"
          category="Conditional UI"
          files="VisibilityController8.jsx + TogglebleText8.jsx"
          propsPassed={`<ToggleableText text="Visible message..." isVisible={true} />\n<ToggleableText text="Hidden message..." isVisible={false} />`}
          howItWorks="`VisibilityController` passes boolean `isVisible` props to `ToggleableText`, which evaluates `Boolean(isVisible) && <p>{text}</p>`."
          pros="Zero unnecessary DOM nodes when an element is hidden."
          pitfall="Never write `{count && <Comp />}` — if `count` is `0`, React renders the digit `0` on screen!"
        >
          <VisibilityController />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={9}
          title="Dynamic Styling via Variant Lookup Dictionary"
          category="Tailwind Styling"
          files="AlertContainer9.jsx + Alert9.jsx"
          propsPassed='<Alert type="success" message="Operation completed successfully." />'
          howItWorks="`AlertContainer` renders multiple `Alert` variants (`success`, `warning`, `error`, `info`). `Alert` maps `type` to complete Tailwind class strings."
          pros="Eliminates long `if/else` chains and guarantees valid styling even for unknown `type` values."
          pitfall="Never interpolate Tailwind class names like `bg-${color}-50` — Tailwind's static scanner requires complete class strings."
        >
          <AlertContainer />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={10}
          title="Data-Driven Navigation Menu & Active Route"
          category="Navigation"
          files="DynamicMenu10.jsx"
          propsPassed='<DynamicMenu items={menuItems} activePath="/services" />'
          howItWorks="Maps an array of route objects into `<nav><ul><li><a>` links and highlights the link matching `activePath`."
          pros="Navigation items can be loaded dynamically from a JSON config or backend API."
          pitfall={'Always mark the active navigation item with `aria-current="page"` for accessibility.'}
        >
          <DynamicMenu items={menuItems} activePath="/services" />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={11}
          title="Component Composition with children & Slot Props"
          category="Composition"
          files="CardWrapper11.jsx"
          propsPassed={`<CardWrapper title="Student Summary" subtitle="Semester A" footer="Updated today">\n  <p>Any nested JSX renders inside children!</p>\n</CardWrapper>`}
          howItWorks="Uses the special `children` prop for the card body and a `footer` slot prop for bottom metadata."
          pros="Prevents 'Prop Explosion' — parents can pass paragraphs, lists, buttons, or other components inside."
          pitfall="Prefer `children` composition over passing raw HTML strings or deeply nested config objects."
        >
          <CardWrapper
            title="Student Summary Card"
            subtitle="Composition with children + footer slot"
            footer="Last synced: Practice 5 Dashboard"
          >
            <p>
              This paragraph and badge are passed via the special <strong>children</strong> prop:
            </p>
            <div className="mt-2">
              <UserStatus username="ILya" isOnline={true} />
            </div>
          </CardWrapper>
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={12}
          title="Ternary Operator & Status Badges"
          category="Conditional UI"
          files="UserStatus12.jsx"
          propsPassed={`<UserStatus username="Alice" isOnline={true} />\n<UserStatus username="Bob" isOnline={false} />`}
          howItWorks="Combines ternary expressions (`isOnline ? 'ONLINE' : 'OFFLINE'`) for dynamic classes/labels with `&&` for extra status text."
          pros="Clean, single-expression branching directly inside JSX."
          pitfall="Keep ternary expressions shallow — if you need 3+ branches, extract a lookup object (like Example #9)."
        >
          <div className="flex flex-wrap gap-2">
            <UserStatus username="Alice" isOnline={true} />
            <UserStatus username="Bob" isOnline={false} />
          </div>
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={13}
          title="React Fragments (<>...</>) — Avoiding Wrapper Divs"
          category="DOM Structure"
          files="ArticleLayout13.jsx"
          propsPassed='<ArticleLayout title="Understanding React Fragments" author="Web Course" content="..." />'
          howItWorks="Returns `<header>`, `<div>`, and `<footer>` wrapped in `<>...</>` so no extra `<div>` is inserted into the browser DOM."
          pros="Keeps DOM trees shallow and preserves CSS Grid/Flexbox parent-child relationships."
          pitfall="Shorthand `<>...</>` does NOT accept a `key` prop — inside `.map()`, use `<Fragment key={id}>`."
        >
          <ArticleLayout
            title="Understanding React Fragments"
            author="Web Technologies Course"
            content="React Fragments allow you to group a list of sibling elements without adding extra wrapper nodes to the browser DOM."
          />
        </ExampleInspectorCard>

        <ExampleInspectorCard
          number={14}
          title="Passing Objects as Props, Guard Clauses & Fallbacks"
          category="Data Objects"
          files="ProductCard14.jsx"
          propsPassed={`<ProductCard product={{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true }} />\n<ProductCard product={{ name: 'Clean Code Book', price: 29.5 }} />\n<ProductCard />`}
          howItWorks="Checks `if (!product)` first (guard clause), then destructures `{ name, price, category = 'General', inStock = true }`."
          pros="Prevents runtime crashes when data is missing and applies clean defaults for optional object keys."
          pitfall="Never mutate `product.price` inside the child component — treat object props as strictly immutable."
        >
          <div className="flex flex-wrap gap-4">
            <ProductCard product={{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true }} />
            <ProductCard product={{ name: 'Clean Code Book', price: 29.5 }} />
            <ProductCard />
          </div>
        </ExampleInspectorCard>
      </main>
    </div>
  );
}
