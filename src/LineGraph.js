
import { useState, useEffect } from 'react'
import { CategoryScale, Chart, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'react-chartjs-2';
import numeral from "numeral";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement)
const options = {
  legend: {
    display: false,
  },
  elements: {
    piont: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll"
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },

};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
      if (lastDataPoint) {
          let newDataPoint = {
              x: date,
              y: data[casesType][date] - lastDataPoint,
          };
          chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
  };
  return chartData;
}

const LineGraph = ({caseType = "cases", ...props}) => {
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
            .then(response => {
                return response.json();
            })
            .then((data) => {
              let chartData = buildChartData(data, caseType);
              setData(chartData);
        });
     };

      fetchData(); 
    }, [caseType]); 

  return (
    <div className={props.className}>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
                {
                    backgroundColor: "rgba(204, 16, 52, 0.5)",
                    borderColor: "#CC1034",
                    data:data,
                }
            ]
          }}
         />
      )}
    </div>
  )
}

export default LineGraph