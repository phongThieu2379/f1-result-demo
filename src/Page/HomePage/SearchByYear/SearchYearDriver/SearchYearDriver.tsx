import React, { useEffect, useState } from "react";
import {
  I_Driver_By_Year_Data,
  driverByYearTable,
} from "../../../../Resource/Data/DriverData/driverByYearTable";
import { useParams } from "react-router-dom";

export default function SearchYearDriver() {
  let { year } = useParams();

  let index = driverByYearTable.findIndex((item) => {
    return item.year == Number(year);
  });
  let [tableData, setTableData] = useState<I_Driver_By_Year_Data[]>([]);
  useEffect(() => {
    setTableData(driverByYearTable[index].driverData);
  }, [year]);
  const renderTable = () => {
    return tableData.map((item) => {
      return (
        <tr>
          <td>{item.position}</td>
          <td>
            {item.firstName} {item.lastName} ({item.abbreviation})
          </td>
          <td>{item.nationality}</td>

          <td>{item.car}</td>
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
          <th>Nationality</th>
          <th>Car</th>
          <th>
            <abbr title="Points">PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </div>
  );
}
