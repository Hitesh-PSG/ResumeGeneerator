import React from 'react';
import { Project } from '../../types/resume';

interface Props {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

const ProjectForm: React.FC<Props> = ({ projects, onChange }) => {
  const handleAdd = () => {
    onChange([
      ...projects,
      { title: '', date: '', description: [''], repoLink: '', liveLink: '' },
    ]);
  };

  const handleChange = (index: number, field: keyof Project, value: any) => {
    const newProjects = projects.map((proj, i) =>
      i === index ? { ...proj, [field]: value } : proj
    );
    onChange(newProjects);
  };

  const handleDescriptionChange = (projectIndex: number, descIndex: number, value: string) => {
    const newProjects = projects.map((proj, i) => {
      if (i === projectIndex) {
        const newDesc = [...proj.description];
        newDesc[descIndex] = value;
        return { ...proj, description: newDesc };
      }
      return proj;
    });
    onChange(newProjects);
  };

  const handleAddDescription = (projectIndex: number) => {
    const newProjects = projects.map((proj, i) =>
      i === projectIndex
        ? { ...proj, description: [...proj.description, ''] }
        : proj
    );
    onChange(newProjects);
  };

  const handleRemoveDescription = (projectIndex: number, descIndex: number) => {
    const newProjects = projects.map((proj, i) => {
      if (i === projectIndex) {
        const newDesc = proj.description.filter((_, j) => j !== descIndex);
        return { ...proj, description: newDesc };
      }
      return proj;
    });
    onChange(newProjects);
  };

  const handleRemove = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-700">Projects</h3>
        <button
          type="button"
          onClick={handleAdd}
          className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
        >
          Add Project
        </button>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="p-4 border rounded-md space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Title</label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="month"
                value={project.date}
                onChange={(e) => handleChange(index, 'date', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Repository Link (optional)</label>
              <input
                type="url"
                value={project.repoLink}
                onChange={(e) => handleChange(index, 'repoLink', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Live Link (optional)</label>
              <input
                type="url"
                value={project.liveLink}
                onChange={(e) => handleChange(index, 'liveLink', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Description Points</label>
            {project.description.map((desc, descIndex) => (
              <div key={descIndex} className="flex gap-2">
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => handleDescriptionChange(index, descIndex, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveDescription(index, descIndex)}
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddDescription(index)}
              className="text-indigo-600 hover:text-indigo-800"
            >
              Add Description Point
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="text-red-600 hover:text-red-800"
          >
            Remove Project
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProjectForm;