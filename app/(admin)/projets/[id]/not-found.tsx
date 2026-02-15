'use client'

import { useRouter } from "next/navigation"

export default function NotFound(){
    const router = useRouter()

    return (
       <div className="flex flex-col items-center justify-center min-h-[300px] p-4 text-center">
      <p className="text-gray-500 text-m mb-2">Erreur 404</p>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
      {"La ressource demandée n'existe pas."}
      </h2>

      <button
        onClick={() => router.back()}
        className="cursor-pointer px-5 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition-all shadow-sm"
      >
        Retour
      </button>
    </div>
    )
}