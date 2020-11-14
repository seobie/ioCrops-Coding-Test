import React, { useState, useEffect } from "react";
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

function Chart2(props: HighchartsReact.Props) {
  const data = props.data;
  const [prop, setProp] = useState<string | HighchartsReact.Props>("");

  useEffect(() => {
    setProp(props.props);
  }, [props]);

  const options: Highcharts.Options = {
    chart: {
      shadow: true,
      height: null,
      width: 1100,
      zoomType: "xy",
      scrollablePlotArea: {
        minWidth: 500,
        minHeight: 800,
        scrollPositionX: 1,
      },
    },
    title: {
      text: prop as string,
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
    series: [
      {
        type: "line",
        name: prop as string,
        data: data?.map((el: any) => {
          let key: string = prop as string;
          return [Date.parse(el.time), el[key]];
        }),
      },
    ],
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
    exporting: {
      csv: {},
    },
    legend: {
      enabled: true,
      shadow: false,
      borderRadius: 4,
      borderWidth: 1,
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
            yAxis: {
              labels: {
                align: "left",
                x: 0,
                y: -5,
              },
              title: {
                text: null,
              },
            },
            credits: {
              enabled: false,
            },
          },
        },
      ],
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

export default Chart2;
