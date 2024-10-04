"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { addDays } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-day-picker/dist/style.css";

const CalendarDropdown = () => {
  const [selectedDates, setSelectedDates] = useState({ from: null, to: null });
  const [viewMode, setViewMode] = useState("dates");
  const [flexibleRange, setFlexibleRange] = useState(1);

  const NavButton = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="p-1 transition-colors rounded-full hover:bg-gray-100"
    >
      {children}
    </button>
  );

  const customComponents = {
    IconLeft: () => <ChevronLeft className="w-4 h-4 text-gray-600" />,
    IconRight: () => <ChevronRight className="w-4 h-4 text-gray-600" />,
    NavButton: NavButton,
  };

  const flexibleRanges = [
    { days: 1, label: "± 1 day" },
    { days: 2, label: "± 2 days" },
    { days: 3, label: "± 3 days" },
    { days: 7, label: "± 7 days" },
    { days: 14, label: "± 14 days" },
  ];

  // Custom modifier styles for different date states
  const modifiersStyles = {
    range_start: {
      color: "white",
      backgroundColor: "#0051FE",
      borderRadius: "50%",
    },
    range_end: {
      color: "white",
      backgroundColor: "#0051FE",
      borderRadius: "50%",
    },
    range_middle: {
      backgroundColor: "#F7F7F7", // Light background for dates in range
      borderRadius: "0",
    },
  };

  const css = `
    .rdp {
      --rdp-cell-size: 40px;
      --rdp-accent-color: #0051FE;
      --rdp-background-color: #f7f7f7;
      margin: 0;
    }
    .rdp-month {
      background-color: white;
    }
    .rdp-day_range_start,
    .rdp-day_range_end {
      background-color: #0051FE !important;
      color: white !important;
      border-radius: 50%;
      font-weight: 600;
    }
    .rdp-day_range_middle {
      background-color: #F7F7F7 !important;
      color: black !important;
    }
    .rdp-day_range_middle:hover {
      background-color: #EFEFEF !important;
    }
    .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
      background-color: #EFEFEF;
    }
    .rdp-day {
      height: 40px;
      width: 40px;
      font-size: 14px;
    }
    .rdp-head_cell {
      font-size: 12px;
      font-weight: 600;
      color: #666;
    }
    .rdp-caption {
      padding: 0 0 16px 0;
    }
    .rdp-caption_label {
      font-size: 16px;
      font-weight: 600;
      color: #222;
    }
    .rdp-cell {
      padding: 0;
    }
    .rdp-tbody {
      border-collapse: separate;
      border-spacing: 2px;
    }
  `;

  return (
    <div className="absolute left-1/2 -translate-x-1/2 w-[850px] bg-white rounded-2xl shadow-xl border p-6 z-50 top-[calc(100%+24px)]">
      <style>{css}</style>

      {/* View Mode Tabs */}
      <div className="flex gap-2 mb-6">
        {["Dates", "Months", "Flexible"].map((mode) => (
          <button
            key={mode}
            onClick={() => setViewMode(mode.toLowerCase())}
            className={`px-6 py-2 text-sm font-medium rounded-full transition-colors
              ${
                viewMode === mode.toLowerCase()
                  ? "bg-gray-100"
                  : "hover:bg-gray-50"
              }`}
          >
            {mode}
          </button>
        ))}
      </div>

      {viewMode === "dates" && (
        <div className="flex justify-center gap-8">
          <DayPicker
            mode="range"
            selected={selectedDates}
            onSelect={setSelectedDates}
            numberOfMonths={2}
            components={customComponents}
            modifiersStyles={modifiersStyles}
            showOutsideDays
            defaultMonth={new Date()}
          />
        </div>
      )}

      {viewMode === "months" && (
        <div className="flex justify-center">
          <DayPicker
            mode="range"
            selected={selectedDates}
            onSelect={setSelectedDates}
            numberOfMonths={2}
            components={customComponents}
            modifiersStyles={modifiersStyles}
            captionLayout="dropdown-buttons"
            fromYear={2024}
            toYear={2025}
          />
        </div>
      )}

      {viewMode === "flexible" && (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Stay for a week</h3>
          <div className="flex flex-wrap gap-2">
            {flexibleRanges.map(({ days, label }) => (
              <button
                key={days}
                onClick={() => setFlexibleRange(days)}
                className={`px-4 py-2 rounded-full border transition-colors
                  ${
                    flexibleRange === days
                      ? "border-black bg-gray-100"
                      : "border-gray-300 hover:border-black"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-6 mt-6 border-t">
        <button
          onClick={() => setSelectedDates({ from: null, to: null })}
          className="text-sm font-medium underline hover:no-underline"
        >
          Clear dates
        </button>
        <button className="px-6 py-3 bg-[#FF385C] text-white rounded-lg font-medium hover:bg-[#FF385C]/90 transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CalendarDropdown;
