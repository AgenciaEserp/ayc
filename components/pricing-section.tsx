import { Check, HelpCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const plans = [
  {
    name: "PLAN MARCA SEGURA A&C",
    price: "$299.000",
    description: "Seguimiento, tramitación de una solicitud de marca en 1 Clase.",
    features: [
      "Tramitación y estudio",
      "Análisis de factibilidad de marca",
      "Revisión de similitudes para evitar rechazos",
      "Preparación y presentación del expediente",
      "Tramitación de los pagos y tasas en INAPI y Diario Oficial",
      "Seguimiento completo hasta la resolución",
      "Acompañamiento personalizado en cada etapa",
      "Entrega del Título Oficial de Registro de Marca",
    ],
    footerText: "El cliente paga las tasas.",
    highlight: false,
  },
  {
    name: "PLAN MARCA SEGURA A&C PRO",
    price: "$339.000",
    originalPrice: "$449.000",
    description: "Protección avanzada para marcas que ofrecen productos + servicios, tiendas online o negocios en crecimiento.",
    features: [
      "Registro mas protegido de tu marca en 2 clases",
      "Estrategia de cobertura para elegir las mejores clases",
      "Análisis avanzado de riesgo y diferenciación",
      "Correcciones y optimización de la etiqueta",
      "Priorización ante observaciones",
      "Emisión de informe de registrabilidad",
      "Acompañamiento extendido por 12 meses",
      "Gestión integral hasta emitir el Título Oficial de Registro de Marca en 2 Clases",
    ],
    footerText: "La opción más completa y con el mejor valor del mercado.",
    highlight: true,
  },
]

const faqs = [
  {
    question: "¿Qué incluye el servicio de registro de marca?",
    answer: (
      <div className="space-y-2">
        <p>
          Incluye la presentación, seguimiento y tramitación completa de tu solicitud ante INAPI. Realizamos:
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Revisión previa de registrabilidad</li>
          <li>Sugerencia de clases según tu rubro</li>
          <li>Redacción y presentación de la solicitud</li>
          <li>Seguimiento de todas las etapas</li>
          <li>Gestión de observaciones formales</li>
          <li>Acompañamiento hasta obtener resolución final</li>
        </ul>
        <p className="text-sm italic">
          No incluye defensa legal, honorarios de abogados ni simulación de oposiciones.
        </p>
      </div>
    ),
  },
  {
    question: "¿Los planes incluyen los pagos y tasas de INAPI?",
    answer: (
      <div className="space-y-2">
        <p>
          <strong>No.</strong> Las tasas oficiales deben ser pagadas directamente por el cliente.
        </p>
        <p>AyC Consultores gestiona el trámite, pero los costos oficiales los cubre el solicitante.</p>
      </div>
    ),
  },
  {
    question: "¿Cuánto cobra INAPI por registrar una marca?",
    answer: (
      <div className="space-y-3">
        <p>Las tasas se pagan por clase e incluyen dos momentos:</p>
        <div>
          <p className="font-semibold">🔹 1º Pago inicial:</p>
          <p>1 UTM por cada clase</p>
          <p className="text-sm text-muted-foreground">
            Permite ingresar la solicitud y obtener un número de expediente.
          </p>
        </div>
        <div>
          <p className="font-semibold">🔹 2º Pago final (solo si INAPI concede el registro):</p>
          <p>2 UTM por cada clase</p>
          <p className="text-sm text-muted-foreground">
            Se paga para que INAPI emita el registro definitivo.
          </p>
        </div>
      </div>
    ),
  },
  {
    question: "¿Cuándo debo pagar estas tasas?",
    answer: (
      <div className="space-y-3">
        <div>
          <p className="font-semibold">1) Al inicio del proceso:</p>
          <p>Se paga 1 UTM por clase para entrar a trámite.</p>
        </div>
        <div>
          <p className="font-semibold">2) Al finalizar (cuando la marca es concedida):</p>
          <p>Se pagan 2 UTM por clase para emitir el registro.</p>
        </div>
        <p>AyC te guía en cada etapa del proceso.</p>
      </div>
    ),
  },
  {
    question: "¿Cuál es la diferencia entre los planes disponibles?",
    answer: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-primary">🟦 Plan Marca Segura – $299.000</p>
          <ul className="list-disc pl-4 space-y-1 mt-1">
            <li>Solicitud en 1 clase</li>
            <li>Presentación + seguimiento + tramitación</li>
            <li>Ideal para marcas con un solo rubro</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-primary">
            🟪 Plan Marca Segura Pro – Oferta $339.000 (precio normal $449.000)
          </p>
          <ul className="list-disc pl-4 space-y-1 mt-1">
            <li>Solicitud en 2 clases</li>
            <li>Mayor nivel de protección</li>
            <li>Perfecto para negocios con más de un rubro o categoría</li>
          </ul>
        </div>
        <p className="text-sm italic">Tasas oficiales de INAPI no incluidas.</p>
      </div>
    ),
  },
  {
    question: "¿El servicio incluye abogado o defensa legal?",
    answer: (
      <div className="space-y-2">
        <p>
          <strong>No.</strong> Los planes contemplan la tramitación administrativa ante INAPI.
        </p>
        <p>
          Cualquier defensa u oposición debe ser tratada con un abogado externo según necesidad.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cuánto demora registrar una marca en Chile?",
    answer: (
      <div className="space-y-2">
        <p>
          Entre 6 y 10 meses en promedio, dependiendo de las etapas de revisión y publicación.
        </p>
        <p>Realizamos seguimiento continuo para avanzar sin retrasos.</p>
      </div>
    ),
  },
  {
    question: "¿Puedo pagar con tarjeta de crédito?",
    answer: (
      <div>
        <p>
          <strong>Sí.</strong> Los pagos con tarjeta estarán habilitados durante la próxima semana.
        </p>
      </div>
    ),
  },
  {
    question: "¿Qué pasa si mi marca recibe observaciones?",
    answer: (
      <div className="space-y-2">
        <p>Las observaciones formales simples se gestionan dentro del servicio.</p>
        <p>
          Si la observación es compleja o existe oposición, te informaremos para que puedas optar por asesoría legal externa.
        </p>
      </div>
    ),
  },
  {
    question: "¿Cómo sabré en qué etapa va mi solicitud?",
    answer: (
      <p>
        AyC Consultores realiza seguimiento activo y te mantiene informado del estado de tu expediente en cada fase del proceso.
      </p>
    ),
  },
  {
    question: "¿Qué necesito para iniciar?",
    answer: (
      <div className="space-y-2">
        <p>Solo debes enviarnos:</p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Nombre de tu marca</li>
          <li>Rubro o actividad</li>
          <li>Breve descripción del uso</li>
          <li>Datos del titular (persona o empresa)</li>
        </ul>
        <p>Nosotros analizamos las clases y te guiamos en la mejor opción.</p>
      </div>
    ),
  },
  {
    question: "¿Puedo registrar mi marca en más de dos clases?",
    answer: (
      <div className="space-y-2">
        <p>
          <strong>Sí.</strong> Las clases adicionales se cotizan de manera independiente e implican pagar nuevamente las tasas oficiales (1 UTM inicial + 2 UTM finales por clase).
        </p>
      </div>
    ),
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
