import React from 'react';
import { MessageCircle, FileSpreadsheet, Bot } from 'lucide-react';

export function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <div className="bg-green-500 text-white rounded-full p-2 flex items-center justify-center">
      <MessageCircle size={size} />
    </div>
  );
}

export function GoogleSheetsIcon({ size = 24 }: { size?: number }) {
  return (
    <div className="bg-green-600 text-white rounded-full p-2 flex items-center justify-center">
      <FileSpreadsheet size={size} />
    </div>
  );
}

export function NotionIcon({ size = 24 }: { size?: number }) {
  return (
    <div className="bg-black text-white rounded-full p-2 flex items-center justify-center">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.262-.186z"/>
      </svg>
    </div>
  );
}

export function HubSpotIcon({ size = 24 }: { size?: number }) {
  return (
    <div className="bg-orange-500 text-white rounded-full p-2 flex items-center justify-center">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.164 7.511V5.807a1.65 1.65 0 0 0-3.299 0v1.704a6.445 6.445 0 0 0-3.043 1.088L8.487 5.264a2.091 2.091 0 1 0-1.362 1.362l3.335 3.335a6.444 6.444 0 0 0-1.088 3.043H7.668a1.65 1.65 0 0 0 0 3.299h1.704a6.444 6.444 0 0 0 1.088 3.043l-3.335 3.335a2.091 2.091 0 1 0 1.362 1.362l3.335-3.335a6.445 6.445 0 0 0 3.043 1.088v1.704a1.65 1.65 0 0 0 3.299 0v-1.704a6.445 6.445 0 0 0 3.043-1.088l3.335 3.335a2.091 2.091 0 1 0 1.362-1.362l-3.335-3.335a6.444 6.444 0 0 0 1.088-3.043h1.704a1.65 1.65 0 0 0 0-3.299h-1.704a6.444 6.444 0 0 0-1.088-3.043l3.335-3.335a2.091 2.091 0 1 0-1.362-1.362l-3.335 3.335a6.445 6.445 0 0 0-3.043-1.088zM12 16.604A4.604 4.604 0 1 1 16.604 12 4.604 4.604 0 0 1 12 16.604z"/>
      </svg>
    </div>
  );
}

export function OpenAIIcon({ size = 24 }: { size?: number }) {
  return (
    <div className="bg-black text-white rounded-full p-2 flex items-center justify-center">
      <Bot size={size} />
    </div>
  );
}