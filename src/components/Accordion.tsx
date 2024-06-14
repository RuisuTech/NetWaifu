import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded mb-4 flex flex-col w-[1200px]">
      <div
        className="bg-[#222] hover:bg-[#333] text-white p-4 cursor-pointer flex justify-between"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium">{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className=" p-4 bg-[#222] text-white text-left">{content}</div>}
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="flex mx-auto flex-col">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
