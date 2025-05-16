import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/analysis', label: 'Analysis' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/feedback', label: 'Feedback' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">EduProtect</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-indigo-600 ${
                  pathname === item.path ? 'text-indigo-600 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
