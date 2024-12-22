import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg my-8 rounded-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Hitesh P</h1>
        <div className="flex justify-center space-x-4 text-gray-600">
          <a href="mailto:hiteshpg24@gmail.com" className="flex items-center hover:text-indigo-600">
            <Mail className="w-4 h-4 mr-2" />
            hiteshpg24@gmail.com
          </a>
          <span>|</span>
          <span className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            8088511727
          </span>
          <span>|</span>
          <a href="https://github.com/Hitesh-PSG" className="flex items-center hover:text-indigo-600">
            <Github className="w-4 h-4 mr-2" />
            github/Hitesh-PSG
          </a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/hitesh-p-aa55662a3/" className="flex items-center hover:text-indigo-600">
            <Linkedin className="w-4 h-4 mr-2" />
            linkedin/Hitesh-PSG
          </a>
        </div>
      </div>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Education</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">East Point College Of Engineering and Technology, Bengaluru</h3>
              <p className="text-gray-600">B.E. in Computer Science and Engineering</p>
            </div>
            <div className="text-right">
              <p className="text-indigo-600">Nov 2022-Aug 2026</p>
              <p className="font-bold">CGPA: 8.8</p>
            </div>
          </div>
          {/* Add other education entries similarly */}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Technical Skills</h2>
        <div className="space-y-2">
          <p><span className="font-bold">Languages:</span> C, C++, HTML, CSS, JavaScript, SQL, Python Basis</p>
          <p><span className="font-bold">Developer Tools:</span> Git, GitHub, VScode, PowerBI</p>
          <p><span className="font-bold">Coursework:</span> Principles of Programming Language, Data Structures & Algorithms, Operating System, OOPs, DBMS, System Design</p>
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Project Work</h2>
        <div className="space-y-6">
          {/* Credit-Worthy Project */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">Credit-Worthy</h3>
              <p className="text-indigo-600">November 2024</p>
            </div>
            <div className="mb-2">
              <a href="https://github.com/Hitesh-PSG/Credit-Worthy" className="text-blue-600 hover:underline mr-4">Repo Link</a>
              <a href="https://creditworthy.vercel.app/" className="text-blue-600 hover:underline">Live Link</a>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Developed 'CreditWorthy' for assessing creditworthiness of nano-entrepreneurs using React, Python, Scikit-Learn, Node.js, Express.js, Clerk Auth, and Streamlit.</li>
              <li>CreditWorthy is a web app that uses AI to assess the creditworthiness of unbanked nano-entrepreneurs, enabling access to formal credit and supporting business growth.</li>
              <li>Contributed to back-end development using Python and Streamlit to enhance user interface functionality and overall user experience.</li>
            </ul>
          </div>
          {/* Add other projects similarly */}
        </div>
      </section>

      {/* Awards and Certificates */}
      <section>
        <h2 className="text-2xl font-bold text-indigo-900 border-b-2 border-indigo-900 mb-4">Awards and Certificates</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Tackled and completed 100+ DSA challenges across platforms like <span className="font-bold">LeetCode, GFG and Code360</span></li>
          <li><span className="font-bold">National Innovation Challenge (November 2024):</span> Emerged as the 2nd runner-up in Codethon</li>
          <li><span className="font-bold">National-Level Hackathon (July 2024):</span> Secured the 2nd runner-up position among 400+ teams</li>
          {/* Add other awards similarly */}
        </ul>
      </section>
    </div>
  );
};

export default Resume;