import { useRecurrenceStore } from '../store/useRecurrenceStore';

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence } = useRecurrenceStore();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Recurrence Pattern</h2>
      <select
        className="p-2 border rounded"
        value={recurrence.pattern}
        onChange={(e) => setRecurrence('pattern', e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
}
