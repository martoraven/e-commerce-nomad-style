import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard1 from "../productCards/ProductCard1";
import LayoutHandler from "./LayoutHandler";
import Sorting from "./Sorting";
import { stonepathCategories } from "@/data/stonepath-products";

const COLORS = ["Natural", "Black", "Dark Brown", "Midnight"];

export default function StonepathShopGrid({ products, activeCategory }) {
  const [activeLayout, setActiveLayout] = useState(4);
  const [sortingOption, setSortingOption] = useState("Sort by (Default)");
  const [activeColor, setActiveColor] = useState("All");

  const filtered = useMemo(() => {
    if (activeColor === "All") return products;
    return products.filter((p) => p.filterColor.includes(activeColor));
  }, [products, activeColor]);

  const sorted = useMemo(() => {
    if (sortingOption === "Price Ascending")
      return [...filtered].sort((a, b) => a.price - b.price);
    if (sortingOption === "Price Descending")
      return [...filtered].sort((a, b) => b.price - a.price);
    if (sortingOption === "Title Ascending")
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    if (sortingOption === "Title Descending")
      return [...filtered].sort((a, b) => b.title.localeCompare(a.title));
    return filtered;
  }, [filtered, sortingOption]);

  const availableColors = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.filterColor.forEach((c) => set.add(c)));
    return COLORS.filter((c) => set.has(c));
  }, [products]);

  const allProps = {
    sortingOption,
    setSortingOption: (v) => setSortingOption(v),
    price: [0, 200],
    availability: "All",
    color: "All",
    size: "All",
    brands: [],
    activeFilterOnSale: false,
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        {/* Category tabs */}
        <div className="tf-shop-control mb-4">
          <div className="tf-control-filter d-flex align-items-center gap-2 flex-wrap">
            <Link
              to="/shop"
              className={`tf-btn btn-sm text-btn-uppercase ${!activeCategory ? "btn-fill" : "btn-line"}`}
            >
              All
            </Link>
            {stonepathCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${cat.slug}`}
                className={`tf-btn btn-sm text-btn-uppercase ${activeCategory === cat.slug ? "btn-fill" : "btn-line"}`}
              >
                {cat.title}
              </Link>
            ))}
          </div>

          <ul className="tf-control-layout">
            <LayoutHandler
              setActiveLayout={setActiveLayout}
              activeLayout={activeLayout}
            />
          </ul>

          <div className="tf-control-sorting d-flex align-items-center gap-2">
            <p className="d-none d-lg-block text-caption-1">Sort by:</p>
            <Sorting allProps={allProps} />
          </div>
        </div>

        {/* Color filter */}
        {availableColors.length > 0 && (
          <div className="d-flex align-items-center gap-2 mb-4 flex-wrap">
            <span className="text-caption-1 text-secondary">Color:</span>
            <span
              onClick={() => setActiveColor("All")}
              className={`tf-btn btn-sm text-btn-uppercase ${activeColor === "All" ? "btn-fill" : "btn-line"}`}
              style={{ cursor: "pointer" }}
            >
              All
            </span>
            {availableColors.map((color) => (
              <span
                key={color}
                onClick={() => setActiveColor(color)}
                className={`tf-btn btn-sm text-btn-uppercase ${activeColor === color ? "btn-fill" : "btn-line"}`}
                style={{ cursor: "pointer" }}
              >
                {color}
              </span>
            ))}
          </div>
        )}

        {/* Product count */}
        <div className="meta-filter-shop mb-4">
          <div className="count-text">
            <span className="count">{sorted.length}</span> Products Found
          </div>
        </div>

        {/* Grid */}
        {sorted.length > 0 ? (
          <div
            className={
              activeLayout === 1
                ? "tf-list-layout wrapper-shop"
                : `tf-grid-layout wrapper-shop tf-col-${activeLayout}`
            }
          >
            {activeLayout === 1 ? (
              sorted.map((product, i) => (
                <ProductCard1 key={i} product={product} gridClass="list" />
              ))
            ) : (
              sorted.map((product, i) => (
                <ProductCard1 key={i} product={product} gridClass="grid" />
              ))
            )}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-secondary">No products found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
