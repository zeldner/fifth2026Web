// Ilya Zeldner - Web Technologies Practice 5 (v3)
// Data-Driven React 19 Components & Props Learning Dashboard (AppComponents.jsx)
//
// Highlights of this v3 Dashboard:
//   - Zero Hooks (`useState` / `useEffect` start in Practice 6)
//   - Data-driven `EXAMPLES.map(...)` architecture (demonstrating Example #4/#10 in practice!)
//   - Displays BOTH Parent and Child source code for all composed examples (#4-#9)
//   - Includes Example #15 (Pure Components & Props Immutability), Hands-On Lab Task,
//     and a Props vs. State Bridge Table preparing students for Practice 6.

import HelloWorldJS from './components/firstT/HelloWorldJS1';
import GreetingJS from './components/firstT/GreetingJS2';
import GreetingJS3 from './components/firstT/GreetingJS3';
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
import SortedCourseList from './components/firstT/SortedCourseList15';

const CODE_SNIPPETS = {
  "1": "export default function HelloWorldJS() {\n  return (\n    <div className=\"p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900\">\n      <h2 className=\"text-xl font-bold\">Hello World from React 19!</h2>\n      <p className=\"text-sm text-blue-700 mt-1\">\n        Rendered by a clean functional component with zero boilerplate.\n      </p>\n    </div>\n  );\n}",
  "2": "export default function GreetingJS({ name, role }) {\n  return (\n    <div className=\"p-4 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-950\">\n      <p className=\"text-lg font-semibold\">\n        Welcome, <span className=\"text-indigo-700\">{name}</span>!\n      </p>\n      <p className=\"text-sm text-indigo-700 mt-1\">\n        Role passed via props: <strong>{role}</strong>\n      </p>\n    </div>\n  );\n}",
  "3": "export default function GreetingJS3({ name = 'Guest', coursesCount = 0 }) {\n  return (\n    <div className=\"p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950\">\n      <p className=\"text-lg font-semibold\">\n        Hello, {name.toUpperCase()}!\n      </p>\n      <p className=\"text-sm text-emerald-800 mt-1\">\n        Enrolled courses: <strong>{coursesCount}</strong>{' '}\n        ({coursesCount > 0 ? 'Active Semester' : 'No Courses Yet'})\n      </p>\n    </div>\n  );\n}",
  "4": "// ==========================================\n// File 1 (Parent / Container): UserList4.jsx\n// ==========================================\nimport ProfileCard from './ProfileCard4';\n\nexport default function UserList({ users = [] }) {\n  if (users.length === 0) {\n    return <p className=\"text-sm text-slate-500 italic\">No users available to display.</p>;\n  }\n\n  return (\n    <div className=\"grid grid-cols-1 sm:grid-cols-3 gap-3\">\n      {users.map((user) => (\n        <ProfileCard\n          key={user.id ?? user.name}\n          name={user.name}\n          age={user.age}\n          occupation={user.occupation}\n        />\n      ))}\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): ProfileCard4.jsx\n// ==========================================\nexport default function ProfileCard({ name, age, occupation }) {\n  return (\n    <article className=\"p-4 rounded-xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-shadow\">\n      <div className=\"flex items-center justify-between mb-2\">\n        <h3 className=\"text-base font-bold text-slate-900\">{name}</h3>\n        <span className=\"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800\">\n          Age {age}\n        </span>\n      </div>\n      <p className=\"text-sm text-slate-600\">\n        Occupation: <strong className=\"text-slate-800\">{occupation}</strong>\n      </p>\n    </article>\n  );\n}",
  "5": "// ==========================================\n// File 1 (Parent / Container): ButtonContainer5.jsx\n// ==========================================\nimport ActionButton from './ActionButton5';\n\nexport default function ButtonContainer() {\n  const handleAction = (label) => {\n    console.info(`[Practice 5 Event] ActionButton clicked: \"${label}\"`);\n  };\n\n  return (\n    <div className=\"space-y-2\">\n      <div className=\"flex flex-wrap gap-3\">\n        <ActionButton text=\"Submit\" variant=\"success\" onClick={() => handleAction('Submit')} />\n        <ActionButton text=\"Cancel\" variant=\"danger\" onClick={() => handleAction('Cancel')} />\n        <ActionButton text=\"Learn More\" variant=\"primary\" onClick={() => handleAction('Learn More')} />\n        <ActionButton text=\"Disabled State\" disabled />\n      </div>\n      <p className=\"text-xs text-slate-500\">\n        Open Browser DevTools Console (F12) to inspect non-blocking callback logs when clicking buttons.\n      </p>\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): ActionButton5.jsx\n// ==========================================\nexport default function ActionButton({\n  text,\n  variant = 'primary',\n  onClick,\n  type = 'button',\n  ...rest\n}) {\n  const variantClasses = {\n    primary: 'bg-blue-600 hover:bg-blue-700 text-white',\n    success: 'bg-emerald-600 hover:bg-emerald-700 text-white',\n    danger: 'bg-rose-600 hover:bg-rose-700 text-white',\n  };\n\n  const activeStyle = variantClasses[variant] || variantClasses.primary;\n\n  return (\n    <button\n      type={type}\n      onClick={onClick}\n      className={`px-4 py-2 rounded-lg font-semibold text-sm shadow-xs transition-colors cursor-pointer disabled:opacity-50 ${activeStyle}`}\n      {...rest}\n    >\n      {text}\n    </button>\n  );\n}",
  "6": "// ==========================================\n// File 1 (Parent / Container): ItemListContainer6.jsx\n// ==========================================\nimport ItemList from './ItemList6';\n\nexport default function ItemListContainer() {\n  const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];\n\n  return <ItemList title=\"Fresh Market Items\" items={fruits} />;\n}\n\n// ==========================================\n// File 2 (Child Component): ItemList6.jsx\n// ==========================================\nexport default function ItemList({ title = 'Item List', items = [] }) {\n  return (\n    <div className=\"bg-white p-5 rounded-xl shadow-xs border border-slate-200\">\n      <h4 className=\"text-base font-bold mb-2 text-slate-800\">{title}</h4>\n      {items.length === 0 ? (\n        <p className=\"text-sm text-slate-500\">No items in list.</p>\n      ) : (\n        <ul className=\"list-disc list-inside space-y-1\">\n          {items.map((item) => (\n            <li key={item} className=\"text-sm text-slate-700 hover:text-blue-600 transition-colors\">\n              {item}\n            </li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}",
  "7": "// ==========================================\n// File 1 (Parent / Container): FormExample7.jsx\n// ==========================================\nimport LabeledInput from './LabeledInput7';\n\nexport default function FormExample() {\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    const formData = new FormData(event.currentTarget);\n    console.info('[Practice 5 Form Submit]', Object.fromEntries(formData.entries()));\n  };\n\n  return (\n    <div className=\"w-full max-w-sm p-5 bg-white rounded-xl shadow-xs border border-slate-200\">\n      <h3 className=\"text-lg font-bold mb-4 text-slate-800\">Create Account</h3>\n      <form onSubmit={handleSubmit}>\n        <LabeledInput label=\"Full Name\" name=\"fullName\" type=\"text\" autoComplete=\"name\" required />\n        <LabeledInput label=\"Email\" name=\"email\" type=\"email\" autoComplete=\"email\" required />\n        <LabeledInput label=\"Password\" name=\"password\" type=\"password\" autoComplete=\"new-password\" required />\n        <button\n          type=\"submit\"\n          className=\"w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-2.5 px-4 rounded-lg transition-colors mt-1 cursor-pointer\"\n        >\n          Register\n        </button>\n      </form>\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): LabeledInput7.jsx\n// ==========================================\nexport default function LabeledInput({ label, type = 'text', id, ...rest }) {\n  const inputId = id || `field-${label.toLowerCase().replace(/\\s+/g, '-')}`;\n\n  return (\n    <div className=\"mb-3\">\n      <label\n        htmlFor={inputId}\n        className=\"block text-slate-700 text-xs font-bold uppercase tracking-wide mb-1\"\n      >\n        {label}\n      </label>\n      <input\n        id={inputId}\n        type={type}\n        placeholder={`Enter ${label.toLowerCase()}...`}\n        className=\"w-full py-2 px-3 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n        {...rest}\n      />\n    </div>\n  );\n}",
  "8": "// ==========================================\n// File 1 (Parent / Container): VisibilityController8.jsx\n// ==========================================\nimport ToggleableText from './ToggleableText8';\n\nexport default function VisibilityController() {\n  return (\n    <div className=\"space-y-2\">\n      <ToggleableText text=\"Visible message: isVisible={true} mounts this banner.\" isVisible={true} />\n      <ToggleableText text=\"Hidden message: isVisible={false} renders nothing in DOM.\" isVisible={false} />\n      <p className=\"text-xs text-slate-500\">\n        (The second <code>ToggleableText</code> renders nothing because <code>isVisible</code> is false.)\n      </p>\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): ToggleableText8.jsx\n// ==========================================\nexport default function ToggleableText({ text, isVisible = false }) {\n  return (\n    <div className=\"min-h-6\">\n      {Boolean(isVisible) && (\n        <p className=\"p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-sm font-medium\">\n          {text}\n        </p>\n      )}\n    </div>\n  );\n}",
  "9": "// ==========================================\n// File 1 (Parent / Container): AlertContainer9.jsx\n// ==========================================\nimport Alert from './Alert9';\n\nexport default function AlertContainer() {\n  return (\n    <div className=\"space-y-2.5\">\n      <Alert type=\"success\" message=\"Operation completed successfully.\" />\n      <Alert type=\"warning\" message=\"Please back up your database before migrating.\" />\n      <Alert type=\"error\" message=\"Failed to connect to authentication server.\" />\n      <Alert message=\"Default fallback variant when type prop is omitted.\" />\n    </div>\n  );\n}\n\n// ==========================================\n// File 2 (Child Component): Alert9.jsx\n// ==========================================\nexport default function Alert({ type = 'info', message }) {\n  const alertStyles = {\n    success: 'bg-emerald-50 border-emerald-500 text-emerald-900',\n    warning: 'bg-amber-50 border-amber-500 text-amber-900',\n    error: 'bg-rose-50 border-rose-500 text-rose-900',\n    info: 'bg-blue-50 border-blue-500 text-blue-900',\n  };\n\n  const activeClass = alertStyles[type] || alertStyles.info;\n\n  return (\n    <div role=\"alert\" className={`border-l-4 p-3.5 rounded-r-lg ${activeClass} flex items-center text-sm shadow-xs`}>\n      <span className=\"font-bold mr-2 uppercase text-xs tracking-wider\">{type}:</span>\n      <span>{message}</span>\n    </div>\n  );\n}",
  "10": "export default function DynamicMenu({ items = [], activePath = '/' }) {\n  return (\n    <nav aria-label=\"Example Navigation\" className=\"bg-slate-900 p-3 rounded-xl shadow-xs\">\n      <ul className=\"flex flex-wrap gap-2 justify-center\">\n        {items.map((item) => {\n          const isActive = item.path === activePath;\n          return (\n            <li key={item.id}>\n              <a\n                href={item.path}\n                aria-current={isActive ? 'page' : undefined}\n                onClick={(e) => e.preventDefault()}\n                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors inline-block ${\n                  isActive\n                    ? 'bg-blue-600 text-white'\n                    : 'text-slate-300 hover:text-white hover:bg-slate-800'\n                }`}\n              >\n                {item.label}\n              </a>\n            </li>\n          );\n        })}\n      </ul>\n    </nav>\n  );\n}",
  "11": "export default function CardWrapper({ title, subtitle, footer, children }) {\n  return (\n    <section className=\"border border-slate-200 rounded-xl p-5 shadow-xs bg-white\">\n      <header className=\"border-b border-slate-200 pb-3 mb-4\">\n        <h3 className=\"text-lg font-bold text-slate-900\">{title}</h3>\n        {subtitle && <p className=\"text-xs text-slate-500 mt-0.5\">{subtitle}</p>}\n      </header>\n      <div className=\"text-slate-700 text-sm\">{children}</div>\n      {footer && (\n        <footer className=\"mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500\">\n          {footer}\n        </footer>\n      )}\n    </section>\n  );\n}",
  "12": "export default function UserStatus({ username = 'Anonymous', isOnline = false }) {\n  return (\n    <div className=\"p-3.5 border border-slate-200 rounded-xl inline-flex items-center gap-2.5 bg-white shadow-xs m-1\">\n      <span\n        className={`w-2.5 h-2.5 rounded-full ${isOnline ? 'bg-emerald-500' : 'bg-rose-500'}`}\n        aria-hidden=\"true\"\n      />\n      <strong className=\"text-slate-900 text-sm\">{username}</strong>\n      <span\n        className={`text-xs font-bold px-2 py-0.5 rounded-full ${\n          isOnline ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'\n        }`}\n      >\n        {isOnline ? 'ONLINE' : 'OFFLINE'}\n      </span>\n      {isOnline && <span className=\"text-xs text-slate-500\">(Available to chat)</span>}\n    </div>\n  );\n}",
  "13": "export default function ArticleLayout({ title, author = 'Web Engineering Course', content }) {\n  return (\n    <>\n      <header className=\"bg-blue-50 p-4 rounded-t-xl border border-blue-100\">\n        <h3 className=\"text-lg font-bold text-blue-950\">{title}</h3>\n        <p className=\"text-xs text-blue-700 mt-0.5\">By {author}</p>\n      </header>\n\n      <div className=\"p-4 bg-white border-x border-slate-200 text-slate-700 text-sm leading-relaxed\">\n        <p>{content}</p>\n      </div>\n\n      <footer className=\"px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-b-xl text-xs text-slate-500\">\n        Rendered with React Fragments (zero extra wrapper &lt;div&gt; in DOM)\n      </footer>\n    </>\n  );\n}",
  "14": "export default function ProductCard({ product }) {\n  if (!product) {\n    return (\n      <div className=\"border border-rose-200 bg-rose-50 text-rose-700 p-4 rounded-xl text-sm font-medium w-64\">\n        No product data provided (Guard Clause Fallback)\n      </div>\n    );\n  }\n\n  const { name, price, category = 'General', inStock = true } = product;\n\n  return (\n    <div className=\"border border-slate-200 p-5 rounded-xl hover:border-blue-400 transition-colors shadow-xs bg-white w-64\">\n      <div className=\"flex items-start justify-between gap-2 mb-2\">\n        <h4 className=\"text-base font-bold text-slate-900\">{name}</h4>\n        <span\n          className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${\n            inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'\n          }`}\n        >\n          {inStock ? 'In Stock' : 'Sold Out'}\n        </span>\n      </div>\n\n      <p className=\"text-slate-700 text-sm\">\n        Price: <span className=\"text-emerald-700 font-bold text-base\">${Number(price).toFixed(2)}</span>\n      </p>\n\n      <div className=\"mt-3 pt-3 border-t border-slate-100\">\n        <span className=\"inline-block bg-slate-100 rounded-full px-3 py-1 text-xs font-semibold text-slate-700\">\n          {category}\n        </span>\n      </div>\n    </div>\n  );\n}",
  "15": "export default function SortedCourseList({\n  title = 'Sorted Course Catalog (Immutable Clone)',\n  courses = [],\n}) {\n  // Always clone with [...courses] before sorting so we never mutate the parent's prop array!\n  const sortedCourses = [...courses].sort((a, b) => a.code.localeCompare(b.code));\n\n  return (\n    <div className=\"bg-white p-5 rounded-xl border border-slate-200 shadow-xs\">\n      <div className=\"flex items-center justify-between mb-3\">\n        <h4 className=\"text-base font-bold text-slate-900\">{title}</h4>\n        <span className=\"text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800\">\n          [...courses].sort()\n        </span>\n      </div>\n      <ul className=\"divide-y divide-slate-100\">\n        {sortedCourses.map((course) => (\n          <li key={course.code} className=\"py-2 flex items-center justify-between text-sm\">\n            <span className=\"font-mono font-bold text-blue-700\">{course.code}</span>\n            <span className=\"text-slate-700\">{course.name}</span>\n            <span className=\"text-xs text-slate-500\">{course.credits} pts</span>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}"
};

