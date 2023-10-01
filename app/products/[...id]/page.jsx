import Product from "@/app/components/Product";

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  console.log(product);
  return (
    <Product title={product.title} price={product.price} noButton/>
  )
}

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://dummyjson.com/products?limit=5&select=title,price"
  );
  const data = await res.json();

  return data.products.map((product) => ({
    id: [product.id.toString()],
  }));
}
