import Link from "next/link";
import React from "react";

export default function Product({ product }) {
  return (
    <div>
      <h2 className="text-lg">
        {product.id} - {product.title}
      </h2>
      <p className="text-sm">Price: {product.price}</p>
      <p className="text-sm">{product.description}</p>
      <Link href="/products">
        <a className="text-sm mt-2 text-blue-500">Back to products</a>
      </Link>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}
