import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  I_Race_Year_Data,
  raceByYearTable,
} from "../../../../Resource/Data/RaceData/raceByYearTable";
import { Table } from "antd";

export default function SearchYearRace() {
  let { year } = useParams();

  let index = raceByYearTable.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Race_Year_Data[]>([]);
  useEffect(() => {
    let cloneTable = raceByYearTable[index].raceData.map((item) => {
      return {
        ...item,
        winner: `${item.winnerFirstName} ${item.winnerLastName} (${item.winnerAbbreviation})`,
      };
    });

    setTableData(cloneTable);
  }, [year]);

  const columns = [
    {
      title: "Grand Prix",
      dataIndex: "grandPrix",
      key: "grandPrix",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Winner",
      dataIndex: "winner",
      key: "winner",
    },
    {
      title: "Car",
      dataIndex: "car",
      key: "car",
    },
    {
      title: "Laps",
      dataIndex: "laps",
      key: "laps",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },
  ];
  return (
    <div>
      <h1 className="pb-10 font-semibold text-5xl	 ">{year} RACE RESULT</h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
}
