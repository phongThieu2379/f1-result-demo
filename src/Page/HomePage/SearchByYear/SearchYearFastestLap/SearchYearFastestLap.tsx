import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { I_Lap_By_Year_Data, lapByYearTable } from "../../../../Resource/Data/FastesLap/lapByYearTable";

export default function SearchYearFastestLap() {
  let { year } = useParams();
  let index = lapByYearTable.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Lap_By_Year_Data[]>([]);
  useEffect(() => {
    setTableData(lapByYearTable[index].lapData);
  }, [year]);
  const driverCount:any = {};
  tableData.forEach((lap) => {
  const { driverFirstName, driverLastName } = lap;
  const driverFullName = driverFirstName + " " + driverLastName;
  if (driverCount[driverFullName]) {
    driverCount[driverFullName]++;
  } else {
    driverCount[driverFullName] = 1;
  }
});

// Add the count as a new key to each lap data object
tableData.forEach((lap) => {
  const { driverFirstName, driverLastName } = lap;
  const driverFullName = driverFirstName + " " + driverLastName;
  lap.appearances = driverCount[driverFullName];
});

// Sort the lapData array based on the count in descending order
tableData.sort((a, b) => {
  if (a.appearances === undefined && b.appearances === undefined) {
    // Sort by driver name if appearances are undefined for both laps
    return compareDriverNames(a, b);
  } else if (a.appearances === undefined) {
    // Put laps with undefined appearances at the end
    return 1;
  } else if (b.appearances === undefined) {
    // Put laps with undefined appearances at the end
    return -1;
  } else if (a.appearances === b.appearances) {
    // Sort by driver name if appearances are equal
    return compareDriverNames(a, b);
  } else {
    // Sort by appearances in descending order
    return b.appearances - a.appearances;
  }
});

function compareDriverNames(a:any, b:any) {
  const driverNameA = `${a.driverFirstName} ${a.driverLastName}`;
  const driverNameB = `${b.driverFirstName} ${b.driverLastName}`;
  return driverNameA.localeCompare(driverNameB);
}

console.log(tableData);
  const renderTable = () => {
    return tableData.map((item) => {
      return (
        <tr>
          <td>{item.grandPrix}</td>
          <td>
            {item.driverFirstName} {item.driverLastName} (
            {item.abbreviation})
          </td>
          <td>{item.car}</td>
        
          <td>{item.time}</td>
          <td>{item.appearances}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <thead>
        <tr>
          <th>Grand Prix</th>
          <th>Driver</th>        
          <th>Car</th>
          <th>Time</th>
          <th>Achievement</th>
          

        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </div>
  )
}
