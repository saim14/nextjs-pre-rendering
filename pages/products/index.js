import React from "react";
import Link from "next/link";

export default function productList({ products }) {
  return (
    <div>
      <h1 className="text-2xl mb-4">Products</h1>
      <hr />
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <p className="cursor-pointer">
              [{product.id}] {product.title} - Price: {product.price}
            </p>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
}
