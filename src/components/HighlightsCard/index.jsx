import "./index.css";

import React, { useState } from "react";
import styled from "styled-components";
import {Row, Col} from "react-bootstrap"


const AccordionWrapper = styled.div`
  border: 1px solid #ccc;
  margin: 5px;
`;

const AccordionHeader = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  cursor: pointer;
`;

const Date = styled.div`
  background-color: inherit;
  color: black;
`;

const AccordionContent = styled.div`
  background-color: #f0efef;
  padding: 10px;
  display: ${({ open }) => (open ? "block" : "none")};
`;
const Text = styled.div`
  background-color: inherit;
  color: black;
  display: flex;
  flex-direction: column;`;
const Image = styled.img`
  height: 50%;
  width: 50%;
  margin-left: 10px;
  border-radius: 4px;
  margin-bottom: 10px;`;

const HighlightsCard = ({ title, date, img, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AccordionWrapper>
        <AccordionHeader onClick={toggleAccordion}>
          {date ? <Date className="date">{date}</Date> : null}
          {title}
        </AccordionHeader>
        <AccordionContent open={isOpen}>
       {text ? <Text><div style={{ flex: 1 }}>{text}</div> {img ? <Image src={img} alt="תמונה" className="img" /> : null}</Text> : null}

        
        </AccordionContent>
      </AccordionWrapper>
    </>
  );
};

export default HighlightsCard;
