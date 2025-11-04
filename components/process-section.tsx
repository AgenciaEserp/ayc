import { Send, FileSearch, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Send,
    title: "Envíanos tu nombre y rubro",
    description: "Completa el formulario o contáctanos por WhatsApp con los datos de tu marca.",
  },
  {
    icon: FileSearch,
    title: "Revisamos y presentamos",
    description: "Analizamos la registrabilidad y presentamos tu solicitud ante INAPI.",
  },
  {
    icon: CheckCircle2,
    title: "¡Listo! Tu marca protegida",
    description: "Seguimiento completo hasta obtener tu título de registro oficial.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            3 pasos simples para proteger tu marca
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Un proceso transparente y sin complicaciones</p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line - hidden on mobile */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div className="rounded-lg bg-background p-6 shadow-sm">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden flex-1 md:block" />
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <a href="#cotizar">Comienza hoy mismo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
