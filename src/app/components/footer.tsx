function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="bg-white text-purple-900 font-extrabold rounded-xl px-6 py-2 text-xl shadow-lg inline-block mb-4">
              A_UP
            </div>
            <p className="text-purple-200">
              Amigos unidos por um propósito: transformar tecnologia em soluções
              simples e eficientes.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-purple-200">
              <li>Desenvolvimento Web</li>
              <li>Apps Mobile</li>
              <li>Soluções Cloud</li>
              <li>Consultoria</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-purple-200">
              <li>Sobre Nós</li>
              <li>Equipe</li>
              <li>Carreiras</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-purple-200">
              <li>contato@aup.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
          <p>&copy; 2024 A_UP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
