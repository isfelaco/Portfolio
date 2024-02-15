import React from "react";
import { Section } from "../components/Section";
import { styled } from "styled-components";
import { Row } from "../SharedStyles";
import courses from "../data/courses.json";

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow: auto;
  gap: 20px;
`;

const GridBox = styled.div`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  overflow-y: auto;
  li {
    text-align: left;
  }
  display: flex;
  flex-direction: column;
  flex: 1 0 calc(33% - 20px);
  height: calc(50% - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Coursework() {
  return (
    <Section title="Course Work">
      <GridContainer>
        {courses.map((item: any, index: number) => (
          <GridBox key={index}>
            <h2>{item.title}</h2>
            <ul>
              {item.description.map((desc: any, idx: number) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
            {item.link && (
              <a href={item.link} target="_blank">
                Link to Repository
              </a>
            )}
          </GridBox>
        ))}
      </GridContainer>
    </Section>
  );
}
