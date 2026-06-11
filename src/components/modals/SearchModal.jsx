import React, { useMemo, useState } from "react";

import { Link } from "react-router-dom";
import {
  stonepathProducts,
  stonepathCategories,
} from "@/data/stonepath-products";
import ProductCard1 from "../productCards/ProductCard1";

export default function SearchModal() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return stonepathProducts;
    return stonepathProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
  }, [query]);

  return (
    <div className="modal fade modal-search" id="search">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Search</h5>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <form className="form-search" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="text">
              <input
                type="text"
                placeholder="Search products..."
                className=""
                name="text"
                tabIndex={0}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-required="true"
                required
              />
            </fieldset>
            <button className="" type="submit">
              <svg
                className="icon"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#181818"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.35 21.0004L17 16.6504"
                  stroke="#181818"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
          <div>
            <h5 className="mb_16">Browse categories</h5>
            <ul className="list-tags">
              {stonepathCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/shop?category=${category.slug}`}
                    className="radius-60 link"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="mb_16">
              {query.trim()
                ? `Results (${results.length})`
                : "Discover our products"}
            </h6>
            {results.length > 0 ? (
              <div className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4">
                {results.map((product, i) => (
                  <ProductCard1 product={product} key={i} />
                ))}
              </div>
            ) : (
              <p className="text-secondary">
                No products found for "{query.trim()}".
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
