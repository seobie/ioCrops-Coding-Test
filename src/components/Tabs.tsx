import React from "react";
import styled from "styled-components";
import { ITab } from "../interfaces";

const Wrapper = styled.ul`
  ${({ theme }) => theme.flexRowCenter};
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  margin: 5px;
  background-color: #e6f2ff;
`;

const Tab = styled.li`
  ${({ theme }) => theme.flexCenter};
  width: 100px;
  height: 35px;
  padding: 8px;
  margin: 5px 3px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: ${({ isActive }: ITab) => (isActive ? "#007bff" : "#fff")};
  color: ${({ isActive }: ITab) => (isActive ? "#fff" : "#007bff")};
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }: ITab) =>
      isActive ? "#007bff" : "#e9ecef"};
  }
`;

interface IProps {
  keys?: string[];
  myChart: string[];
  updateMyChart: (name: string) => void;
}

export default function Tabs({ keys, myChart, updateMyChart }: IProps) {
  return (
    <Wrapper>
      {keys?.map((el) => (
        <Tab
          key={el}
          isActive={myChart.includes(el)}
          onClick={() => updateMyChart(el)}
        >
          {el}
        </Tab>
      ))}
    </Wrapper>
  );
}
