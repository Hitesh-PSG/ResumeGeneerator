import React from 'react';
import { ResumeData } from '../types/resume';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

interface Props {
  data: ResumeData;
}

const ResumePreview: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">{data.personalInfo.fullName}</h1>
        <div className="flex justify-center space-x-4 text-gray-600 flex-wrap">
          <a href={`mailto:${data.personalInfo.email}`} className="flex items-center hover:text-indigo-600">
            <Mail className="w-4 h-4 mr-2" />
            {data.personalInfo.email}
          </a>
          <span>|</span>
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            {data.personalInfo.phone}
          </span>
          {data.personalInfo.github && (
            <>
              <span>|</span>
              <a href={data.personalInfo.github} className="flex items-center hover:text-indigo-600">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </>
          )}
          {data.personalInfo.linkedin && (
            <>
              <span>|</span>
              <a href={data.personalInfo.linkedin} className="flex items-center hover:text-indigo-600">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </>
          )}
        </div>
      </div>

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h3 className="font-bold">{edu.institution}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <p className="text-indigo-600">{edu.startDate} - {edu.endDate}</p>
                  <p className="font-bold">Grade: {edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Technical Skills</h2>
        <div className="space-y-2">
          <p><span className="font-bold">Languages:</span> {data.skills.languages.join(', ')}</p>
          <p><span className="font-bold">Tools:</span> {data.skills.tools.join(', ')}</p>
          <p><span className="font-bold">Coursework:</span> {data.skills.coursework.join(', ')}</p>
        </div>
      </section>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Projects</h2>
          <div className="space-y-6">
            {data.projects.map((project, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-indigo-600">{project.date}</p>
                </div>
                {(project.repoLink || project.liveLink) && (
                  <div className="mb-2">
                    {project.repoLink && (
                      <a href={project.repoLink} className="text-blue-600 hover:underline mr-4">Repo Link</a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} className="text-blue-600 hover:underline">Live Link</a>
                    )}
                  </div>
                )}
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Awards */}
      {data.awards.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Awards & Achievements</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {data.awards.map((award, index) => (
              <li key={index}>
                <span className="font-bold">{award.title}</span> ({award.date}) - {award.description}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;