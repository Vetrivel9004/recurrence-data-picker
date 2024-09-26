import create from 'zustand';

export const useRecurrenceStore = create((set) => ({
  recurrence: {
    pattern: 'daily',
    startDate: '',
    endDate: '',
  },
  setRecurrence: (field, value) =>
    set((state) => ({
      recurrence: {
        ...state.recurrence,
        [field]: value,
      },
    })),
}));
