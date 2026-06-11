import React from "react";

export default function ReturnPolicies() {
  return (
    <>
      {" "}
      <div className="text-btn-uppercase mb_12">Return Policies</div>
      <p className="mb_12 text-secondary">
        At STONEPATH, we stand behind the quality of our products. If you're
        not completely satisfied with your purchase, we offer hassle-free
        returns within 30 days of delivery.
      </p>
      <div className="text-btn-uppercase mb_12">Easy Exchanges or Refunds</div>
      <ul className="list-text type-disc mb_12 gap-6">
        <li className="text-secondary font-2">
          Exchange your item for a different color or product, or receive a
          full refund to your original payment method.
        </li>
        <li className="text-secondary font-2">
          All returned items must be unused, in their original condition and
          packaging. Leather goods showing wear beyond normal inspection
          cannot be accepted.
        </li>
        <li className="text-secondary font-2">
          Manufacturing defects are covered separately by our 2-year limited
          warranty — no return window applies.
        </li>
      </ul>
      <div className="text-btn-uppercase mb_12">Simple Process</div>
      <ul className="list-text type-number">
        <li className="text-secondary font-2">
          Email info@stonepathstore.com with your order number and the item
          you want to return.
        </li>
        <li className="text-secondary font-2">
          We'll send you a prepaid return label and instructions.
        </li>
        <li className="text-secondary font-2">
          Pack your item securely and drop it off at any carrier location.
        </li>
        <li className="text-secondary font-2">
          Refunds are processed within 5–10 business days after we receive
          and inspect the item.
        </li>
      </ul>
      <p className="text-secondary font-2">
        For any questions or concerns regarding returns, don't hesitate to
        reach out at info@stonepathstore.com. Your satisfaction is our
        priority.
      </p>
    </>
  );
}
