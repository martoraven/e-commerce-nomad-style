import React from "react";
import { Link } from "react-router-dom";

export default function Shipping() {
  return (
    <>
      {" "}
      <div className="w-100">
        <div className="text-btn-uppercase mb_12">We've got your back</div>
        <p className="mb_12">
          Orders are processed within 1–2 business days and shipped with
          tracking from our US warehouse.
        </p>
        <p className="">
          Free returns within 30 days of delivery — items must be in their
          original condition and packaging.
        </p>
      </div>
      <div className="w-100">
        <div className="text-btn-uppercase mb_12">Where we ship</div>
        <p>
          We currently ship to the United States and Canada. All duties and
          taxes are included in your order — the price you see at checkout is
          the price you pay. International shipping to other regions is coming
          soon.
        </p>
      </div>
      <div className="w-100">
        <div className="text-btn-uppercase mb_12">Estimated delivery</div>
        <p className="mb_6 font-2">Standard: 3–7 business days</p>
        <p className="mb_6 font-2">Express: 1–3 business days</p>
        <p className="font-2">Sending from USA</p>
      </div>
      <div className="w-100">
        <div className="text-btn-uppercase mb_12">Need more information?</div>
        <div>
          <Link
            to={`/FAQs`}
            className="link text-secondary text-decoration-underline mb_6 font-2"
          >
            Orders &amp; delivery FAQs
          </Link>
        </div>
        <div>
          <Link
            to={`/contact`}
            className="link text-secondary text-decoration-underline font-2"
          >
            Contact our team
          </Link>
        </div>
      </div>
    </>
  );
}
