import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import cv from "../assets/sherin_cv.pdf";

const sections = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const navLinkClass = (id) =>
    `px-4 py-2 rounded-full transition duration-300
     ${
       active === id
         ? "text-white shadow-[0_0_0_2px_rgba(255,255,255,0.8),0_0_14px_6px_rgba(255,255,255,0.6)]"
         : "text-gray-300 hover:text-white hover:shadow-[0_0_0_2px_rgba(255,255,255,0.4),0_0_10px_4px_rgba(255,255,255,0.4)]"
     }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50
        bg-black/70 backdrop-blur
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-3xl font-extrabold gradient-text">
          Sherin Shibu
        </h2>
        <div className="hidden md:flex gap-6 items-center">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={navLinkClass(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>

        <a href={cv} download className="hidden md:block">
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow-[0_0_20px_6px_rgba(255,255,255,0.5)] hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.8)] transition">
            Download CV
          </button>
        </a>
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          <TiThMenu />
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={navLinkClass(item)}
              onClick={() => setOpen(false)}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
