# Vinícola Serra Dourada (Landing Page)

Projeto de portfólio: landing page de vinícola com vitrine de produtos, filtro/ordenação, carrinho (drawer) com persistência via localStorage e modal de agendamento.

## Stack
- React + Vite
- TailwindCSS

## Rodar localmente
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Onde mexer rápido
- Produtos: `src/data/products.js`
- Seções: `src/components/*`
- Cores / tema: `tailwind.config.cjs`
- Estilos globais: `src/styles.css`

## Próximos upgrades (se você quiser evoluir)
- Página de produto (rota /produto/:id)
- “Checkout” real (integração)
- Formulário com validação (zod/react-hook-form)
- Dark mode
- Animações leves (Framer Motion)