function ExampleInspectorCard({ item }) {
  const {
    number,
    tier,
    title,
    category,
    files,
    propsPassed,
    howItWorks,
    pros,
    pitfall,
    preview,
  } = item;

  const isMultiFile = files.includes('+');

  return (
    <section
      id={`ex-${number}`}
      className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden scroll-mt-28"
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
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-bold ${
              tier === 'Core'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-purple-100 text-purple-800'
            }`}
          >
            {tier} Lesson
          </span>
          {isMultiFile && (
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
              Parent + Child
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Live Rendered Output
            </div>
            <div className="p-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/70">
              {preview}
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

      {/* Collapsible Full Source Code Drawer */}
      <details className="border-t border-slate-200 bg-slate-50/60">
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

  const unsortedCourses = [
    { code: '61756', name: 'Software Engineering Methods', credits: 4.5 },
    { code: '61102', name: 'Data Structures', credits: 5.0 },
    { code: '61420', name: 'Web Technologies', credits: 4.0 },
  ];

  const examples = [
    {
      number: 1,
      shortLabel: 'Hello World',
      tier: 'Core',
      title: 'First Functional Component & JSX',
      category: 'JSX Basics',
      files: 'HelloWorldJS1.jsx',
      propsPassed: '<HelloWorldJS />',
      howItWorks: 'Defines a capitalized JavaScript function returning JSX markup. Modern React (17+) compiles JSX automatically without `import React from "react"`.',
      pros: 'Encapsulates UI into reusable, self-contained building blocks.',
      pitfall: 'Component names MUST start with an uppercase letter (`HelloWorldJS`), otherwise React treats them as built-in HTML tags.',
      preview: <HelloWorldJS />,
    },
    {
      number: 2,
      shortLabel: 'Basic Props',
      tier: 'Core',
      title: 'Passing Props & Parameter Destructuring',
      category: 'Props Basics',
      files: 'GreetingJS2.jsx',
      propsPassed: '<GreetingJS name="John Doe" role="Software Engineer" />',
      howItWorks: 'Parent passes attributes (`name`, `role`) into JSX; child destructures `{ name, role }` directly in its function parameters.',
      pros: 'Clean, readable syntax that eliminates repetitive `props.` prefixes.',
      pitfall: 'Props are strictly read-only (immutable). Never modify `name = "..."` inside the child component.',
      preview: <GreetingJS name="John Doe" role="Software Engineer" />,
    },
    {
      number: 3,
      shortLabel: 'Default Props',
      tier: 'Core',
      title: 'Default Prop Values & JavaScript Expressions',
      category: 'Modern React 19',
      files: 'GreetingJS3.jsx',
      propsPassed: '<GreetingJS3 name="Jane Smith" coursesCount={4} />\n<GreetingJS3 /> {/* Uses ES6 default parameter values */}',
      howItWorks: 'Uses ES6 default parameters (`name = "Guest"`, `coursesCount = 0`) right in the signature and embeds JS expressions inside `{ ... }`.',
      pros: 'Replaces legacy Class Components (`extends React.Component`) and deprecated `defaultProps`.',
      pitfall: 'Only JS expressions (values) work inside `{}` — statements like `if` or `for` are invalid inside JSX.',
      preview: (
        <div className="space-y-3">
          <GreetingJS3 name="Jane Smith" coursesCount={4} />
          <GreetingJS3 />
        </div>
      ),
    },
    {
      number: 4,
      shortLabel: 'User List',
      tier: 'Core',
      title: 'Component Composition & Lists with Stable Keys',
      category: 'Composition & Lists',
      files: 'UserList4.jsx + ProfileCard4.jsx',
      propsPassed: '<UserList users={usersData} />',
      howItWorks: 'React favors Composition over Inheritance: `UserList` (Parent) maps over `usersData` and composes a `<ProfileCard />` (Child) for each user with `key={user.id}`.',
      pros: 'Clean separation of concerns — `UserList` manages the collection while `ProfileCard` formats a single user.',
      pitfall: 'Avoid `key={index}` when lists can be filtered, sorted, or deleted — always use a stable unique ID.',
      preview: <UserList users={usersData} />,
    },
    {
      number: 5,
      shortLabel: 'Callbacks',
      tier: 'Core',
      title: 'Event Handling via Callback Props & ...rest',
      category: 'Events & Callbacks',
      files: 'ButtonContainer5.jsx + ActionButton5.jsx',
      propsPassed: '<ActionButton text="Submit" variant="success" onClick={() => handleAction("Submit")} />',
      howItWorks: 'Parent (`ButtonContainer`) passes an `onClick` callback function down to `ActionButton`, which attaches it to `<button>` and forwards `{...rest}` attributes.',
      pros: 'Decouples button styling from business logic; one button component handles any action.',
      pitfall: 'Pass a function reference `onClick={() => handle(x)}`, NOT an immediate call `onClick={handle(x)}` (which runs during render).',
      preview: <ButtonContainer />,
    },
    {
      number: 6,
      shortLabel: 'Item List',
      tier: 'Core',
      title: 'Container & Presentational List Pattern',
      category: 'Lists & Structure',
      files: 'ItemListContainer6.jsx + ItemList6.jsx',
      propsPassed: '<ItemList title="Fresh Market Items" items={["Apple", "Banana", "Cherry", "Date"]} />',
      howItWorks: '`ItemListContainer` supplies the array data while `ItemList` renders valid semantic HTML (`<h4>` outside `<ul>`, `<li>` inside `<ul>`).',
      pros: 'Clean HTML semantics and graceful empty-array handling.',
      pitfall: 'Never put an `<h4>` directly inside a `<ul>` — only `<li>` elements are valid direct children of `<ul>`.',
      preview: <ItemListContainer />,
    },
    {
      number: 7,
      shortLabel: 'Form Inputs',
      tier: 'Core',
      title: 'Accessible Reusable Inputs (htmlFor + ...rest)',
      category: 'Forms & A11y',
      files: 'FormExample7.jsx + LabeledInput7.jsx',
      propsPassed: '<LabeledInput label="Email" name="email" type="email" autoComplete="email" required />',
      howItWorks: '`FormExample` composes three `LabeledInput` fields. Each `LabeledInput` links `<label htmlFor={inputId}>` to `<input id={inputId} />` and forwards `{...rest}`.',
      pros: 'Clicking any label focuses its input automatically and supports screen readers.',
      pitfall: 'In JSX, use `htmlFor` instead of `for` (since `for` is a reserved JavaScript keyword).',
      preview: <FormExample />,
    },
    {
      number: 8,
      shortLabel: 'Toggle &&',
      tier: 'Core',
      title: 'Conditional Rendering with Logical &&',
      category: 'Conditional UI',
      files: 'VisibilityController8.jsx + ToggleableText8.jsx',
      propsPassed: '<ToggleableText text="Visible message..." isVisible={true} />\n<ToggleableText text="Hidden message..." isVisible={false} />',
      howItWorks: '`VisibilityController` passes boolean `isVisible` props to `ToggleableText`, which evaluates `Boolean(isVisible) && <p>{text}</p>`.',
      pros: 'Zero unnecessary DOM nodes when an element is hidden.',
      pitfall: 'Never write `{count && <Comp />}` — if `count` is `0`, React renders the digit `0` on screen!',
      preview: <VisibilityController />,
    },
    {
      number: 9,
      shortLabel: 'Dynamic Styles',
      tier: 'Advanced',
      title: 'Dynamic Styling via Variant Lookup Dictionary',
      category: 'Tailwind Styling',
      files: 'AlertContainer9.jsx + Alert9.jsx',
      propsPassed: '<Alert type="success" message="Operation completed successfully." />',
      howItWorks: '`AlertContainer` renders multiple `Alert` variants (`success`, `warning`, `error`, `info`). `Alert` maps `type` to complete Tailwind class strings.',
      pros: 'Eliminates long `if/else` chains and guarantees valid styling even for unknown `type` values.',
      pitfall: 'Never interpolate Tailwind class names like `bg-${color}-50` — Tailwind static scanner requires complete class strings.',
      preview: <AlertContainer />,
    },
    {
      number: 10,
      shortLabel: 'Nav Menu',
      tier: 'Advanced',
      title: 'Data-Driven Navigation Menu & Active Route',
      category: 'Navigation',
      files: 'DynamicMenu10.jsx',
      propsPassed: '<DynamicMenu items={menuItems} activePath="/services" />',
      howItWorks: 'Maps an array of route objects into `<nav><ul><li><a>` links and highlights the link matching `activePath`.',
      pros: 'Navigation items can be loaded dynamically from a JSON config or backend API.',
      pitfall: 'Always mark the active navigation item with `aria-current="page"` for accessibility.',
      preview: <DynamicMenu items={menuItems} activePath="/services" />,
    },
    {
      number: 11,
      shortLabel: 'children',
      tier: 'Advanced',
      title: 'Component Composition with children & Slot Props',
      category: 'Composition',
      files: 'CardWrapper11.jsx',
      propsPassed: '<CardWrapper title="Student Summary" subtitle="Semester A" footer="Updated today">\n  <p>Any nested JSX renders inside children!</p>\n</CardWrapper>',
      howItWorks: 'Uses the special `children` prop for the card body and a `footer` slot prop for bottom metadata.',
      pros: 'Prevents "Prop Explosion" — parents can pass paragraphs, lists, buttons, or other components inside.',
      pitfall: 'Prefer `children` composition over passing raw HTML strings or deeply nested config objects.',
      preview: (
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
      ),
    },
    {
      number: 12,
      shortLabel: 'Ternary UI',
      tier: 'Advanced',
      title: 'Ternary Operator & Status Badges',
      category: 'Conditional UI',
      files: 'UserStatus12.jsx',
      propsPassed: '<UserStatus username="Alice" isOnline={true} />\n<UserStatus username="Bob" isOnline={false} />',
      howItWorks: 'Combines ternary expressions (`isOnline ? "ONLINE" : "OFFLINE"`) for dynamic classes/labels with `&&` for extra status text.',
      pros: 'Clean, single-expression branching directly inside JSX.',
      pitfall: 'Keep ternary expressions shallow — if you need 3+ branches, extract a lookup object (like Example #9).',
      preview: (
        <div className="flex flex-wrap gap-2">
          <UserStatus username="Alice" isOnline={true} />
          <UserStatus username="Bob" isOnline={false} />
        </div>
      ),
    },
    {
      number: 13,
      shortLabel: 'Fragments',
      tier: 'Advanced',
      title: 'React Fragments (<>...</>) — Avoiding Wrapper Divs',
      category: 'DOM Structure',
      files: 'ArticleLayout13.jsx',
      propsPassed: '<ArticleLayout title="Understanding React Fragments" author="Web Course" content="..." />',
      howItWorks: 'Returns `<header>`, `<div>`, and `<footer>` wrapped in `<>...</>` so no extra `<div>` is inserted into the browser DOM.',
      pros: 'Keeps DOM trees shallow and preserves CSS Grid/Flexbox parent-child relationships.',
      pitfall: 'Shorthand `<>...</>` does NOT accept a `key` prop — inside `.map()`, use `<Fragment key={id}>`.',
      preview: (
        <ArticleLayout
          title="Understanding React Fragments"
          author="Web Technologies Course"
          content="React Fragments allow you to group a list of sibling elements without adding extra wrapper nodes to the browser DOM."
        />
      ),
    },
    {
      number: 14,
      shortLabel: 'Object Props',
      tier: 'Advanced',
      title: 'Passing Objects as Props, Guard Clauses & Fallbacks',
      category: 'Data Objects',
      files: 'ProductCard14.jsx',
      propsPassed: '<ProductCard product={{ name: "Laptop", price: 999.99, category: "Electronics", inStock: true }} />\n<ProductCard product={{ name: "Clean Code Book", price: 29.5 }} />\n<ProductCard />',
      howItWorks: 'Checks `if (!product)` first (guard clause), then destructures `{ name, price, category = "General", inStock = true }`.',
      pros: 'Prevents runtime crashes when data is missing and applies clean defaults for optional object keys.',
      pitfall: 'Never mutate `product.price` inside the child component — treat object props as strictly immutable.',
      preview: (
        <div className="flex flex-wrap gap-4">
          <ProductCard product={{ name: 'Laptop', price: 999.99, category: 'Electronics', inStock: true }} />
          <ProductCard product={{ name: 'Clean Code Book', price: 29.5 }} />
          <ProductCard />
        </div>
      ),
    },
    {
      number: 15,
      shortLabel: 'Purity & Sort',
      tier: 'Advanced',
      title: 'Component Purity & Props Immutability ([...courses].sort())',
      category: 'React 19 Purity',
      files: 'SortedCourseList15.jsx',
      propsPassed: '<SortedCourseList courses={unsortedCourses} />',
      howItWorks: 'Clones the incoming array (`[...courses]`) before sorting by course code so the parent array is never mutated.',
      pros: 'Guarantees pure rendering and passes React `<StrictMode>` double-render verification cleanly.',
      pitfall: 'Never call `courses.sort()` or `courses.push()` directly on a prop array — mutating props breaks React rendering!',
      preview: <SortedCourseList courses={unsortedCourses} />,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16">
      {/* Sticky Top Header & Quick-Jump Bar */}
      <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                React 19 Components &amp; Props — Practice 5 Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Data-driven 15-step curriculum • Core Lesson (#1–#8) + Advanced Composition &amp; Purity (#9–#15)
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                Core: #1–#8
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-800">
                Advanced: #9–#15
              </span>
              <a
                href="#lab-challenge"
                className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 hover:bg-amber-200 transition-colors"
              >
                Student Lab &amp; Practice 6 Bridge
              </a>
            </div>
          </div>

          <nav aria-label="Jump to example" className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-100">
            {examples.map((ex) => (
              <a
                key={ex.number}
                href={`#ex-${ex.number}`}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                  ex.tier === 'Core'
                    ? 'bg-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white'
                    : 'bg-purple-50 text-purple-900 hover:bg-purple-600 hover:text-white'
                }`}
              >
                #{ex.number} {ex.shortLabel}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Data-Driven Curriculum List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-6">
        {examples.map((item) => (
          <ExampleInspectorCard key={item.number} item={item} />
        ))}

        {/* Hands-On Student Lab Challenge + Bridge to Practice 6 */}
        <section
          id="lab-challenge"
          className="bg-slate-900 text-slate-100 rounded-2xl p-6 sm:p-8 shadow-md space-y-6 scroll-mt-28"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Your Turn — Hands-On Classroom Exercise
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                Student Lab Task &amp; Bridge to Practice 6 (Hooks)
              </h2>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
              DevTools + Coding Challenge
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Task A: DevTools + Coding Challenge */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-3">
              <h3 className="text-base font-bold text-amber-300">
                Part A: Build &amp; Inspect Your Own Component
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-300 leading-relaxed">
                <li>
                  Open Chrome DevTools (<code className="text-sky-300">F12</code>) &rarr;{' '}
                  <strong className="text-white">Components</strong> tab (React Developer Tools) and click any{' '}
                  <code className="text-sky-300">ProductCard</code> or <code className="text-sky-300">ProfileCard</code> to inspect its live <code className="text-sky-300">props</code>.
                </li>
                <li>
                  Upgrade <code className="text-sky-300">ProductCard14.jsx</code> to accept an optional{' '}
                  <code className="text-sky-300">discountPercent = 0</code> property inside <code className="text-sky-300">product</code> and display a green <code className="text-sky-300">SALE</code> badge + discounted price when <code className="text-sky-300">discountPercent &gt; 0</code>.
                </li>
                <li>
                  Create <code className="text-sky-300">CourseBadge16.jsx</code> accepting{' '}
                  <code className="text-sky-300">{`{ title, lecturer, isMandatory = false }`}</code> and compose 3 instances inside a <code className="text-sky-300">CardWrapper</code>.
                </li>
              </ol>
            </div>

            {/* Part B: Bridge Table (Props vs State) */}
            <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 space-y-3">
              <h3 className="text-base font-bold text-emerald-300">
                Part B: Why Didn&apos;t Forms or Toggle Buttons Update Yet? (Props vs. State)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400 uppercase">
                      <th className="py-2 pr-3">Feature</th>
                      <th className="py-2 pr-3 text-sky-300">Props (Practice 5 — Today)</th>
                      <th className="py-2 text-emerald-300">State / useState (Practice 6)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    <tr>
                      <td className="py-2 pr-3 font-semibold text-white">Who owns it?</td>
                      <td className="py-2 pr-3">Passed down by Parent</td>
                      <td className="py-2">Owned internally by Component</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-semibold text-white">Can child modify it?</td>
                      <td className="py-2 pr-3">No (Read-Only / Immutable)</td>
                      <td className="py-2">Yes, via setter (`setCount`)</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-semibold text-white">Triggers re-render?</td>
                      <td className="py-2 pr-3">When Parent passes new props</td>
                      <td className="py-2">Immediately when state updates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
