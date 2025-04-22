"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { DoctorType } from "@/context/appointments-context";
import { StarIcon } from "lucide-react";

interface DoctorCardProps {
  doctor: DoctorType;
  onBookAppointment: (doctor: DoctorType) => void;
}

export function DoctorCard({
  doctor,
  onBookAppointment,
}: Readonly<DoctorCardProps>) {
  const { name, image, specialty, rating, location } = doctor;

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 items-start">
          <Avatar className="h-16 w-16">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="space-y-1 flex-1">
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-muted-foreground">{specialty}</p>
            <div className="flex items-center text-sm">
              <StarIcon className="h-4 w-4 fill-accent-foreground text-accent-foreground mr-1" />
              <span>{rating}</span>
            </div>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-6 pt-0">
        <Button
          onClick={() => onBookAppointment(doctor)}
          className="w-full focus:ring-2 focus:ring-accent-foreground/50 focus:ring-offset-2 focus:ring-offset-background"
          aria-label={`Book appointment with ${name}`}
        >
          Book Appointment
        </Button>
      </CardFooter>
    </Card>
  );
}
