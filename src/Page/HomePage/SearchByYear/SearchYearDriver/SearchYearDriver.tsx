import React, { useEffect, useState } from "react";
import {
  I_Driver_By_Year_Data,
  driverByYearTable,
} from "../../../../Resource/Data/DriverData/driverByYearTable";
import { useParams } from "react-router-dom";
import { Table } from "antd";

export default function SearchYearDriver() {
  let { year } = useParams();

  let index = driverByYearTable.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Driver_By_Year_Data[]>([]);
  useEffect(() => {
    let cloneTable = driverByYearTable[index].driverData.map((item) => {
      return {
        ...item,
        driverName: `${item.firstName} ${item.lastName} (${item.abbreviation})`,
      };
    });
    
    setTableData(cloneTable);
  }, [year]);
  const columns = [
    {
      title: <abbr title="Position">POS</abbr>,
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Driver",
      dataIndex: "driverName",
      key: "driverName",
    },
    {
      title: "Nationality",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "Car",
      dataIndex: "car",
      key: "car",
    },
    {
      title: (<abbr title="Points">PTS</abbr>),
      dataIndex: "points",
      key: "points",
      
    },
  ];
  return (
    <div>
      <h1 className="pb-10 font-semibold text-5xl	 ">{year} Driver Standings</h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
}
