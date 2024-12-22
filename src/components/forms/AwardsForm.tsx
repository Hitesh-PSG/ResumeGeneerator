import React from 'react';
import { Award } from '../../types/resume';

interface Props {
  awards: Award[];
  onChange: (awards: Award[]) => void;
}

const AwardsForm: React.FC<Props> = ({ awards, onChange }) => {
  const handleAdd = () => {
    onChange([...awards, { title: '', date: '', description: '' }]);
  };

  const handleChange = (index: number, field: keyof Award, value: string) => {
    const newAwards = awards.map((award, i) =>
      i === index ? { ...award, [field]: value } : award
    );
    onChange(newAwards);
  };

  const handleRemove = (index: number) => {
    onChange(awards.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">Awards & Achievements</h3>
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Add Award
        </button>
      </div>

      {awards.map((award, index) => (
        <div key={index} className="p-4 border rounded-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={award.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="month"
                value={award.date}
                onChange={(e) => handleChange(index, 'date', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={award.description}
                onChange={(e) => handleChange(index, 'description', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={2}
                required
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="text-red-600 hover:text-red-800"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default AwardsForm;