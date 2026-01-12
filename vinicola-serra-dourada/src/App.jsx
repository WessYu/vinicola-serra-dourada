import React, { useState } from "react"
import { CartProvider } from "./context/CartContext"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Benefits } from "./components/Benefits"
import { ProductGrid } from "./components/ProductGrid"
import { Story } from "./components/Story"
import { Clube } from "./components/Clube"
import { Visitacao } from "./components/Visitacao"
import { Testimonials } from "./components/Testimonials"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"
import { CartDrawer } from "./components/CartDrawer"
import { VisitModal } from "./components/VisitModal"

export default function App() {
  const [visitOpen, setVisitOpen] = useState(false)

  return (
    <CartProvider>
      <Header />
      <main>
        <Hero onOpenVisit={() => setVisitOpen(true)} />
        <Benefits />
        <ProductGrid />
        <Clube />
        <Story />
        <Visitacao onOpenVisit={() => setVisitOpen(true)} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />

      <CartDrawer />
      <VisitModal open={visitOpen} onClose={() => setVisitOpen(false)} />
    </CartProvider>
  )
}
