import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { I_Team_By_Year_Data, teamByYear } from "../../../../Resource/Data/Team/teamByYearTable";


export default function SearchYearTeam() {
  let { year } = useParams();

  let index = teamByYear.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Team_By_Year_Data[]>([]);
  useEffect(() => {
    setTableData(teamByYear[index].teamData);
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
  return (
    <div>
      <thead>
        <tr>
          <th>
            <abbr title="Position">Pos</abbr>
          </th>
          <th>Team</th>
          <th>
            <abbr title="Points">PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </div>
  );
}
