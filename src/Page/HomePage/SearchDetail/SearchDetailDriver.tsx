import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../..";
import { driverDataTable } from "../../../Resource/Data/DriverData/driverDataTable";
import { I_DataDriver } from "../../../Resource/Interface/interfaceData";
import { Table } from "antd";

export default function SearchDetailDriver() {
  let { detail } = useParams();
  let { selectedYear } = useSelector((state: RootState) => {
    return state.selectionSlice;
  });
  let index = driverDataTable.findIndex((item) => {
    return item.year == selectedYear;
  });
  // data : data at the index year
  let data = driverDataTable[index].data;

  // tableIndex at the id from params (choose driver)
  let tableIndex = data.findIndex((item) => {
    return item.driver == detail;
  });
  let [tableData, setTableData] = useState<I_DataDriver[]>([]);
  useEffect(() => {
    let cloneTable = data[tableIndex].data;
    setTableData(cloneTable);
  }, [detail]);

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
      title: "Car",
      dataIndex: "car",
      key: "car",
    },
    {
      title: "Race Position",
      dataIndex: "racePosition",
      key: "racePosition",
    },
    {
      title: <abbr title="Points">PTS</abbr>,
      dataIndex: "points",
      key: "points",
    },
  ];
  let driverName = detail?.replace("-", " ");
  return (
    <div>
      <h1 className="pb-10 font-semibold text-5xl	 ">
        {selectedYear} Driver Standings :{" "}
        <span className="capitalize">{driverName}</span>
      </h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
}
