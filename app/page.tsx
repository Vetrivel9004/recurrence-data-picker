"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [recurrence, setRecurrence] = useState('daily');
  const [customRecurrence, setCustomRecurrence] = useState(1);

  const handleRecurrenceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRecurrence(e.target.value);
  };

  const handleCustomRecurrenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomRecurrence(Number(e.target.value));
  };

  const generateRecurrenceDates = () => {
    if (!startDate) return [];
    
    const dates = [];
    let currentDate = new Date(startDate);

    for (let i = 0; i < 5; i++) {
      switch (recurrence) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + customRecurrence);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + customRecurrence * 7);
          break;
        case 'monthly':
          currentDate.setMonth(currentDate.getMonth() + customRecurrence);
          break;
        case 'yearly':
          currentDate.setFullYear(currentDate.getFullYear() + customRecurrence);
          break;
        default:
          break;
      }
      dates.push(new Date(currentDate));
    }
    return dates;
  };

  const recurringDates = generateRecurrenceDates();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
          Recurrence Date Picker
        </h1>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Start Date
          </label>
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full border-2 border-blue-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              dateFormat="MMMM d, yyyy"
            />
            <span className="absolute top-2 right-3 text-blue-500">
              <FaCalendarAlt size={20} />
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Recurrence Pattern
          </label>
          <select
            value={recurrence}
            onChange={handleRecurrenceChange}
            className="w-full border-2 border-blue-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Every X {recurrence}
          </label>
          <input
            type="number"
            value={customRecurrence}
            onChange={handleCustomRecurrenceChange}
            min="1"
            className="w-full border-2 border-blue-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Recurring Dates Preview
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            {recurringDates.map((date, index) => (
              <li key={index} className="text-blue-600 font-medium">
                {format(date, 'MMMM d, yyyy')}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
