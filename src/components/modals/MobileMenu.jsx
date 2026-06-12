import React from "react";
import { Link } from "react-router-dom";

import CurrencySelect from "../common/CurrencySelect";
import LanguageSelect from "../common/LanguageSelect";
import { stonepathCategories } from "@/data/stonepath-products";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/FAQs", label: "FAQs" },
];

export default function MobileMenu() {
  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <div className="mb-content-top">
            <ul className="nav-ul-mb" id="wrapper-menu-navigation">
              {pageLinks.map((link) => (
                <li className="nav-mb-item" key={link.href}>
                  <Link to={link.href} className="mb-menu-link">
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              {stonepathCategories.map((category) => (
                <li className="nav-mb-item" key={category.slug}>
                  <Link
                    to={`/shop?category=${category.slug}`}
                    className="mb-menu-link"
                  >
                    <span>{category.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-other-content">
            <div className="mb-notice">
              <Link to={`/contact`} className="text-need">
                Need help?
              </Link>
            </div>
            <ul className="mb-info">
              <li>
                Email: <b>info@stonepathstore.com</b>
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-bottom">
          <div className="bottom-bar-language">
            <div className="tf-currencies">
              <CurrencySelect />
            </div>
            <div className="tf-languages">
              <LanguageSelect parentClassName="image-select center style-default type-languages" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
