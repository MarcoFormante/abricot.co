'use client'
import { useRouter } from "next/navigation";
import { Button } from "../Button/Button";

export function Forbidden() {
    const router = useRouter()
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 text-[#4B5563]">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>

      <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
        Accès interdit
      </h1>

      <p className="mt-4 text-base text-[#4B5563] max-w-md">
      {"Vous n'avez pas ou vous n'avez plus accès à ce projet."}
      </p>
    <div className="w-52 h-15 mt-5">
        <Button type="btn-black" label={"Retourner à l'accueil"}  onClick={()=>router.back()}/>
    </div>
    </main>
  );
}