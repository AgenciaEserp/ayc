import { BadgeCheck, Clock, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "Perito INAPI certificado",
    description: "Experiencia real, no bots. Más de 35 años protegiendo ideas en Chile.",
  },
  {
    icon: Clock,
    title: "Atención en menos de 24 horas",
    description: "Contacto humano y seguimiento directo en cada etapa del proceso.",
  },
  {
    icon: ShieldCheck,
    title: "Garantía total",
    description: "Si no se logra registrar, devolvemos tu dinero. Sin letra chica.",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Por qué elegir A&C Consultores
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed italic">
            "Tu marca es tu identidad. Nosotros la protegemos como si fuera nuestra."
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="relative flex flex-col items-center text-center space-y-4 p-8 rounded-lg border-2 border-border hover:border-primary transition-colors"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mt-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
