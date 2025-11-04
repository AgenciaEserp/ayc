import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Check } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-background py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="mb-12 flex justify-center md:justify-start">
          <Image src="/ayc-logo.webp" alt="A&C Consultores" width={200} height={80} className="h-auto w-40 md:w-48" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Registra tu marca en Chile fácil, rápido y sin complicaciones
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
              Con Marca Segura AyC, un experto perito INAPI gestiona todo por ti. Garantizamos tu registro o te
              devolvemos el dinero.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="text-base font-semibold" asChild>
                <a
                  href="https://wa.me/56982897949?text=Hola%20quiero%20registrar%20mi%20marca%20con%20AyC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registra tu Marca Ahora
                </a>
              </Button>

              <Button size="lg" variant="outline" className="text-base font-semibold bg-transparent" asChild>
                <a href="#cotizar">Cotiza Gratis</a>
              </Button>
            </div>

            {/* Benefits List */}
            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              {[
                "Asesoría personalizada",
                "Registro completo ante INAPI",
                "Defensa y seguimiento incluidos",
                'Garantía "Registro o reembolso"',
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10 md:h-80 md:w-80">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-primary/20 md:h-60 md:w-60">
                  <Shield className="h-24 w-24 text-primary md:h-32 md:w-32" />
                </div>
              </div>
              <div className="absolute -right-4 -top-4 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-lg md:px-6 md:py-3 md:text-base">
                ®
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
