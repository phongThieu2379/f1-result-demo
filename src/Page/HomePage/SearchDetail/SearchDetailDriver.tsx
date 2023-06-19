import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../..";
import { driverDataTable } from "../../../Resource/Data/DriverData/driverDataTable";
import { I_DataDriver } from "../../../Resource/Interface/interfaceData";

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

  // tableIndex at the id from params
  let tableIndex = data.findIndex((item) => {
    return item.driver == detail;
  });
  let [tableData, setTableData] = useState<I_DataDriver[]>([]);
  useEffect(() => {
    setTableData(data[tableIndex].data);
  }, [detail]);

  const renderTable = () => {
    return tableData.map((item) => {
      return (
        <tr>
          <td>{item.grandPrix}</td>
          <td>{item.date}</td>
          <td>{item.car}</td>
          <td>{item.racePosition}</td>
          <td>{item.points}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <thead>
        <tr>
          <th>Grand prix</th>
          <th>Date</th>

          <th>Car</th>
          <th>Race Position</th>
          <th>
            <abbr title="Points">PTS</abbr>
          </th>
        </tr>
      </thead>
      <tbody>{renderTable()}</tbody>
    </div>
  );
}
