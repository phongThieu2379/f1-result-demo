import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  I_Lap_By_Year_Data,
  lapByYearTable,
} from "../../../../Resource/Data/FastesLap/lapByYearTable";
import { Table } from "antd";

export default function SearchYearFastestLap() {
  let { year } = useParams();
  let index = lapByYearTable.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Lap_By_Year_Data[]>([]);
  useEffect(() => {
    let cloneTable = lapByYearTable[index].lapData.map((item) => {
      return {
        ...item,
        driverName: `${item.driverFirstName} ${item.driverLastName} (${item.abbreviation})`,
      };
    });
    
    setTableData(cloneTable);
  }, [year]);
  const driverCount: any = {};
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

  function compareDriverNames(a: any, b: any) {
    const driverNameA = `${a.driverFirstName} ${a.driverLastName}`;
    const driverNameB = `${b.driverFirstName} ${b.driverLastName}`;
    return driverNameA.localeCompare(driverNameB);
  }

  const columns = [
    {
      title: "Grand Prix",
      dataIndex: "grandPrix",
      key: "grandPrix",
    },
    {
      title: "Driver",
      dataIndex: "driverName",
      key: "driverName",
    },
    {
      title: "Car",
      dataIndex: "car",
      key: "car",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Achievement",
      dataIndex: "appearances",
      key: "appearances",
    },
  ];

 
  return (
    <div>
      <h1 className="pb-10 font-semibold text-5xl	 ">
        {year} DHL FASTEST LAP AWARD
      </h1>
      <div className="flex flex-row">
        <h1 className="font-bold">Winner : </h1>
        <div className="ml-2">
          <h1>{tableData[0]?.driverFirstName} {tableData[0]?.driverLastName} </h1>
          <h1>{tableData[0]?.appearances} times fastest lap </h1>
        </div>
        
      </div>
      <div className="my-4">
      Every Formula 1 driver is fast, but is the race winner really the fastest? Since 2007 DHL has defined a new standard of speed with the 'DHL Fastest Lap Award'. One driver sets the fastest lap at each race - the award will go to the man who sets the most over the season. To win will require pure speed - something DHL, as the world's leading logistics provider and Official Logistics Partner of Formula 1, uses to achieve its goals, shortening international routes, facilitating global trade and making the world a smaller place.
      </div>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
}
