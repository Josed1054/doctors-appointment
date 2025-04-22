"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { DoctorType } from "@/context/appointments-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";
import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  doctor: DoctorType | null;
  onClose: () => void;
  onConfirm: (
    doctorId: number,
    doctorName: string,
    doctorImage: string,
    specialty: string,
    location: string,
    dateTime: string
  ) => void;
}

export function BookingModal({
  isOpen,
  doctor,
  onClose,
  onConfirm,
}: Readonly<BookingModalProps>) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Get current date formatted
  const currentDate = format(new Date(), "EEEE, MMMM d, yyyy");

  if (!doctor) return null;

  const handleConfirm = () => {
    if (selectedTimeSlot && doctor) {
      onConfirm(
        doctor.id,
        doctor.name,
        doctor.image,
        doctor.specialty,
        doctor.location,
        `${currentDate} at ${selectedTimeSlot}`
      );
      setSelectedTimeSlot(null);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book Appointment with {doctor.name}</DialogTitle>
          <DialogDescription>
            Select an available time slot for your appointment on {currentDate}.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <h3 className="text-sm font-medium mb-3">Available Time Slots:</h3>
          <ScrollArea className="h-60">
            <div className="grid grid-cols-2 gap-2">
              {doctor.availability.map((timeSlot) => (
                <Button
                  key={timeSlot}
                  variant={
                    selectedTimeSlot === timeSlot ? "default" : "outline"
                  }
                  className="justify-center"
                  onClick={() => setSelectedTimeSlot(timeSlot)}
                  aria-selected={selectedTimeSlot === timeSlot}
                  aria-label={`Select time slot for ${timeSlot}`}
                >
                  {timeSlot}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={!selectedTimeSlot}
            aria-disabled={!selectedTimeSlot}
          >
            Confirm Booking
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
