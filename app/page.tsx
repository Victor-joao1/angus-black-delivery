"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { categories, products, storeInfo, Product } from "@/data/menu";
import ProductCard from "@/components/ProductCard";
import Cart, { CartItem } from "@/components/Cart";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);

  const visibleProducts = useMemo(
    () => products.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  }

  function increase(id: string) {
    setCart((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, qty: i.qty + 1 } : i))
    );
  }

  function decrease(id: string) {
    setCart((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, qty: i.qty - 1 } : i))
        .filter((i) => i.qty > 0)
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
      <header className="mb-10 flex flex-col items-center gap-3 text-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gold shadow-[0_0_25px_rgba(212,160,23,0.25)]">
          <Image src="/logo.png" alt={storeInfo.name} fill className="object-cover" />
        </div>
        <h1 className="font-display text-4xl tracking-wide text-cream sm:text-5xl">
          {storeInfo.name}
        </h1>
        <p className="font-display text-lg text-gold">{storeInfo.tagline}</p>
        <p className="text-sm text-cream/50">{storeInfo.slogan}</p>
        <p className="mt-1 text-xs text-cream/40">
          {storeInfo.address} · {storeInfo.openingNote} · Pedido mínimo R${" "}
          {storeInfo.minOrder.toFixed(2).replace(".", ",")}
        </p>
      </header>

      <nav className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-sm border px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
              activeCategory === cat.id
                ? "border-gold bg-gold text-char"
                : "border-gold/30 text-cream/70 hover:border-gold/60"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))}
        </section>

        <aside>
          <Cart
            items={cart}
            onIncrease={increase}
            onDecrease={decrease}
            onClear={() => setCart([])}
          />
        </aside>
      </div>

      <footer className="mt-16 text-center text-xs text-cream/30">
        {storeInfo.name} · {storeInfo.address} · WhatsApp {storeInfo.whatsappDisplay}
      </footer>
    </main>
  );
}
