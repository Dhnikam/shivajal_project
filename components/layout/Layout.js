import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header1 from "./Header1";
import PageHead from "./PageHead";

export default function Layout({
  headTitle,
  breadcrumbTitle,
  children,
  noFooter,
}) {
  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
  }, []);

  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  // Scroll Header
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <>
      <PageHead headTitle={headTitle} />

      <main>
        {" "}
        <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} />
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
        {children}
        {!noFooter && <Footer />}
      </main>
      <BackToTop />
    </>
  );
}
