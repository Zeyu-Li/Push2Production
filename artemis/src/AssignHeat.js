import React from 'react';
import ReactDOM from 'react-dom';
import HeatMap from 'react-heatmap-grid';

export default function AssignHeat() {

  // Temporary for working with the dummy data.
  const evData = [
    {
      day: "2015-03-25",
      events: [
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" }
      ]
    },
    
    {
      day: "2015-04-25",
      events: [
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" },
        { event: "Midterm", description: "A gross midterm.", time: "4:00 PM", duration: "1 hour" }
      ]
    },
  ];

  // Get all days from the data.
  const days = new Array(evData.length);
  for (var i = 0; i < evData.length; i++) days[i] = new Date(evData[i].day);
  
  // Get the range of days given the data.
  const firstDay = new Date(Math.min.apply(null, days));
  const lastDay = new Date(Math.max.apply(null, days));
  const numDays = (lastDay - firstDay) / (3600*24*1000);

  const xLen = Math.ceil(numDays / 3), yLen = Math.ceil(numDays / xLen);

  // const data = new Array(10);

  const xLabels = new Array(xLen).fill(0).map((_, i) => `${i}`);
 
  // Display only even labels
  const xLabelsVisibility = new Array(24)
    .fill(0)
    .map((_, i) => (i % 2 === 0 ? true : false));
  
    const yLabels = new Array(yLen).fill(0).map((_, i) => `${i}`);
  const data = new Array(yLen)
    .fill(0)
    .map(() =>
      new Array(xLen).fill(0).map(() => Math.floor(Math.random() * 100))
  );
 
  
  return (
    <HeatMap
    xLabels={xLabels}
    yLabels={yLabels}
    xLabelsLocation={"bottom"}
    xLabelsVisibility={xLabelsVisibility}
    xLabelWidth={50}
    data={data}
    squares
    //onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
    cellStyle={(background, value, min, max, data, x, y) => ({
      background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
      fontSize: "11px",
    })}
    //cellRender={value => value && `${value}%`}
    title={(value, unit) => `${value}`}
  />
  )
}