"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert } from "../components/Alert/Alert";
import { AlertData } from "../types/globals";

type AlertContextType = (alert: AlertData | null) => void;

const AlertContext = createContext<AlertContextType>(() => {});

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState< AlertData | null>(null);

  useEffect(() => {
    if (!alert) return;

    const timeout = setTimeout(() => {
      setAlert(null);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <AlertContext.Provider value={setAlert}>
      {alert && <Alert alert={alert} setAlert={setAlert} />}
      {children}
    </AlertContext.Provider>
  );
}
export const useAlert = () => useContext(AlertContext);
