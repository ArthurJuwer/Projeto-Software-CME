import { User } from 'lucide-react';

function Menu(){
    return(
        <div className="min-h-screen bg-slate-600 w-72 p-8 flex flex-col gap-4">
            <div className="pb-2 border-b-2">
                <h1 className="text-slate-200 font-bold text-center text-3xl">CONTROLFLOW</h1>
            </div>
            <div className="flex items-center text-xl text-slate-200 font-bold gap-x-1">
                <User />
                <h1>Opções</h1>
            </div>
            <ul className='pl-6 text-slate-200 flex flex-col gap-y-2 text-bs'>
                <li>DashBoard</li>
                <li>Histórico</li>
                <li>Controle de Erros</li>
                <li>Indentificação</li>
            </ul>
            
            
        </div>
    )
}
export default Menu;