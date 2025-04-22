"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SPECIALTIES } from "@/lib/mock-data";

// Define availability time ranges
const AVAILABILITY_OPTIONS = [
  "All Times",
  "Morning (8AM-12PM)",
  "Afternoon (12PM-5PM)",
  "Evening (After 5PM)",
];

interface DirectoryFiltersProps {
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
  selectedAvailability: string;
  onAvailabilityChange: (availability: string) => void;
}

export function DirectoryFilters({
  selectedSpecialty,
  onSpecialtyChange,
  selectedAvailability,
  onAvailabilityChange,
}: Readonly<DirectoryFiltersProps>) {
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="text-lg font-medium">Filter by Specialty</h2>
      <div className="w-1/2 flex space-x-4">
        <div className="w-1/2">
          <Select value={selectedSpecialty} onValueChange={onSpecialtyChange}>
            <SelectTrigger className="w-full" aria-label="Select a specialty">
              <SelectValue placeholder="Select a specialty" />
            </SelectTrigger>
            <SelectContent>
              {SPECIALTIES.map((specialty) => (
                <SelectItem key={specialty} value={specialty}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/2">
          <Select
            value={selectedAvailability}
            onValueChange={onAvailabilityChange}
          >
            <SelectTrigger className="w-full" aria-label="Select availability">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              {AVAILABILITY_OPTIONS.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
