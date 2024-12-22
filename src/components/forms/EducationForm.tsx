import React from 'react';
import { Education } from '../../types/resume';

interface Props {
  educations: Education[];
  onChange: (educations: Education[]) => void;
}

const EducationForm: React.FC<Props> = ({ educations, onChange }) => {
  const handleAdd = () => {
    onChange([
      ...educations,
      { institution: '', degree: '', startDate: '', endDate: '', grade: '' },
    ]);
  };

  const handleChange = (index: number, field: keyof Education, value: string) => {
    const newEducations = educations.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu
    );
    onChange(newEducations);
  };

  const handleRemove = (index: number) => {
    onChange(educations.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">Education</h3>
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Add Education
        </button>
      </div>

      {educations.map((education, index) => (
        <div key={index} className="p-4 border rounded-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Institution</label>
              <input
                type="text"
                value={education.institution}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Degree</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="month"
                value={education.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="month"
                value={education.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Grade/CGPA</label>
              <input
                type="text"
                value={education.grade}
                onChange={(e) => handleChange(index, 'grade', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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

export default EducationForm;