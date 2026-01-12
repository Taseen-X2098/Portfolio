
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group py-12 border-b border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-8 hover:bg-gray-50/50 transition-colors px-4 md:px-0">
      <div className="md:col-span-1">
        <span className="text-sm font-medium text-gray-400 font-mono tracking-tighter">
          /{project.id}
        </span>
      </div>
      
      <div className="md:col-span-4">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 italic editorial-serif text-lg">
          {project.subtitle}
        </p>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-widest bg-black text-white px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="md:col-span-5 flex flex-col justify-center">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2">Context</p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            {project.context}
          </p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-2">The Win</p>
          <p className="text-gray-900 font-medium leading-relaxed italic editorial-serif">
            "{project.win}"
          </p>
        </div>
      </div>

      <div className="md:col-span-2 flex flex-col justify-end items-start md:items-end">
        {project.links.map(link => (
          <a 
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:text-gray-500 transition-colors mb-2 last:mb-0"
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
