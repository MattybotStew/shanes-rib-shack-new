import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MenuItemDetailView from "@/components/MenuItemDetailView";
import PageShell from "@/components/PageShell";
import {
  allMenuItemParams,
  getMenuItem,
} from "@/lib/menuPageData";

type Props = { params: Promise<{ slug: string; item: string }> };

export function generateStaticParams() {
  return allMenuItemParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, item: itemSlug } = await params;
  const item = getMenuItem(slug, itemSlug);
  if (!item) return { title: "Menu | Shane's Rib Shack" };
  return {
    title: `${item.name} | Shane's Rib Shack Menu`,
    description: `${item.name} from Shane's Rib Shack — ${item.price}. Order online for pickup or delivery.`,
  };
}

export default async function MenuItemPage({ params }: Props) {
  const { slug, item: itemSlug } = await params;
  const item = getMenuItem(slug, itemSlug);
  if (!item) notFound();

  return (
    <PageShell>
      <MenuItemDetailView item={item} />
    </PageShell>
  );
}
