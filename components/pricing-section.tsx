import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  "Análisis de registrabilidad",
  "Registro completo ante INAPI",
  "Defensa ante observaciones",
  "Seguimiento y título final",
  "Garantía de registro",
]

export function PricingSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Inversión transparente
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Sin costos ocultos, todo incluido</p>
        </div>

        <div className="mx-auto max-w-lg">
          <Card className="border-2 border-primary shadow-lg">
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl mb-2">PLAN MARCA SEGURA A&C</CardTitle>
              <CardDescription className="text-base">Todo lo que necesitas para proteger tu marca</CardDescription>
              <div className="mt-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold tracking-tight">$149.000</span>
                  <span className="text-xl text-muted-foreground">CLP</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">+ tasas oficiales INAPI</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-primary/10 p-4 text-center">
                <p className="text-sm font-semibold">📅 Pago hasta en 3 cuotas sin interés</p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 pt-6">
              <Button size="lg" className="w-full text-base font-semibold" asChild>
                <a
                  href="https://wa.me/56982897949?text=Hola%20quiero%20proteger%20mi%20marca%20con%20AyC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quiero proteger mi marca
                </a>
              </Button>
              <p className="text-xs text-center text-muted-foreground">Respuesta en menos de 24 horas</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
