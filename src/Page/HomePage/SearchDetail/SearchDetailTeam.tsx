import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../..";
import { teamDataTable } from "../../../Resource/Data/Team/teamDataTable";
import { I_DataTeamName } from "../../../Resource/Interface/interfaceData";
import { Table } from "antd";
export default function SearchDetailTeam() {
  let { detail } = useParams();
  let { selectedYear } = useSelector((state: RootState) => {
    return state.selectionSlice;
  });
  let index = teamDataTable.findIndex((item) => {
    return item.year == selectedYear;
  });
  // data : data at the index year
  let data = teamDataTable[index].data;

  // tableIndex at the id from params
  let tableIndex = data.findIndex((item) => {
    return item.team == detail;
  });
  let [tableData, setTableData] = useState<I_DataTeamName[]>([]);
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
      title: <abbr title="Points">PTS</abbr>,
      dataIndex: "points",
      key: "points",
    },
  ];
  let teamName = detail?.replace(/_/g, " ");
  return (
    <div>
      <h1 className="pb-10 font-semibold text-5xl	 ">
        {selectedYear} Constructor Standings :{" "}
        <span className="capitalize">{teamName}</span>
      </h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
}
