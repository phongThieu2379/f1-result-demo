import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  I_Race_Year_Data,
  raceByYearTable,
} from "../../../../Resource/Data/RaceData/raceByYearTable";

export default function SearchYearRace() {
  let { year } = useParams();

  let index = raceByYearTable.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Race_Year_Data[]>([]);
  useEffect(() => {
    setTableData(raceByYearTable[index].raceData);
  }, [year]);
  const renderTable = () => {
    return tableData.map((item) => {
      return (
        <tr>
          <td>{item.grandPrix}</td>
          <td>{item.date}</td>
          <td>
            {item.winnerFirstName} {item.winnerLastName} (
            {item.winnerAbbreviation})
          </td>
          <td>{item.car}</td>
          <td>{item.laps}</td>
          <td>{item.time}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <thead>
        <tr>
          <th>Grand Prix</th>
          <th>Date</th>
          <th>Winner</th>
          <th>Car</th>
          <th>Laps</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </div>
  );
}
