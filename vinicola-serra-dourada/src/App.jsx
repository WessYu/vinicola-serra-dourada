import React, { Suspense, lazy, useState } from "react"
import { CartProvider } from "./context/CartContext"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Benefits } from "./components/Benefits"

const lazyNamed = (loader, exportName) =>
  lazy(() => loader().then((module) => ({ default: module[exportName] })))

const ProductGrid = lazyNamed(() => import("./components/ProductGrid"), "ProductGrid")
const Story = lazyNamed(() => import("./components/Story"), "Story")
const Clube = lazyNamed(() => import("./components/Clube"), "Clube")
const Visitacao = lazyNamed(() => import("./components/Visitacao"), "Visitacao")
const Testimonials = lazyNamed(() => import("./components/Testimonials"), "Testimonials")
const FAQ = lazyNamed(() => import("./components/FAQ"), "FAQ")
const Footer = lazyNamed(() => import("./components/Footer"), "Footer")
const CartDrawer = lazyNamed(() => import("./components/CartDrawer"), "CartDrawer")
const VisitModal = lazyNamed(() => import("./components/VisitModal"), "VisitModal")

export default function App() {
  const [visitOpen, setVisitOpen] = useState(false)

  return (
    <CartProvider>
      <Header />
      <main>
        <Hero onOpenVisit={() => setVisitOpen(true)} />
        <Benefits />
        <Suspense fallback={null}>
          <ProductGrid />
          <Clube />
          <Story />
          <Visitacao onOpenVisit={() => setVisitOpen(true)} />
          <Testimonials />
          <FAQ />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <CartDrawer />
        {visitOpen ? <VisitModal open={visitOpen} onClose={() => setVisitOpen(false)} /> : null}
      </Suspense>
    </CartProvider>
  )
}
