import { Link } from "react-router-dom"
import type Postagem from "../../../models/Postagem"

interface CardPostagensProps{
    postagem: Postagem
}

function CardPostagens({postagem}: CardPostagensProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between">

        <div>

            <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                <img src="https://i.imgur.com/pK6vSCy.png" className='h-12 rounded-full' alt={postagem.usuario?.nome} />
                <h3 className="text-lg font-bold text-center uppercase"> {postagem.usuario?.nome} </h3>
            </div>

            <div className='p-4'>
                <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                <p>{postagem.texto}</p> {/*Aqui está pegando o texto da postagem */}
                <p>Tema: {postagem.tema?.descricao}</p>
            
                <p>Data: {new Intl.DateTimeFormat(undefined,{  /*Essa parte está alterando o formato data e hora */
                    dateStyle: 'full',
                    timeStyle: 'medium', 
                    }).format(new Date (postagem.data))} 
                </p>
            </div>

        </div>

        <div className='flex'>
            <Link to= '' className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
            <button>Editar</button>
            </Link>
            
            <Link to='' className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
            </Link>
        </div>

    </div>
  )
}

export default CardPostagens
