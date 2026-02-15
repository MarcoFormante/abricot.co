import { GoogleGenAI } from "@google/genai";

import { NextRequest, NextResponse } from "next/server";

/**
 * Get AI TASKS with Google GEN AI
 * @param req NextRequest
 * @returns 
 */
export async function POST(req:NextRequest) {
    
  try {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("Desolé, le API KEY est privé, je vous montre cette partie pendant la soutenance ou vous pouvez créé un compte sur google Ai Studio et recuperer une api key, puis la mettre dans frontend/env.local, variable: GEMINI_API_KEY",{
          cause:"apikey"
        });
        
    }
    const { prompt } = await req.json();
    const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

    const systemInstruction = `
      Tu es un extracteur de tâches. Ton rôle est de lire le texte de l'utilisateur et d'extraire les tâches à créer.
      Règles :
      1. Retourne TOUJOURS un JSON avec cette structure exacte : 
         { "tasks": [{ "id":string "title": string, "description": string }], "error": string | null }
      2. Si l'utilisateur décrit plus de 3 tâches, extrais-les toutes dans le tableau, mais remplis le champ "error" con le message suivant : "Vous pouvez créer un maximum de 3 tâches à la fois."
      3. Si le nombre de tâches est inférieur ou égal à 3, le champ "error" doit être null.
      4. Sois concis pour les noms et les descriptions.
      5. tout dois etre toujours en francais meme si le prompt est dans une autre langue.
      6. SI le prompt est trop generique, invente un titre et un description, max 255 chars, theme development web ou Web Design
    `;

     const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents:  prompt,
        config: {
        systemInstruction: systemInstruction,
        responseMimeType:"application/json"
        },
    });
    
    return NextResponse.json(JSON.parse(response.text as string));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    if(error?.cause){
       return NextResponse.json({ apiKeyError: error.message }, { status: error?.status || 500 });
    }
    return NextResponse.json({ error: "Erreur API" }, { status: error?.status || 500 });
  }
}