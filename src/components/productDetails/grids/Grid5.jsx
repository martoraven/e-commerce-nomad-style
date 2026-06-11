import { useEffect, useRef } from "react";

export default function Grid5({
  activeColor = "gray",
  setActiveColor = () => {},
  items = [],
}) {
  const finalItems = items;

  const observerRef = useRef(null);

  const scrollToTarget = () => {
    // Find the element with the specific data-value attribute
    const scrollContainerElemt = document.querySelector(".wrap-quick-view");
    const heightScroll = scrollContainerElemt.scrollTop;
    const targetElement = scrollContainerElemt.querySelector(
      `[data-scroll='${activeColor}']`
    );

    // Check if the element exists
    if (targetElement) {
      // Get the element's bounding rectangle
      setTimeout(() => {
        if (scrollContainerElemt?.scrollTop == heightScroll) {
          targetElement?.scrollIntoView({
            behavior: "smooth", // Smooth scrolling animation
            block: "center", // Center the element in the viewport
          });
        }
      }, 200);

      // Scroll only if the element is not already in view
    }
  };

  useEffect(() => {
    scrollToTarget();
  }, [activeColor]);

  useEffect(() => {
    const options = {
      rootMargin: "-50% 0px",
    };

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const scrollValue = entry.target.getAttribute("data-scroll");
          setActiveColor(scrollValue);
        }
      });
    }, options);

    // Observe all items
    const elements = document.querySelectorAll(".item-scroll-quickview");
    elements.forEach((el) => observer.observe(el));
    observerRef.current = observer;

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [items]);
  return (
    <div className="tf-quick-view-image">
      <div className="wrap-quick-view wrapper-scroll-quickview">
        {finalItems.map((link, index) => (
          <a
            className="quickView-item item-scroll-quickview"
            data-scroll={link.color}
            key={index}
          >
            <img
              className="lazyload"
              alt={link.alt || ""}
              src={link.src}
              width={link.width || 600}
              height={link.height || 800}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
