import { stonepathTestimonials } from "@/data/stonepath-products";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Customer Review</h3>
        </div>
        <Swiper
          dir="ltr"
          className="tf-sw-testimonial wow fadeInUp"
          data-wow-delay="0.1s"
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".spd81",
          }}
        >
          {stonepathTestimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item style-4">
                <div className="content-top">
                  <div className="box-icon">
                    <i className="icon icon-quote" />
                  </div>
                  <div className="text-title">{item.title}</div>
                  <p className="text-secondary">{item.quote}</p>
                  <div className="box-rate-author">
                    <div className="box-author">
                      <div className="text-title author">{item.author}</div>
                    </div>
                    <div className="list-star-default color-primary">
                      {Array(5)
                        .fill(0)
                        .map((_, starIndex) => (
                          <i key={starIndex} className="icon icon-star" />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center spd81" />
        </Swiper>
      </div>
    </section>
  );
}
