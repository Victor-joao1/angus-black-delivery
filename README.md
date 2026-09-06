# Angus Black — Delivery

Site de pedidos da hamburgueria Angus Black (Jaconé, Saquarema - RJ). MVP v0:
cardápio completo, carrinho e envio do pedido direto pelo WhatsApp — sem custo
de hospedagem e sem gateway de pagamento ainda (pagamento combinado na
entrega/retirada).

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Deploy gratuito (Vercel)

1. Crie um repositório no GitHub e suba este projeto.
2. Entre em https://vercel.com, conecte sua conta GitHub e importe o repositório.
3. Deploy automático — sem configuração extra necessária.

## Estrutura

- `data/menu.ts` — todos os produtos, preços e dados da loja (nome, WhatsApp,
  endereço, pedido mínimo). Editar aqui atualiza o site inteiro.
- `components/ProductCard.tsx` — card de cada item do cardápio.
- `components/Cart.tsx` — carrinho lateral e montagem da mensagem de WhatsApp.
- `app/page.tsx` — página principal (categorias + grid de produtos + carrinho).

## Próximos passos (quando quiser escalar)

1. **Pagamento online**: integrar checkout hospedado do Mercado Pago ou
   Pagar.me — troca só a função `sendOrder` do `Cart.tsx` por uma chamada que
   cria o link de pagamento e redireciona o cliente.
2. **Banco de dados**: mover `data/menu.ts` para Supabase/Postgres, com um
   painel simples para você editar cardápio e preços sem mexer em código.
3. **Login e histórico de pedidos**: usar Supabase Auth para os clientes
   acompanharem pedidos anteriores.
4. **Painel do lojista**: tela para acompanhar pedidos em tempo real (hoje
   eles chegam só via WhatsApp).

Nenhuma dessas etapas exige reescrever o que já existe — foi pensado para
crescer em cima da mesma base.
