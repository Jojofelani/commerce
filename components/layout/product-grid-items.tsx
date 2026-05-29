import Price from "components/price";
import { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

export default function ProductGridItems({
  products,
}: {
  products: Product[];
}) {
  return (
    <>
      {products.map((product) => (
        <li key={product.handle} className="list-none">
          <Link
            href={`/product/${product.handle}`}
            prefetch={true}
            className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-all duration-300 hover:border-cyan/30 hover:shadow-lg flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-square bg-neutral-50">
              <Image
                alt={product.title}
                src={product.featuredImage?.url ?? ""}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="border-t border-neutral-100 px-4 py-3">
              <h3 className="truncate text-sm font-medium text-ink">
                {product.title}
              </h3>
              <Price
                className="mt-1 text-sm font-semibold text-navy"
                amount={product.priceRange.maxVariantPrice.amount}
                currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              />
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
