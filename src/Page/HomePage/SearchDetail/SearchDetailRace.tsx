import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../..";
import { raceByLocationTable } from "../../../Resource/Data/RaceData/raceByLocationTable";
import { I_DataRace } from "../../../Resource/Interface/interfaceData";
import { Table } from "antd";

export default function SearchDetailRace() {
  let { detail } = useParams();
  let { selectedYear } = useSelector((state: RootState) => {
    return state.selectionSlice;
  });
  let index = raceByLocationTable.findIndex((item) => {
    return item.year == selectedYear;
  });
  // data : data at the index year
  let data = raceByLocationTable[index].data;

  // tableIndex at the id from params (choos race)
  let tableIndex = data.findIndex((item) => {
    return item.locationId == detail;
  });
  let [tableData, setTableData] = useState<I_DataRace[]>([]);
  useEffect(() => {
    let cloneTable = data[tableIndex].data;
    setTableData(cloneTable);
  }, [detail]);

  const columns = [
    {
      title: <abbr title="Position">POS</abbr>,
      dataIndex: "pos",
      key: "pos",
    },
    {
      title: "Driver",
      dataIndex: "driver",
      key: "driver",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
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
    {
      title: <abbr title="Points">PTS</abbr>,
      dataIndex: "points",
      key: "points",
    },
  ];
  return (
    <div>
      <h1 className="pb-10 font-semibold text-4xl	 ">FORMULA 1 <span className="uppercase">{data[tableIndex].location}</span> GRAND PRIX 2023 - RACE RESULT</h1>

      <Table dataSource={tableData} columns={columns} />
    </div>
  );
}
