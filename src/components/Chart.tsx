import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
require("highcharts/modules/exporting")(Highcharts);
require("highcharts/modules/export-data")(Highcharts);

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  height: 100%;
`;

function Chart(props: HighchartsReact.Props) {
  const options: Highcharts.Options = {
    chart: {
      shadow: true,
      height: 500,
      width: 1100,
      zoomType: "xy",
      scrollablePlotArea: {
        minWidth: 500,
        minHeight: 800,
        scrollPositionX: 1,
      },
    },
    xAxis: {
      type: "datetime",
      labels: {
        format: "{value:%Y.%b.%e %H:%M}",
      },
      title: {
        text: "time",
      },
      zoomEnabled: false,
      crosshair: true,
    },
    series: props.dataList,
    rangeSelector: {
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1d",
        },
        {
          type: "day",
          count: 3,
          text: "3d",
        },
        {
          type: "day",
          count: 10,
          text: "10d",
        },
        {
          type: "ytd",
          text: "YTD",
        },
        {
          type: "year",
          count: 1,
          text: "1y",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      selected: 5,
    },
    legend: {
      enabled: true,
      shadow: false,
      borderRadius: 4,
      borderWidth: 1,
    },
    credits: {
      enabled: false,
    },
  };

  return (
    <Wrapper>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        {...props}
        constructorType={"stockChart"}
        allowChartUpdate={true}
      />
    </Wrapper>
  );
}

export default Chart;
