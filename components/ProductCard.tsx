"use client";

import Image from "next/image";
import { Product } from "@/data/menu";

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (product: Product) => void;
}) {
  return (
    <div className="group relative flex flex-col justify-between rounded-sm border border-gold/20 bg-ember/60 p-5 transition-colors hover:border-gold/50">
      {product.tag && (
        <span className="absolute left-4 top-3 z-10 rounded-sm bg-gold px-2 py-0.5 text-xs font-semibold tracking-wide text-char">
          {product.tag}
        </span>
      )}
      {product.image && (
        <div className="relative -mx-5 -mt-5 mb-4 h-40 overflow-hidden rounded-t-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ember/90 via-transparent to-transparent" />
        </div>
      )}
      <div>
        <h3 className="font-display text-xl tracking-wide text-cream">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-snug text-cream/60">
          {product.description}
        </p>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-display text-lg text-gold">
          {formatPrice(product.price)}
        </span>
        <button
          onClick={() => onAdd(product)}
          className="rounded-sm border border-gold px-4 py-1.5 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-char"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
