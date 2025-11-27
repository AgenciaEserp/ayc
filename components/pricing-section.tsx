import { Check, HelpCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const plans = [
  {
    name: "PLAN MARCA SEGURA A&C",
    price: "$299.000",
    description: "El plan perfecto para emprendedores que necesitan registrar su marca rápido y sin complicarse.",
    features: [
      "Registro completo de 1 clase INAPI (todo pagado)",
      "Análisis de factibilidad de marca",
      "Revisión de similitudes para evitar rechazos",
      "Preparación y presentación del expediente",
      "Pago de todas las tasas INAPI + Diario Oficial",
      "Seguimiento completo hasta la resolución",
      "Acompañamiento personalizado en cada etapa",
      "Entrega del Título Oficial de Registro de Marca",
    ],
    footerText: "El cliente no paga nada más. Todo el proceso está cubierto.",
    highlight: false,
  },
  {
    name: "PLAN MARCA SEGURA A&C PRO",
    price: "$339.000",
    originalPrice: "$399.000",
    description: "Protección avanzada para marcas que ofrecen productos + servicios, tiendas online o negocios en crecimiento.",
    features: [
      "Registro completo de 2 clases INAPI (ambas pagadas)",
      "Estrategia de cobertura para elegir las mejores clases",
      "Análisis avanzado de riesgo y diferenciación",
      "Correcciones y optimización de la etiqueta",
      "Priorización ante observaciones",
      "Simulación de oposiciones",
      "Acompañamiento extendido por 12 meses",
      "Gestión integral hasta emitir el Título Oficial",
    ],
    footerText: "La opción más completa y con el mejor valor del mercado.",
    highlight: true,
  },
]

const faqs = [
  {
    question: "¿Qué es una clase en el registro de marca?",
    answer:
      "Las clases son categorías que definen qué productos o servicios protege tu marca. Por ejemplo, la clase 25 es para ropa y la 35 para comercialización. Si vendes y además tienes tienda, podrías necesitar ambas.",
  },
  {
    question: "¿Cuánto tiempo demora el proceso?",
    answer:
      "El proceso en INAPI suele tomar entre 4 a 6 meses si no hay oposiciones. Nosotros nos encargamos de todo el seguimiento para que no tengas que preocuparte.",
  },
  {
    question: "¿El pago es único?",
    answer:
      "Sí, nuestros planes son 'todo incluido'. Cubren honorarios, tasas de INAPI y publicación en el Diario Oficial. No tendrás sorpresas ni cobros adicionales para el registro.",
  },
  {
    question: "¿Qué pasa si rechazan mi marca?",
    answer:
      "Realizamos un análisis de factibilidad previo para minimizar este riesgo. Si aun así hay observaciones, nuestros planes incluyen la defensa y correcciones necesarias según el alcance del servicio contratado.",
  },
]

export function PricingSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24" id="precios">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl mb-4">
            Inversión transparente
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Sin costos ocultos, todo incluido</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col relative ${plan.highlight ? "border-primary shadow-xl scale-105 z-10" : "border-border shadow-md"}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  🎉 Oferta exclusiva
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base min-h-[50px]">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="flex flex-col items-center justify-center gap-1">
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                    )}
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                      <span className="text-xl text-muted-foreground">CLP</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Todo incluido</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 flex-1">
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                      <span className="text-sm font-medium text-left">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-6 bg-muted/20">
                <p className="text-sm font-medium text-center mb-2">{plan.footerText}</p>
                <Button size="lg" className="w-full text-base font-semibold gap-2" asChild>
                  <a
                    href={`https://wa.me/56982897949?text=Hola%20me%20interesa%20el%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Quiero este plan
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                  <Check className="h-3 w-3" /> Respuesta inmediata
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight mb-2">¿Preguntas? Respuestas</h3>
            <p className="text-muted-foreground">Resolvemos tus dudas sobre el registro de marca</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
