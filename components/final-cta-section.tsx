"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section id="cotizar" className="bg-primary py-16 md:py-24 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Protege hoy lo que con tanto esfuerzo construiste
          </h2>
          <p className="text-lg leading-relaxed opacity-90">
            Contáctanos directamente y un asesor te responderá en menos de 24 horas
          </p>
        </div>

        <div className="mx-auto max-w-xl text-center">
          <div className="bg-background text-foreground p-8 rounded-lg shadow-xl">
            <p className="text-xl font-medium mb-6">¿Listo para comenzar?</p>
            <Button
              size="lg"
              className="w-full text-base font-semibold bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 mb-6 h-14"
              asChild
            >
              <a
                href="https://wa.me/56982897949?text=Hola%20quiero%20registrar%20mi%20marca"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                Contactar por WhatsApp
              </a>
            </Button>

            <div className="space-y-4 pt-4 border-t">
              <p className="font-semibold text-sm text-muted-foreground">Otras formas de contacto:</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <a
                  href="tel:+56982897949"
                  className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>+56 9 8289 7949</span>
                </a>
                <a
                  href="mailto:ccastro@ayc-consultores.cl"
                  className="flex items-center justify-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>ccastro@ayc-consultores.cl</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
