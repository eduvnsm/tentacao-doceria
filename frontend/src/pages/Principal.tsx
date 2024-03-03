import appDemo from '@/assets/images/app-demo.png';
import appDownload from '@/assets/images/app-download.png';

const Principal = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 px-2 flex flex-col gap-5 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-red-600">
                SISTEMA TENTAÇÃO
            </h1>
            <span className="text-xl">
              Gerencie os pedidos de forma mais eficiente!
            </span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <img src={appDemo} alt="" />
          <div className="flex flex-col items-center justify-center gap=-r text-center">
            <span className="font-bold text-3xl tracking-tighter">
              Se você é um de nossos colaboradores
            </span>
            <span>
              Faça o download do aplicativo Sistema Tentação e aumente sua produtividade!
            </span>
            <img src={appDownload} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Principal;