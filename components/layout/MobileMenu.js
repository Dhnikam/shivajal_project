import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <ul className="navigation">
      <li
        className={
          activeKey === 1
            ? "menu-item-has-children active"
            : "menu-item-has-children"
        }
      >
        <Link href="#">Home</Link>
        <ul
          className="sub-menu"
          style={{ display: activeKey === 1 ? "block" : "none" }}
        >
          <li>
            <Link href="/">Home One</Link>
          </li>
        </ul>
        <div
          className={activeKey === 1 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(1)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>

      <li
        className={
          activeKey === 2
            ? "menu-item-has-children active"
            : "menu-item-has-children"
        }
      >
        <Link href="#">About</Link>
        <ul
          className="sub-menu"
          style={{ display: activeKey === 2 ? "block" : "none" }}
        >
          <li>
            <Link href="/overview">Overview</Link>
          </li>
          <li>
            <Link href="/mission">Mission</Link>
          </li>
          <li>
            <Link href="/team">Our Team</Link>
          </li>
          <li>
            <Link href="/team-details">Team Profile</Link>
          </li>
        </ul>
        <div
          className={activeKey === 2 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(2)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>

      <li
        className={
          activeKey === 3
            ? "menu-item-has-children active"
            : "menu-item-has-children"
        }
      >
        <Link href="/project">Projects</Link>
        <ul
          className="sub-menu"
          style={{ display: activeKey === 3 ? "block" : "none" }}
        ></ul>
        <div
          className={activeKey === 3 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(3)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>

      <li
        className={
          activeKey === 4
            ? "menu-item-has-children active"
            : "menu-item-has-children"
        }
      >
        <Link href="/blog">Blog</Link>
        <div
          className={activeKey === 4 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(4)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>

      <li
        className={
          activeKey === 5
            ? "menu-item-has-children active"
            : "menu-item-has-children"
        }
      >
        <Link href="#">Pages</Link>
        <ul
          className="sub-menu"
          style={{ display: activeKey === 5 ? "block" : "none" }}
        >
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/testimonial">Testimonials</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/404">404 Error</Link>
          </li>
        </ul>
        <div
          className={activeKey === 5 ? "dropdown-btn open" : "dropdown-btn"}
          onClick={() => handleToggle(5)}
        >
          <span className="fas fa-angle-down" />
        </div>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
