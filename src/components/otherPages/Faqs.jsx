import React from "react";

const faqGroups = [
  {
    title: "Orders & Shipping",
    id: "accordion-faq-1",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Orders are processed within 1–2 business days. Standard shipping takes 3–7 business days within the United States, and express options are available at checkout. You will receive a confirmation email with tracking information as soon as your order ships.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, we send you an email with a tracking number and a link to follow your package in real time. If you have not received it within 48 hours of your order confirmation, check your spam folder or contact us at info@stonepathstore.com.",
      },
      {
        question: "Can I cancel or change my order?",
        answer:
          "We can cancel or modify your order as long as it has not been shipped. Write to info@stonepathstore.com as soon as possible with your order number. Once the package leaves our warehouse, you can still return it under our standard return policy.",
      },
      {
        question: "Which countries do you ship to?",
        answer:
          "We currently ship to the United States and Canada. International shipping to other regions is coming soon — subscribe to our newsletter to be the first to know.",
      },
      {
        question: "How can I pay for my purchase?",
        answer:
          "We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay and Google Pay. All payments are processed through encrypted, PCI-compliant providers.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    id: "accordion-faq-2",
    items: [
      {
        question: "What is your return policy?",
        answer:
          "You have 30 days from delivery to return any item in its original condition and packaging for a full refund. Leather goods that show wear beyond normal inspection cannot be accepted, so we recommend trying products indoors first.",
      },
      {
        question: "How do I start a return or exchange?",
        answer:
          "Email info@stonepathstore.com with your order number and the item you want to return or exchange. We will send you a prepaid return label and instructions. Exchanges ship as soon as we receive the original item.",
      },
      {
        question: "The item arrived damaged or defective. What should I do?",
        answer:
          "We are sorry about that. Send us a photo of the item and your order number at info@stonepathstore.com within 7 days of delivery and we will ship a replacement at no cost, or issue a full refund — whichever you prefer.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are issued to your original payment method within 5–10 business days after we receive and inspect the returned item. We will email you a confirmation as soon as it is processed.",
      },
    ],
  },
  {
    title: "Products & Care",
    id: "accordion-faq-3",
    items: [
      {
        question: "How do I care for full-grain leather?",
        answer:
          "Keep leather away from prolonged direct sunlight and moisture. Wipe with a soft dry cloth and apply a neutral leather conditioner every few months. Full-grain leather is meant to develop a patina — scratches and color changes are part of its character, not defects.",
      },
      {
        question: "Will the leather change over time?",
        answer:
          "Yes, and that is the point. Full-grain leather darkens and softens with use, developing a unique patina that reflects how you carry it. No two STONEPATH pieces look the same after a year of use.",
      },
      {
        question: "Is the Card Tracker compatible with my phone?",
        answer:
          "The STONEPATH Card Tracker works with Apple Find My, so it requires an iPhone, iPad or Mac with Find My enabled. Android compatibility is not supported at this time.",
      },
      {
        question: "Do products come with a warranty?",
        answer:
          "All STONEPATH products include a 2-year limited warranty covering manufacturing defects in materials and workmanship. Electronics such as the Party Speaker XL, the Charging Station and the Card Tracker also include a 1-year battery warranty.",
      },
      {
        question: "Where can I find product manuals?",
        answer:
          "Each product ships with a printed quick-start guide. If you lost yours, write to info@stonepathstore.com with your product name and we will send you a digital copy.",
      },
    ],
  },
];

export default function Faqs() {
  let itemIndex = 0;
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="page-faqs-wrap">
          <div className="list-faqs">
            {faqGroups.map((group) => (
              <div key={group.id}>
                <h5 className="faqs-title">{group.title}</h5>
                <ul
                  className="accordion-product-wrap style-faqs"
                  id={group.id}
                >
                  {group.items.map((item) => {
                    itemIndex += 1;
                    const collapseId = `accordion-${itemIndex}`;
                    return (
                      <li className="accordion-product-item" key={collapseId}>
                        <a
                          href={`#${collapseId}`}
                          className="accordion-title collapsed current"
                          data-bs-toggle="collapse"
                          aria-expanded="false"
                          aria-controls={collapseId}
                        >
                          <h6>{item.question}</h6>
                          <span className="btn-open-sub" />
                        </a>
                        <div
                          id={collapseId}
                          className="collapse"
                          data-bs-parent={`#${group.id}`}
                        >
                          <div className="accordion-faqs-content">
                            <p className="text-secondary">{item.answer}</p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="ask-question sticky-top">
            <div className="ask-question-wrap">
              <h5 className="mb_4">Ask Your Question</h5>
              <p className="mb_20 text-secondary">
                Ask Anything, We're Here to Help
              </p>
              <form
                className="form-leave-comment"
                onSubmit={(e) => e.preventDefault()}
              >
                <fieldset className="mb_20">
                  <div className="text-caption-1 mb_8">Name</div>
                  <input
                    className=""
                    type="text"
                    placeholder="Your Name*"
                    name="text"
                    tabIndex={2}
                    defaultValue=""
                    aria-required="true"
                    required
                  />
                </fieldset>
                <fieldset className="mb_20">
                  <div className="text-caption-1 mb_8">
                    How can we help you?
                  </div>
                  <div className="tf-select">
                    <select className="">
                      <option>Orders &amp; Shipping</option>
                      <option>Returns &amp; Exchanges</option>
                      <option>Products &amp; Care</option>
                      <option>Other</option>
                    </select>
                  </div>
                </fieldset>
                <fieldset className="mb_20">
                  <div className="text-caption-1 mb_8">Message</div>
                  <textarea
                    className=""
                    rows={4}
                    placeholder="Your Message*"
                    tabIndex={2}
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <div className="button-submit">
                  <button className="btn-style-2 w-100" type="submit">
                    <span className="text text-button">Send Request</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
