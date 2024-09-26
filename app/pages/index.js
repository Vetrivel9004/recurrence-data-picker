import RecurrenceOptions from '../components/RecurrenceOptions';
import DatePicker from '../components/DatePicker';
import CalendarPreview from '../components/CalendarPreview';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Recurring Options</h1>
      <div className="w-full max-w-md">
        <RecurrenceOptions />
        <DatePicker />
        <CalendarPreview />
      </div>
    </div>
  );
}
