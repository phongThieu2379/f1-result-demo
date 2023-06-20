import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  I_Team_By_Year_Data,
  teamByYear,
} from "../../../../Resource/Data/Team/teamByYearTable";
import { Table } from "antd";

export default function SearchYearTeam() {
  let { year } = useParams();

  let index = teamByYear.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Team_By_Year_Data[]>([]);
  useEffect(() => {
    let cloneTable = teamByYear[index].teamData;

    setTableData(cloneTable);
  }, [year]);
  const renderTable = () => {
    return tableData.map((item) => {
      return (
        <tr>
          <td>{item.position}</td>
          <td>{item.teamName}</td>
          <td>{item.points}</td>
        </tr>
      );
    });
  };
  const columns = [
    {
      title: <abbr title="Position">POS</abbr>,
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Team",
      dataIndex: "teamName",
      key: "teamName",
    },
    {
      title: <abbr title="Points">PTS</abbr>,
      dataIndex: "points",
      key: "points",
    },
  ];
  return (
    <div>
      <h1 className="pb-10 font-semibold text-5xl	 ">
        {year} Constructor Standings
      </h1>
      <Table dataSource={tableData} columns={columns} />
    </div>
  );
}
