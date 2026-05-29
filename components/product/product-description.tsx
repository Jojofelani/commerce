import { AddToCart } from "components/cart/add-to-cart";
import Price from "components/price";
import Prose from "components/prose";
import { Product } from "lib/shopify/types";
import { VariantSelector } from "./variant-selector";

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="flex h-full flex-col">
      {/* Title + price */}
      <div className="mb-6">
        <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          {product.title}
        </h1>

        <div className="mt-4 flex items-center gap-3">
          <div className="rounded-full bg-navy px-4 py-2 text-base font-semibold text-white">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
          {product.availableForSale ? (
            <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              In stock
            </span>
          ) : (
            <span className="text-xs font-medium text-neutral-400">
              Out of stock
            </span>
          )}
        </div>
      </div>

      <div className="mb-6 h-px bg-neutral-100" />

      {/* Variants */}
      <VariantSelector options={product.options} variants={product.variants} />

      {/* Description */}
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-relaxed text-ink/70"
          html={product.descriptionHtml}
        />
      ) : null}

      {/* Spacer pushes button to bottom on desktop */}
      <div className="flex-1" />

      {/* Add to cart */}
      <div className="mt-4">
        <AddToCart product={product} />
      </div>

      {/* Trust micro-copy */}
      <p className="mt-4 text-center text-xs text-ink/35">
        ✦ Enamel-safe formula &nbsp;·&nbsp; Fast Ghana delivery
      </p>
    </div>
  );
}
