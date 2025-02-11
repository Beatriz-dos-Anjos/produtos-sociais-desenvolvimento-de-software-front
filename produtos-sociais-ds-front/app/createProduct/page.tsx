import logo from '../../public/logo.svg';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import { Input } from '@/components/ui/input';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function createProduct () {
    return (
        <div className="min-h-screen flex items-center  p-4 flex-col gap-4">
            <div className="">
                <Image src={logo} alt="Logo" />
                <div className=" flex text-2xl font-bold items-center ml-24 mt-8" style={{fontFamily:dmSans.style.fontFamily, fontSize:'2rem'}}>Cadastrar Produto</div>
            </div>
            <div className="relative w-full max-w-2xl"> 
        <div className="relative mt-9">
          <label htmlFor="nome-produto" className="absolute -top-2.5 left-3 bg-white px-1 text-sm text-gray-600">
            Nome do Produto
          </label>
          <Input
            type="text"
            id="nome-produto"
            placeholder="Ex: Chapéu de palha"
            className="w-full rounded-md border border-gray-300 px-3 py-3 text-gray-600 focus:border-gray-400 focus:outline-none focus:ring-0"
          />
        </div>
      </div>

        </div>
    )
};