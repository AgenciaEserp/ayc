import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/ayc-logo.webp"
              alt="A&C Consultores"
              width={160}
              height={64}
              className="h-auto w-40 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Más de 35 años protegiendo la propiedad industrial e intelectual en Chile.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📞 +56 9 8289 7949</p>
              <p>✉️ ccastro@ayc-consultores.cl</p>
              <p>📍 Av. Providencia 2594, Of. 513</p>
              <p className="pl-4">Santiago, Chile</p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Términos del servicio
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} A&C Consultores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
