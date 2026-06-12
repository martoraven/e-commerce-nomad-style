import React from "react";
import { Link } from "react-router-dom";
import { stonepathCategories } from "@/data/stonepath-products";

export default function Categories() {
  return (
    <div
      className="offcanvas offcanvas-start canvas-filter canvas-categories"
      id="shopCategories"
    >
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <span className="icon-left icon-filter" />
          <h5>Categories</h5>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="canvas-body">
          {stonepathCategories.map((category) => (
            <div className="wd-facet-categories" key={category.id}>
              <Link
                to={`/shop?category=${category.slug}`}
                className="facet-title"
              >
                <img
                  className="avt"
                  alt={category.alt}
                  src={category.imgSrc}
                  width={48}
                  height={48}
                />
                <span className="title">{category.title}</span>
                <span className="icon icon-arrowUpRight" />
              </Link>
            </div>
          ))}
          <div className="wd-facet-categories">
            <Link to={`/shop`} className="facet-title">
              <span style={{ width: 32, flexShrink: 0 }} />
              <span className="title">All Products</span>
              <span className="icon icon-arrowUpRight" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
