import { ShieldAlert, TrendingUp, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const reasons = [
  {
    icon: ShieldAlert,
    title: "Evita plagios o copias",
    description: "Protege tu nombre comercial de imitaciones y uso no autorizado.",
  },
  {
    icon: Award,
    title: "Protección por 10 años",
    description: "Asegura el valor de tu marca con protección renovable.",
  },
  {
    icon: Users,
    title: "Aumenta la confianza",
    description: "Genera credibilidad con clientes y socios comerciales.",
  },
  {
    icon: TrendingUp,
    title: "Licencias y franquicias",
    description: "Accede a oportunidades de expansión seguras.",
  },
]

export function WhyRegisterSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            ¿Por qué registrar tu marca?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tu marca es tu activo más valioso. Protégela legalmente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg bg-background shadow-sm"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <a href="#cotizar">Cotiza tu registro gratis</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
