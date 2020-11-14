import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "./components/Chart";
import Chart2 from "./components/Chart2";
import Tabs from "./components/Tabs";
import useFectchData from "./hooks/useFetchData";

const MainWrapper = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
`;

const ChartContainer = styled.div`
  ${({ theme }) => theme.flexColumn};
  width: 70%;
  min-height: 465px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #acacac;
  border-radius: 8px;

  & > p {
    color: #afafaf;
  }
`;

export default function Main() {
  const [myChart, setMyChart] = useState<string[]>([]);
  const [dataList, setDataList] = useState<any>();
  const [keys, setKeys] = useState<string[]>();
  const data = useFectchData("data/data.json");

  useEffect(() => {
    let tempArr: any = [];
    keys?.map((el: string) => {
      const obj = {
        type: "line",
        name: el,
        data: data.map((element: any) => [
          Date.parse(element.time),
          element[el],
        ]),
      };
      return (tempArr = [...tempArr, obj]);
    });
    setDataList(tempArr);
  }, [keys]);

  useEffect(() => {
    data[0] &&
      setKeys(
        Object.keys(data[0])
          .filter((el) => el !== "time")
          .sort()
      );
  }, [data]);

  const updateMyChart = (name: string) => {
    myChart.includes(name)
      ? setMyChart((prev: string[]) => prev.filter((el) => el !== name))
      : setMyChart((prev: string[]) => [...prev, name]);
  };

  return (
    <MainWrapper>
      <ChartContainer>
        <header>ioCrops Coding Test</header>
        <Chart dataList={dataList} />
        <p>
          위의 데이터 이름을 클릭해서 일시적으로 원하는 데이터만 볼 수 있습니다.
        </p>
      </ChartContainer>
      <ChartContainer>
        <header>My charts</header>
        <Tabs keys={keys} myChart={myChart} updateMyChart={updateMyChart} />
        <p>버튼 눌러서 내 차트에 넣기</p>
        {myChart.map((chart: string) => {
          return (
            <Chart2
              key={chart}
              props={chart}
              data={data}
              updateMyChart={updateMyChart}
            />
          );
        })}
      </ChartContainer>
    </MainWrapper>
  );
}
