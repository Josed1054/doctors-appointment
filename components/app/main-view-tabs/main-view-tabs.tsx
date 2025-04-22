"use client";

import { useEffect, useRef, useState } from "react";

import { AppointmentSummaryView } from "./appointment-summary-view/appointment-summary-view";
import { DoctorDirectoryView } from "./doctor-directory-view/doctor-directory-view";

export function MainViewTabs() {
  const [activeTab, setActiveTab] = useState("directory");
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tabsElement = tabsRef.current;
    if (!tabsElement) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const tabTriggers = tabsElement.querySelectorAll('[role="tab"]');
      const currentIndex = Array.from(tabTriggers).findIndex(
        (tab) => tab === document.activeElement
      );

      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          if (currentIndex < tabTriggers.length - 1) {
            (tabTriggers[currentIndex + 1] as HTMLElement).focus();
          } else {
            (tabTriggers[0] as HTMLElement).focus();
          }
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          if (currentIndex > 0) {
            (tabTriggers[currentIndex - 1] as HTMLElement).focus();
          } else {
            (tabTriggers[tabTriggers.length - 1] as HTMLElement).focus();
          }
          break;
        case "Home":
          e.preventDefault();
          (tabTriggers[0] as HTMLElement).focus();
          break;
        case "End":
          e.preventDefault();
          (tabTriggers[tabTriggers.length - 1] as HTMLElement).focus();
          break;
      }
    };

    tabsElement.addEventListener("keydown", handleKeyDown);

    return () => {
      tabsElement.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleTabActivation = (value: string) => {
    setActiveTab(value);
  };

  const handleTabKeyDown = (e: React.KeyboardEvent, value: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleTabActivation(value);
    }
  };

  return (
    <div className="w-full max-w-screen-md" ref={tabsRef}>
      <div
        role="tablist"
        aria-label="Doctor appointment tabs"
        className="grid w-full grid-cols-2 max-w-[400px] bg-muted text-muted-foreground rounded-lg p-1"
      >
        <button
          role="tab"
          tabIndex={0}
          aria-selected={activeTab === "directory"}
          aria-controls="directory-tab"
          id="directory-tab-trigger"
          className={`flex items-center cursor-pointer justify-center h-9 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "directory"
              ? "bg-background text-foreground shadow-sm"
              : "hover:bg-background/50"
          }`}
          onKeyDown={(e) => handleTabKeyDown(e, "directory")}
          onClick={() => handleTabActivation("directory")}
        >
          Directory
        </button>
        <button
          role="tab"
          tabIndex={0}
          aria-selected={activeTab === "appointments"}
          aria-controls="appointments-tab"
          id="appointments-tab-trigger"
          className={`flex items-center cursor-pointer justify-center h-9 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "appointments"
              ? "bg-background text-foreground shadow-sm"
              : "hover:bg-background/50"
          }`}
          onKeyDown={(e) => handleTabKeyDown(e, "appointments")}
          onClick={() => handleTabActivation("appointments")}
        >
          Appointments
        </button>
      </div>

      <div className="mt-6">
        <div
          role="tabpanel"
          id="directory-tab"
          aria-labelledby="directory-tab-trigger"
          hidden={activeTab !== "directory"}
        >
          {activeTab === "directory" && <DoctorDirectoryView />}
        </div>
        <div
          role="tabpanel"
          id="appointments-tab"
          aria-labelledby="appointments-tab-trigger"
          hidden={activeTab !== "appointments"}
        >
          {activeTab === "appointments" && <AppointmentSummaryView />}
        </div>
      </div>
    </div>
  );
}
