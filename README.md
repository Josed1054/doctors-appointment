# Doctor Appointment Booking UI

A fully responsive and accessible appointment booking UI for a healthcare platform.

## Features

- **Doctor Directory View**
  - Browse a list of doctors with details (name, photo, specialty, rating, location)
  - Filter doctors by specialty
  - Book appointments with a single click

- **Booking Modal**
  - Select from available time slots
  - Confirm appointment booking

- **Appointments Summary View**
  - View all booked appointments
  - Cancel appointments
  - Empty state with guidance for new users

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: React Context API + localStorage
- **Accessibility**: ARIA attributes, keyboard navigation support, responsive design

## How AI Tools Were Used

- **Cursor AI**: Used to scaffold component structure and implement component logic
- **Mock Data**: Created realistic mock data for doctors and specialties

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Accessibility Features

- Fully keyboard navigable components
- ARIA labels for interactive elements
- Proper heading hierarchy
- Screen reader friendly content
- Responsive design for all device sizes

## Known Limitations & Future Improvements

- **Mock Data Only**: Currently uses static mock data with no backend
- **Limited Filtering**: Only specialty filtering implemented, could add location
- **No Authentication**: A real app would require user authentication
- **Appointment Management**: Add features like rescheduling, reminders, and calendar integration
- **Search Functionality**: Implement search for finding doctors by name or other criteria
- **Doctor Profiles**: Detailed doctor profiles with reviews and more information
