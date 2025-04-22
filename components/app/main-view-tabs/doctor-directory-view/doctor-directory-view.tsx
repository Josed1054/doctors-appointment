"use client";

import { DoctorType, useAppointments } from "@/context/appointments-context";

import { BookingModal } from "./booking-modal";
import { DOCTORS_DATA } from "@/lib/mock-data";
import { DirectoryFilters } from "./directory-filters";
import { DoctorCard } from "./doctor-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

// Helper function to check if a time is within a specific range
const isTimeInRange = (time: string, range: string): boolean => {
  const timeHour = parseInt(time.split(":")[0]);
  const isPM = time.includes("PM") && timeHour !== 12;
  const hour = isPM ? timeHour + 12 : timeHour;

  switch (range) {
    case "Morning (8AM-12PM)":
      return hour >= 8 && hour < 12;
    case "Afternoon (12PM-5PM)":
      return hour >= 12 && hour < 17;
    case "Evening (After 5PM)":
      return hour >= 17;
    case "All Times":
    default:
      return true;
  }
};

export function DoctorDirectoryView() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All Times");
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { addAppointment } = useAppointments();

  // Filter doctors based on selected specialty and availability
  const filteredDoctors = DOCTORS_DATA.filter(
    (doctor) =>
      selectedSpecialty === "All" || doctor.specialty === selectedSpecialty
  ).filter((doctor) => {
    if (selectedAvailability === "All Times") return true;

    // Check if doctor has any availability in the selected time range
    return doctor.availability.some((time) =>
      isTimeInRange(time, selectedAvailability)
    );
  });

  const handleBookAppointment = (doctor: DoctorType) => {
    setSelectedDoctor(doctor);
    setIsBookingModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleConfirmBooking = (
    doctorId: number,
    doctorName: string,
    doctorImage: string,
    specialty: string,
    location: string,
    dateTime: string
  ) => {
    addAppointment({
      doctorId,
      doctorName,
      doctorImage,
      specialty,
      location,
      dateTime,
    });
    setIsBookingModalOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="space-y-6">
      <DirectoryFilters
        selectedSpecialty={selectedSpecialty}
        onSpecialtyChange={setSelectedSpecialty}
        selectedAvailability={selectedAvailability}
        onAvailabilityChange={setSelectedAvailability}
      />

      <ScrollArea className="h-[calc(100vh-220px)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={handleBookAppointment}
            />
          ))}
        </div>
      </ScrollArea>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-8">
          <h3 className="text-lg font-medium">No doctors found</h3>
          <p className="text-muted-foreground">Try adjusting your filters</p>
        </div>
      )}

      <BookingModal
        isOpen={isBookingModalOpen}
        doctor={selectedDoctor}
        onClose={handleCloseModal}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
}
