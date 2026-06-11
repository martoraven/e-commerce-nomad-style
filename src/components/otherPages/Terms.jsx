import { useEffect, useState } from "react";

const sectionIds = [
  "terms",
  "limitations",
  "revisions-and-errata",
  "site-terms",
  "risks",
];
const sections = [
  { id: 1, text: "Terms", scroll: "terms" },
  { id: 2, text: "Limitations", scroll: "limitations" },
  {
    id: 3,
    text: "Revisions and errata",
    scroll: "revisions-and-errata",
  },
  {
    id: 4,
    text: "Site terms of use modifications",
    scroll: "site-terms",
  },
  { id: 5, text: "Risks", scroll: "risks" },
];

const content = [
  {
    scroll: "terms",
    title: "1. Terms",
    paragraphs: [
      "By accessing this website, operated by STONEPATH (“the Store”, “we”, “us”), you agree to be bound by these terms of use, all applicable laws and regulations, and accept that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
      "All products sold through this site — including leather goods, kitchen tools, and electronics — are intended for personal, non-commercial use. Placing an order constitutes an offer to purchase, which we may accept or decline at our sole discretion, for example in cases of pricing errors or stock unavailability.",
      "The materials contained in this website, including product photography, descriptions and branding, are the property of STONEPATH and are protected by applicable copyright and trademark law. They may not be reproduced without prior written consent.",
    ],
  },
  {
    scroll: "limitations",
    title: "2. Limitations",
    paragraphs: [
      "In no event shall STONEPATH or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials or products offered on this website, even if STONEPATH has been notified of the possibility of such damage.",
      "Our liability for any product purchased through the site is limited to the purchase price of that product. The warranty included with each product — 2 years for manufacturing defects, 1 year for batteries in electronic products — does not cover damage caused by misuse, unauthorized modification, or normal wear such as the natural patina that develops on full-grain leather.",
      "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
    ],
  },
  {
    scroll: "revisions-and-errata",
    title: "3. Revisions and errata",
    paragraphs: [
      "The materials appearing on this website could include technical, typographical, or photographic errors. STONEPATH does not warrant that any of the materials on its website are accurate, complete, or current.",
      "Product colors may vary slightly from what you see on screen depending on your display. Natural materials such as full-grain leather also vary from piece to piece — grain, tone and texture differences are inherent to the material and not considered defects.",
      "We may make changes to the materials contained on this website at any time without notice, including prices, specifications and availability. We do not, however, make any commitment to update the materials.",
    ],
  },
  {
    scroll: "site-terms",
    title: "4. Site terms of use modifications",
    paragraphs: [
      "STONEPATH may revise these terms of use for its website at any time without notice. By using this website you are agreeing to be bound by the then-current version of these terms of use.",
      "We will indicate the date of the latest revision at the bottom of this page when changes are made. Continued use of the site after changes are published constitutes acceptance of the revised terms. If a change materially affects orders already placed, the terms in force at the time of purchase will apply to those orders.",
    ],
  },
  {
    scroll: "risks",
    title: "5. Risks",
    paragraphs: [
      "The use of this website and the purchase of products through it is at your own risk. The site and its contents are provided on an “as is” and “as available” basis, without warranties of any kind beyond those expressly stated in each product's warranty terms.",
      "Some products require care in use: kitchen knives are sharp tools and must be kept away from children; the Party Speaker XL can produce sound levels that may damage hearing at close range and full volume; tracking devices depend on third-party networks (Apple Find My) whose availability we do not control.",
      "You are responsible for keeping your account credentials confidential and for all activity that occurs under your account. Report any unauthorized use to info@stonepathstore.com immediately.",
    ],
  },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (id) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="terms-of-use-wrap">
          <div className="left sticky-top">
            {sections.map(({ id, text, scroll }) => (
              <h6
                key={id}
                onClick={() => handleClick(scroll)}
                className={`btn-scroll-target ${
                  activeSection == scroll ? "active" : ""
                }`}
              >
                {id}. {text}
              </h6>
            ))}
          </div>
          <div className="right">
            <h4 className="heading">Terms of use</h4>
            {content.map((section) => (
              <div
                className="terms-of-use-item item-scroll-target"
                id={section.scroll}
                key={section.scroll}
              >
                <h5 className="terms-of-use-title">{section.title}</h5>
                <div className="terms-of-use-content">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
