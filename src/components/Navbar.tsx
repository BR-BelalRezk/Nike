import { navLinks } from "../app/constants";

export default function Navbar() {
  return (
    <header className="padding-x pt-8 py-8 fixed z-50 w-full bg-white bg-opacity-70 backdrop-blur-sm">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src="/assets/images/header-logo.svg"
            alt="header logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className=" font-montserrat leading-normal text-sm text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src="/assets/icons/hamburger.svg"
            alt="hamburger menu icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
}
