import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../..";
import { teamDataTable } from "../../../Resource/Data/Team/teamDataTable";
import { I_DataTeamName } from "../../../Resource/Interface/interfaceData";
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
    setTableData(data[tableIndex].data);
  }, [detail]);

  const renderTable = () => {
    return tableData.map((item) => {
      return (
        <tr>
          <td>{item.grandPrix}</td>
          <td>{item.date}</td>
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
           Grand Prix
          </th>
          <th>Date</th>
          <th>
            <abbr title="Points">PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </div>
  );
}
