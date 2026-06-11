import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar4 from "@/components/headers/Topbar4";
import StonepathShopGrid from "@/components/products/StonepathShopGrid";
import { stonepathProducts } from "@/data/stonepath-products";

const CATEGORY_NAMES = {
  wallets: "Wallets",
  eyewear: "Eyewear",
  kitchen: "Kitchen",
  gadgets: "Gadgets",
};

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const categorySlug = searchParams.get("category") || "";
  const categoryName = CATEGORY_NAMES[categorySlug] || "";

  const products = useMemo(() => {
    if (!categoryName) return stonepathProducts;
    return stonepathProducts.filter((p) => p.category === categoryName);
  }, [categoryName]);

  const pageTitle = categoryName || "All Products";

  return (
    <>
      <MetaComponent
        meta={{
          title: `${pageTitle} — STONEPATH COMMERCE`,
          description: "Handcrafted leather accessories for everyday carry.",
        }}
      />
      <Topbar4 />
      <Header1 />
      <div
        className="page-title"
        style={{ backgroundImage: "url(/images/section/page-title.jpg)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">{pageTitle}</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                {categoryName ? (
                  <>
                    <li>
                      <Link className="link" to="/shop">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <i className="icon-arrRight" />
                    </li>
                    <li>{categoryName}</li>
                  </>
                ) : (
                  <li>Shop</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <StonepathShopGrid products={products} activeCategory={categorySlug} />
      <Footer1 />
    </>
  );
}
