import Link from "next/link";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import type { ShopProduct } from "@/lib/shopData";

type Props = {
  product: ShopProduct;
};

function ProductImageLink({
  product,
  label,
}: {
  product: ShopProduct;
  label: string;
}) {
  const className =
    "relative block h-[204px] w-full overflow-hidden rounded-[4px]";
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(product.image)}
      alt={product.imageAlt}
      className="absolute inset-0 size-full object-cover"
      loading="lazy"
    />
  );

  if (/^https?:/.test(product.href)) {
    return (
      <a
        href={product.href}
        className={className}
        aria-label={`${product.name} — ${label}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {img}
      </a>
    );
  }

  return (
    <Link
      href={product.href}
      className={className}
      aria-label={`${product.name} — ${label}`}
    >
      {img}
    </Link>
  );
}

/** Tan product card from Figma DK-Shop / MB-Shop (`Card1`). */
export default function ShopProductCard({ product }: Props) {
  const label = product.cta === "buy" ? "Buy Now" : "Available in Store";

  return (
    <article className="flex h-full flex-col gap-[30px] rounded-[12px] border border-black/10 bg-brand-tan px-5 py-5 lg:px-[30px]">
      <ProductImageLink product={product} label={label} />
      <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
        <h3 className="w-full text-center text-2xl font-semibold uppercase leading-none text-brand-black lg:text-left">
          {product.name}
        </h3>
        <div className="flex w-full justify-center lg:justify-start">
          <Cta href={product.href} variant="red">
            {label}
          </Cta>
        </div>
      </div>
    </article>
  );
}
