"use client";
import AboutUs from "@/components/AboutUs";
import React from "react";

const page = () => {
  const data = [
    {
      title: "ABOUT US",
      paragraph1:
        "Canon India Pvt. Ltd. is the sales and marketing subsidiary of Canon Inc., a world leader in imaging technologies",
      paragraph2:
        "Canon India markets a comprehensive range of sophisticated contemporary digital imaging products and solutions in India.",
      paragraph3:
        "In sync with its corporate tagline- ‘Delighting You Always’, reinforced by World-class technology, Canon offers an extended product portfolio.",
    },
    {
      title: "SUSTAINABILITY",
      paragraph1:
        "Canon India takes pride to be socially inclined and focused towards its efficient and sustainable CSR projects.",
      paragraph2:
        "At Canon, the CSR endeavors are driven by its corporate philosophy of ‘Kyosei’, embodying the spirit of ‘living and working together for common good’. ",
      paragraph3:
        "Canon takes pride in not only bringing quality products to the market; but also, in contributing towards minimizing the environmental burden, through the effective application of green technologies.",
    },
    {
      title: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
    },
    {
      title: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
    },
    {
      title: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
    },
    {
      title: "",
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
    },
  ];
  return (
    <div className="z-10">
      <AboutUs data={data} />
    </div>
  );
};

export default page;
