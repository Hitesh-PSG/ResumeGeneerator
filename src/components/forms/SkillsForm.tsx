import React from 'react';
import { Skills } from '../../types/resume';

interface Props {
  data: Skills;
  onChange: (data: Skills) => void;
}

const SkillsForm: React.FC<Props> = ({ data, onChange }) => {
  const handleChange = (field: keyof Skills, value: string) => {
    onChange({
      ...data,
      [field]: value.split(',').map((item) => item.trim()),
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-700">Skills</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Programming Languages (comma-separated)
          </label>
          <input
            type="text"
            value={data.languages.join(', ')}
            onChange={(e) => handleChange('languages', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g., JavaScript, Python, Java"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tools & Technologies (comma-separated)
          </label>
          <input
            type="text"
            value={data.tools.join(', ')}
            onChange={(e) => handleChange('tools', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g., Git, Docker, AWS"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Relevant Coursework (comma-separated)
          </label>
          <input
            type="text"
            value={data.coursework.join(', ')}
            onChange={(e) => handleChange('coursework', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="e.g., Data Structures, Algorithms, Operating Systems"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;