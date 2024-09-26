import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function DatePicker() {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Date Range</h2>
      <div>
        <label className="mr-2">Start Date: </label>
        <input
          type="date"
          value={recurrence.startDate}
          onChange={(e) => setRecurrence('startDate', e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div className="mt-4">
        <label className="mr-2">End Date (optional): </label>
        <input
          type="date"
          value={recurrence.endDate}
          onChange={(e) => setRecurrence('endDate', e.target.value)}
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
}
