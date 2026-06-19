'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface CurriculumAccordionProps {
  syllabus: string[];
}

export default function CurriculumAccordion({ syllabus }: CurriculumAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Optional mock descriptions for syllabus items to show expanded details
  const getSubTopicDesc = (topic: string, index: number) => {
    const defaultDescs = [
      "Gain an in-depth understanding of the baseline modules, tools, and direct industry applications. Learn the structural roadmap for this segment.",
      "Explore standard blueprints and optimization frameworks. Understand strategic setups, configuration details, and professional auditing guidelines.",
      "Get hands-on experience executing core workflows. Learn from live labs, custom templates, and direct case study applications.",
      "Unlock advanced automation flows and predictive scaling strategies. Discover how to leverage next-gen tools to accelerate production volume."
    ];
    return defaultDescs[index % defaultDescs.length];
  };

  return (
    <div className="curriculum-list-new">
      {syllabus.map((item, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div 
            key={idx} 
            className={`curriculum-accordion-item-new ${isOpen ? 'open' : ''}`}
          >
            <div 
              className="curriculum-accordion-header-new" 
              onClick={() => toggleAccordion(idx)}
            >
              <div className="curriculum-header-left-new">
                <div className="curriculum-number-circle-new">
                  {idx + 1}
                </div>
                <span className="curriculum-title-new">{item}</span>
              </div>
              <ChevronDown size={18} className="curriculum-chevron-new" />
            </div>
            
            {isOpen && (
              <div className="curriculum-content-expanded-new">
                <p>{getSubTopicDesc(item, idx)}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
