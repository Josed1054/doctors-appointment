"use client";

import { AppointmentsProvider } from "@/context/appointments-context";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/context/theme-context";
import queryClient from "@/context/react-query";

export default function GlobalContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AppointmentsProvider>{children}</AppointmentsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
