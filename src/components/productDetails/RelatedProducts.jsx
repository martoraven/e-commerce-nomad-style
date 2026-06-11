import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { stonepathProducts } from "@/data/stonepath-products";
import ProductCard1 from "../productCards/ProductCard1";

export default function RelatedProducts({ product }) {
  // Same-category products first, then the rest of the catalog
  const related = useMemo(() => {
    const sameCategory = stonepathProducts.filter(
      (p) => p.id != product?.id && p.category === product?.category
    );
    const others = stonepathProducts.filter(
      (p) => p.id != product?.id && p.category !== product?.category
    );
    return [...sameCategory, ...others].slice(0, 8);
  }, [product]);

  return (
    <section className="flat-spacing">
      <div className="container flat-animate-tab">
        <ul
          className="tab-product justify-content-sm-center wow fadeInUp"
          data-wow-delay="0s"
          role="tablist"
        >
          <li className="nav-tab-item" role="presentation">
            <a href="#relatedProducts" className="active" data-bs-toggle="tab">
              Related Products
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane active show"
            id="relatedProducts"
            role="tabpanel"
          >
            <Swiper
              className="swiper tf-sw-latest"
              dir="ltr"
              spaceBetween={15}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 15 },

                768: { slidesPerView: 3, spaceBetween: 30 },
                1200: { slidesPerView: 4, spaceBetween: 30 },
              }}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                el: ".spd4",
              }}
            >
              {related.map((item, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <ProductCard1 product={item} />
                </SwiperSlide>
              ))}

              <div className="sw-pagination-latest spd4  sw-dots type-circle justify-content-center" />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
