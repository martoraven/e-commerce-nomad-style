import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar";
import Breadcumb from "@/components/productDetails/Breadcumb";
import Descriptions1 from "@/components/productDetails/descriptions/Descriptions1";
import Details1 from "@/components/productDetails/details/Details1";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
import { allProducts } from "@/data/products";
import React from "react";
import { useParams } from "react-router-dom";

import MetaComponent from "@/components/common/MetaComponent";

export default function ProductDetailPage() {
  let params = useParams();
  const id = params.id;

  const product = allProducts.filter((p) => p.id == id)[0] || allProducts[0];
  const metadata = {
    title: `${product.title} — STONEPATH`,
    description: product.description || "STONEPATH product detail",
  };
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 bgColor="bg-main" />
      <Header1 />
      <Breadcumb product={product} />
      <Details1 product={product} />
      <Descriptions1 product={product} />
      <RelatedProducts product={product} />
      <Footer1 hasPaddingBottom />
    </>
  );
}
