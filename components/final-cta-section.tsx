"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, Mail } from "lucide-react"

export function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    brandName: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, quiero registrar mi marca:%0A%0ANombre: ${formData.name}%0AWhatsApp: ${formData.whatsapp}%0AEmail: ${formData.email}%0ANombre de marca: ${formData.brandName}`
    window.open(`https://wa.me/56982897949?text=${message}`, "_blank")
  }

  return (
    <section id="cotizar" className="bg-primary py-16 md:py-24 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Protege hoy lo que con tanto esfuerzo construiste
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            Completa tus datos y un asesor te contactará en menos de 24 horas
          </p>
        </div>

        <div className="mx-auto max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-background p-6 md:p-8 shadow-xl">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Nombre completo
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Juan Pérez"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-foreground">
                WhatsApp
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                placeholder="+56 9 1234 5678"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                className="bg-background"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brandName" className="text-foreground">
                Nombre de tu marca
              </Label>
              <Input
                id="brandName"
                type="text"
                required
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                placeholder="Mi Marca"
                className="bg-background"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Enviar y Registrar
            </Button>
          </form>

          <div className="mt-8 space-y-3 text-center">
            <p className="font-semibold">Contacto alternativo:</p>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href="tel:+56982897949"
                className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="h-5 w-5" />
                <span>+56 9 8289 7949</span>
              </a>
              <a
                href="mailto:ccastro@ayc-consultores.cl"
                className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail className="h-5 w-5" />
                <span>ccastro@ayc-consultores.cl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
