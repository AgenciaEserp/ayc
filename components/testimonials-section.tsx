import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Camila",
    business: "Fundadora de EcoBelleza.cl",
    content: "Rápido, claro y muy humano. En menos de una semana mi marca estaba en trámite.",
    rating: 5,
  },
  {
    name: "José",
    business: "Pyme de servicios tech",
    content: "Me explicaron todo el proceso sin letra chica. 100% recomendado.",
    rating: 5,
  },
  {
    name: "María",
    business: "Emprendedora gastronómica",
    content: "La garantía me dio confianza total. Excelente servicio y seguimiento constante.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Más de 35 años de experiencia protegiendo ideas en Chile
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-2xl rounded-lg bg-primary/10 p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <p className="text-lg font-bold">Garantía 100% Registro o Reembolso</p>
          </div>
          <p className="text-sm text-muted-foreground">Más de 35 años de experiencia protegiendo ideas en Chile</p>
        </div>
      </div>
    </section>
  )
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
