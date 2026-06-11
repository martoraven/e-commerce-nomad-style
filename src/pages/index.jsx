import Products3 from "@/components/common/Products3";
import Testimonials from "@/components/common/Testimonials";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar4 from "@/components/headers/Topbar4";
import Collections from "@/components/homes/fashion-glamDwell/Collections";
import Hero from "@/components/homes/fashion-glamDwell/Hero";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Home || STONEPATH",
  description: "STONEPATH",
};

export default function HomeFashionGlamdwellPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar4 />
      <Header1 />
      <Hero />
      <Collections />
      <Products3 parentClass="flat-spacing pt-0" />
      <Testimonials parentClass="" />
      <div className="line-bottom-container"></div>
      <Footer1 />
    </>
  );
}
