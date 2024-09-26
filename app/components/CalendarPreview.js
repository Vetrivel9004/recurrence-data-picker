import ReactCalendar from 'react-calendar';
import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function CalendarPreview() {
  const { recurrence } = useRecurrenceStore();

  const calculateRecurrenceDates = () => {
    // Here you can calculate the recurring dates based on the selected options
    // For simplicity, returning an empty array
    return [];
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Calendar Preview</h2>
      <ReactCalendar
        value={new Date(recurrence.startDate)}
        tileClassName={({ date, view }) =>
          calculateRecurrenceDates().includes(date) ? 'bg-blue-500' : null
        }
      />
    </div>
  );
}
