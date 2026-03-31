import { useEffect, useState } from "react";

interface Toast {
  id: number;
  name: string;
  country: string;
}

interface ToastNotificationProps {
  toasts: Toast[];
}

export function ToastNotification({ toasts }: ToastNotificationProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[280px] max-w-[320px] animate-slide-in"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-sm font-medium text-gray-900">
              <span className="font-semibold">{toast.name}</span> de {toast.country} comprou
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function useToastNotifications() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [toastId, setToastId] = useState(0);

  const addToast = (name: string, country: string) => {
    const newToast: Toast = {
      id: toastId,
      name,
      country,
    };
    
    setToasts(prev => [...prev, newToast]);
    setToastId(prev => prev + 1);

    // Remove toast after 4 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== newToast.id));
    }, 4000);
  };

  const clearToasts = () => {
    setToasts([]);
  };

  return { toasts, addToast, clearToasts };
}

// Nomes latinos femininos comuns
const latinNames = [
  "María", "Ana", "Laura", "Sofía", "Isabella", "Valentina", "Camila", "Luciana",
  "Martina", "Paula", "Daniela", "Gabriela", "Fernanda", "Carolina", "Andrea",
  "Natalia", "Victoria", "Emilia", "Sofía", "Valeria", "Clara", "Isabel", "Teresa",
  "Beatriz", "Mónica", "Patricia", "Cecilia", "Rosa", "Luisa", "Elena", "Carmen",
  "Alicia", "Verónica", "Margarita", "Adriana", "Claudia", "Silvia", "Erika",
  "Rocío", "Jimena", "Renata", "Bárbara", "Mónica", "Yolanda", "Esther", "Miriam"
];

// Países latino-americanos hispano-hablantes
const latinCountries = [
  "México", "Argentina", "Colombia", "España", "Perú", "Venezuela", "Chile",
  "Ecuador", "Guatemala", "Cuba", "Bolivia", "República Dominicana", "Honduras",
  "Paraguay", "El Salvador", "Nicaragua", "Costa Rica", "Panamá", "Uruguay",
  "Puerto Rico"
];

// Gerar array de toasts predefinidos
const generateToasts = (): Array<{ name: string; country: string }> => {
  const toasts = [];
  
  for (let i = 0; i < 50; i++) {
    const randomName = latinNames[Math.floor(Math.random() * latinNames.length)];
    const randomCountry = latinCountries[Math.floor(Math.random() * latinCountries.length)];
    
    // Adicionar sobrenomes latinos comuns para mais variedade
    const surnames = ["García", "Rodríguez", "López", "Martínez", "González", "Pérez", "Sánchez", "Ramírez", "Torres", "Díaz"];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    
    toasts.push({
      name: `${randomName} ${randomSurname}`,
      country: randomCountry
    });
  }
  
  return toasts;
};

export const predefinedToasts = generateToasts();
