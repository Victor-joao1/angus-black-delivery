"use client";

import { useState } from "react";
import { Product, storeInfo, deliveryAreas } from "@/data/menu";
export type CartItem = { product: Product; qty: number };

function formatPrice(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function Cart({
  items,
  onIncrease,
  onDecrease,
  onClear,
}: {
  items: CartItem[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onClear: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [areaId, setAreaId] = useState("");
  const selectedArea = deliveryAreas.find((a) => a.id === areaId);

 const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
 const total = subtotal + (selectedArea ? selectedArea.fee : 0);
 const belowMin = subtotal > 0 && subtotal < storeInfo.minOrder;
 const noAreaSelected = items.length > 0 && !selectedArea;

  function sendOrder() {
    if (items.length === 0 || !selectedArea) return;
    const lines = items.map(
      (i) =>
        `- ${i.qty}x ${i.product.name} (${formatPrice(i.product.price * i.qty)})`,
    );
    const message = [
      `*Novo pedido - Angus Black*`,
      ``,
      `Cliente: ${name || "Não informado"}`,
      `Telefone: ${phone || "Não informado"}`,
      `Endereço: ${address || "Não informado"}`,
      `Bairro: ${selectedArea.label} (taxa ${formatPrice(selectedArea.fee)})`,
      ``,
      `Itens:`,
      ...lines,
      ``,
      `Subtotal: ${formatPrice(subtotal)}`,
      `Taxa de entrega: ${formatPrice(selectedArea.fee)}`,
      `*Total: ${formatPrice(total)}*`,
      ``,
      `Pagamento a combinar na entrega/retirada.`,
    ].join("\n");

    const url = `https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  }

  return (
    <div className="sticky top-6 flex flex-col gap-4 rounded-sm border border-gold/20 bg-ember/60 p-5">
      <h3 className="font-display text-xl tracking-wide text-cream">
        Seu pedido
      </h3>

      {items.length === 0 ? (
        <p className="text-sm text-cream/50">
          Nenhum item adicionado ainda. Escolha algo do cardápio ao lado.
        </p>
      ) : (
        <ul className="flex flex-col gap-3">
          {items.map(({ product, qty }) => (
            <li
              key={product.id}
              className="flex items-center justify-between gap-2"
            >
              <div className="min-w-0">
                <p className="truncate text-sm text-cream">{product.name}</p>
                <p className="text-xs text-cream/50">
                  {formatPrice(product.price)} un.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onDecrease(product.id)}
                  className="h-6 w-6 rounded-sm border border-gold/40 text-gold"
                >
                  −
                </button>
                <span className="w-4 text-center text-sm">{qty}</span>
                <button
                  onClick={() => onIncrease(product.id)}
                  className="h-6 w-6 rounded-sm border border-gold/40 text-gold"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-col gap-1 border-t border-gold/20 pt-3">
        {" "}
        <div className="flex items-center justify-between text-sm text-cream/60">
          {" "}
          <span>Subtotal</span> <span>{formatPrice(subtotal)}</span>{" "}
        </div>{" "}
        <div className="flex items-center justify-between text-sm text-cream/60">
          {" "}
          <span>
            {" "}
            Taxa de entrega{selectedArea ? ` (${selectedArea.label})` : ""}{" "}
          </span>{" "}
          <span>{selectedArea ? formatPrice(selectedArea.fee) : "—"}</span>{" "}
        </div>
        <div className="flex items-center justify-between">
          {" "}
          <span className="text-sm text-cream/60">Total</span>{" "}
          <span className="font-display text-lg text-gold">
            {" "}
            {formatPrice(total)}{" "}
          </span>{" "}
        </div>{" "}
      </div>

      {belowMin && (
        <p className="text-xs text-brasa">
          Pedido mínimo de {formatPrice(storeInfo.minOrder)}.
        </p>
      )}

      <div className="flex flex-col gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome"
          className="rounded-sm border border-gold/20 bg-char px-3 py-2 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Telefone"
          className="rounded-sm border border-gold/20 bg-char px-3 py-2 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Endereço de entrega"
          className="rounded-sm border border-gold/20 bg-char px-3 py-2 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
        />

        <select
          value={areaId}
          onChange={(e) => setAreaId(e.target.value)}
          className="rounded-sm border border-gold/20 bg-char px-3 py-2 text-sm text-cream focus:border-gold focus:outline-none"
        >
          {" "}
          <option value="" disabled>
            {" "}
            Selecione seu bairro{" "}
          </option>{" "}
          {deliveryAreas.map((area) => (
            <option key={area.id} value={area.id}>
              {area.label} — taxa {formatPrice(area.fee)}
            </option>
          ))}{" "}
        </select>
      </div>

      <button
        onClick={sendOrder}
        disabled={items.length === 0 || belowMin || noAreaSelected}
        className="mt-1 rounded-sm bg-gold py-2.5 text-sm font-semibold text-char transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      >
        Enviar pedido pelo WhatsApp
      </button>

      {items.length > 0 && (
        <button
          onClick={onClear}
          className="text-xs text-cream/40 underline underline-offset-2"
        >
          Limpar pedido
        </button>
      )}
    </div>
  );
}
