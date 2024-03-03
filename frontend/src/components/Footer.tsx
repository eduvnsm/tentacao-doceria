import logo from '@/assets/logos/logo.png';

const Footer = () => {
  return (
    <div className="bg-red-300 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="w-28">
                <img src={logo} alt="Logo Sistema Tentação" />
            </span>
            <span className="text-red-600 font-bold tracking-tight flex gap-4">
                <span>Políticas de Privacidade</span>
                <span>Termos de Serviço</span>
            </span>
        </div>
    </div>
  )
}

export default Footer;