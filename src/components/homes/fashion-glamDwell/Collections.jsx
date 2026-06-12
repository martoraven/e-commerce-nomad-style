import { stonepathCategories } from "@/data/stonepath-products";
import React from "react";

import { Link } from "react-router-dom";
export default function Collections() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Shop by categories</h3>
        </div>
        <div className="tf-grid-layout tf-col-2 xl-col-5">
          {stonepathCategories.map((category) => (
            <div
              key={category.id}
              className="collection-position-2 hover-img"
            >
              <Link to={`/shop?category=${category.slug}`} className="img-style">
                <img
                  className="lazyload"
                  data-src={category.imgSrc}
                  alt={category.alt}
                  src={category.imgSrc}
                  width={category.width}
                  height={category.height}
                />
              </Link>
              <div className="content">
                <Link to={`/shop?category=${category.slug}`} className="cls-btn">
                  <h6 className="text">{category.title}</h6>
                  <i className="icon icon-arrowUpRight" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
