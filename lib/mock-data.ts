import { DoctorType } from "@/context/appointments-context";

// List of specialties
export const SPECIALTIES = [
  "All",
  "Cardiology",
  "Dermatology",
  "Neurology",
  "Pediatrics",
  "Orthopedics",
  "Psychiatry",
  "Gynecology",
  "Ophthalmology",
];

// Mock data for doctors
export const DOCTORS_DATA: DoctorType[] = [
  {
    id: 1,
    name: "Dr. John Smith",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Cardiology",
    rating: 4.8,
    location: "Downtown Medical Center",
    availability: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Pediatrics",
    rating: 4.9,
    location: "Children's Health Clinic",
    availability: ["9:30 AM", "11:00 AM", "1:30 PM", "3:30 PM", "5:00 PM"],
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Neurology",
    rating: 4.7,
    location: "Neurological Institute",
    availability: ["8:00 AM", "10:30 AM", "1:00 PM", "3:30 PM", "4:45 PM"],
  },
  {
    id: 4,
    name: "Dr. Emily Rodriguez",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Dermatology",
    rating: 4.6,
    location: "Skin & Beauty Clinic",
    availability: ["8:30 AM", "11:30 AM", "2:00 PM", "4:00 PM", "5:30 PM"],
  },
  {
    id: 5,
    name: "Dr. David Wilson",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Orthopedics",
    rating: 4.8,
    location: "Joint & Spine Center",
    availability: ["8:00 AM", "9:30 AM", "11:00 AM", "2:30 PM", "4:30 PM"],
  },
  {
    id: 6,
    name: "Dr. Sophia Lee",
    image:
      "https://images.unsplash.com/photo-1614608997588-8173059e20e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Psychiatry",
    rating: 4.9,
    location: "Mental Health Institute",
    availability: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
  },
  {
    id: 7,
    name: "Dr. James Brown",
    image:
      "https://images.unsplash.com/photo-1624136172595-e1c397111f61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Cardiology",
    rating: 4.7,
    location: "Heart & Vascular Center",
    availability: ["9:00 AM", "10:30 AM", "1:30 PM", "2:30 PM", "4:00 PM"],
  },
  {
    id: 8,
    name: "Dr. Elizabeth Parker",
    image:
      "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Gynecology",
    rating: 4.8,
    location: "Women's Health Clinic",
    availability: ["8:30 AM", "10:00 AM", "11:30 AM", "2:00 PM", "3:30 PM"],
  },
  {
    id: 9,
    name: "Dr. Robert Garcia",
    image:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Ophthalmology",
    rating: 4.6,
    location: "Vision Care Center",
    availability: ["9:00 AM", "10:00 AM", "11:00 AM", "2:30 PM", "4:30 PM"],
  },
  {
    id: 10,
    name: "Dr. Olivia Thompson",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Pediatrics",
    rating: 4.9,
    location: "Children's Wellness Center",
    availability: ["8:30 AM", "9:45 AM", "11:15 AM", "2:00 PM", "3:45 PM"],
  },
  {
    id: 11,
    name: "Dr. Daniel Kim",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Dermatology",
    rating: 4.7,
    location: "Dermatology Associates",
    availability: ["8:00 AM", "9:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"],
  },
  {
    id: 12,
    name: "Dr. Jennifer Lewis",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    specialty: "Neurology",
    rating: 4.8,
    location: "Brain & Nerve Center",
    availability: ["9:00 AM", "10:30 AM", "1:30 PM", "3:00 PM", "4:30 PM"],
  },
];
