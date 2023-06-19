import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../..";
import { raceByLocationTable } from "../../../Resource/Data/RaceData/raceByLocationTable";
import { I_DataRace } from "../../../Resource/Interface/interfaceData";

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

  // tableIndex at the id from params
  let tableIndex = data.findIndex((item) => {
    return item.locationId == detail;
  });
  let [tableData, setTableData] = useState<I_DataRace[]>([]);
  useEffect(() => {
    setTableData(data[tableIndex].data);
  }, [detail]);

  const renderTable = () => {
    return tableData.map((item) => {
      return (
        <tr>
          <td>{item.pos}</td>
          <td>{item.driver}</td>
          <td>{item.laps}</td>
          <td>{item.time}</td>
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
          <th>Driver</th>

          <th>Laps</th>
          <th>Time</th>
          <th>
            <abbr title="Points">PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </div>
  );
}
