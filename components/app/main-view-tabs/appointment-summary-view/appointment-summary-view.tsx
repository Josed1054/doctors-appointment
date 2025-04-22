"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, MapPinIcon, Stethoscope } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppointments } from "@/context/appointments-context";

export function AppointmentSummaryView() {
  const { appointments, cancelAppointment } = useAppointments();

  const handleGoToDirectory = () => {
    const tabsElement = document.querySelector(
      '[data-radix-collection-item][data-value="directory"]'
    ) as HTMLElement;
    if (tabsElement) {
      tabsElement.click();
    }
  };

  if (appointments.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-muted p-6 mb-4">
          <CalendarIcon className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold mb-2">No appointments yet</h2>
        <p className="text-muted-foreground mb-6 max-w-md">
          Your upcoming appointments will appear here once you book them with a
          doctor.
        </p>
        <Button variant="outline" onClick={handleGoToDirectory}>
          Go to Directory
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Your Appointments</h2>
        <span className="text-sm text-muted-foreground">
          {appointments.length} appointment(s)
        </span>
      </div>

      <ScrollArea className="h-[calc(100vh-220px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appointments.map((appointment) => {
            const initials = appointment.doctorName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <Card key={appointment.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={appointment.doctorImage}
                        alt={appointment.doctorName}
                      />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-3 flex-1">
                      <div>
                        <h3 className="font-medium text-lg">
                          {appointment.doctorName}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Stethoscope className="h-4 w-4 mr-1" />
                          <span>{appointment.specialty}</span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center text-sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>{appointment.dateTime}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPinIcon className="h-4 w-4 mr-2" />
                          <span>{appointment.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pt-4 bg-muted/10 border-t">
                  <Button
                    variant="outline"
                    className="ml-auto"
                    onClick={() => cancelAppointment(appointment.id)}
                    aria-label={`Cancel appointment with ${appointment.doctorName}`}
                  >
                    Cancel Appointment
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
