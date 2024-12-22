import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import PersonalInfoForm from '../components/forms/PersonalInfoForm';
import EducationForm from '../components/forms/EducationForm';
import SkillsForm from '../components/forms/SkillsForm';
import ProjectForm from '../components/forms/ProjectForm';
import AwardsForm from '../components/forms/AwardsForm';
import ResumePreview from '../components/ResumePreview';

const initialData: ResumeData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
  },
  education: [],
  skills: {
    languages: [],
    tools: [],
    coursework: [],
  },
  projects: [],
  awards: [],
};

const ResumeBuilder: React.FC = () => {
  const [data, setData] = useState<ResumeData>(initialData);
  const [showPreview, setShowPreview] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  if (showPreview) {
    return (
      <div className="container mx-auto py-8">
        <button
          onClick={() => setShowPreview(false)}
          className="mb-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Back to Edit
        </button>
        <ResumePreview data={data} />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Resume Builder</h1>
      
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        <PersonalInfoForm
          data={data.personalInfo}
          onChange={(personalInfo) => setData({ ...data, personalInfo })}
        />

        <EducationForm
          educations={data.education}
          onChange={(education) => setData({ ...data, education })}
        />

        <SkillsForm
          data={data.skills}
          onChange={(skills) => setData({ ...data, skills })}
        />

        <ProjectForm
          projects={data.projects}
          onChange={(projects) => setData({ ...data, projects })}
        />

        <AwardsForm
          awards={data.awards}
          onChange={(awards) => setData({ ...data, awards })}
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Preview Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResumeBuilder;