"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type DoctorType = {
  id: number;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  location: string;
  availability: string[];
};

export type AppointmentType = {
  id: number;
  doctorId: number;
  doctorName: string;
  doctorImage: string;
  specialty: string;
  location: string;
  dateTime: string;
};

type AppointmentsContextType = {
  appointments: AppointmentType[];
  addAppointment: (appointment: Omit<AppointmentType, "id">) => void;
  cancelAppointment: (id: number) => void;
};

const AppointmentsContext = createContext<AppointmentsContextType | undefined>(
  undefined
);

export const useAppointments = () => {
  const context = useContext(AppointmentsContext);
  if (!context) {
    throw new Error(
      "useAppointments must be used within an AppointmentsProvider"
    );
  }
  return context;
};

export function AppointmentsProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [appointments, setAppointments] = useState<AppointmentType[]>([]);

  // Load appointments from localStorage on component mount
  useEffect(() => {
    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const addAppointment = (appointment: Omit<AppointmentType, "id">) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(), // Simple way to generate unique IDs
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  const cancelAppointment = (id: number) => {
    setAppointments((prev) =>
      prev.filter((appointment) => appointment.id !== id)
    );
  };

  // Memoize the context value to prevent unnecessary rerenders
  const contextValue = useMemo(
    () => ({ appointments, addAppointment, cancelAppointment }),
    [appointments]
  );

  return (
    <AppointmentsContext.Provider value={contextValue}>
      {children}
    </AppointmentsContext.Provider>
  );
}
