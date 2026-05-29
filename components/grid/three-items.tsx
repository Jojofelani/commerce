import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Price from "components/price";
import { getCollectionProducts } from "lib/shopify";
import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

function ThreeItemGridItem({
  item,
  priority,
}: {
  item: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/product/${item.handle}`}
      prefetch={true}
      className="group overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-all duration-300 hover:border-cyan/30 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-square bg-neutral-50">
        <Image
          src={item.featuredImage?.url ?? ""}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          alt={item.title}
          className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="border-t border-neutral-100 px-4 py-3">
        <h3 className="truncate text-sm font-medium text-ink">{item.title}</h3>
        <Price
          className="mt-1 text-sm font-semibold text-navy"
          amount={item.priceRange.maxVariantPrice.amount}
          currencyCode={item.priceRange.maxVariantPrice.currencyCode}
        />
      </div>
    </Link>
  );
}

export async function ThreeItemGrid() {
  const homepageItems = await getCollectionProducts({
    collection: "hidden-homepage-featured-items",
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto max-w-(--breakpoint-2xl) px-4 pb-4 pt-16">
      <div className="animate-fade-up mb-8 flex items-end justify-between">
        <div>
          <span className="mb-3 inline-block h-px w-8 bg-cyan align-middle" />
          <h2 className="font-heading text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Featured Products
          </h2>
        </div>
        <Link
          href="/search"
          prefetch={true}
          className="flex items-center gap-1.5 text-sm font-medium text-navy/60 transition-colors hover:text-navy"
        >
          View all <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ThreeItemGridItem item={firstProduct} priority={true} />
        <ThreeItemGridItem item={secondProduct} priority={true} />
        <ThreeItemGridItem item={thirdProduct} />
      </div>
    </section>
  );
}
