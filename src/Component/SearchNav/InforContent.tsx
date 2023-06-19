import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import { driverDataTable } from "../../Resource/Data/DriverData/driverDataTable";
import {
  I_Data,
  I_DataDriver,
  I_DataRace,
  I_DataTeamName,
  I_Data_LapTable,
  I_DriverName,
  I_Race_Location,
  I_TeamName,
} from "../../Resource/Interface/interfaceData";
import { teamDataTable } from "../../Resource/Data/Team/teamDataTable";
import { selectInforAction } from "../../reduxToolKit/selectionSlice";
import { raceByLocationTable } from "../../Resource/Data/RaceData/raceByLocationTable";
import { lapByYearTable } from "../../Resource/Data/FastesLap/lapByYearTable";
import { useNavigate } from "react-router-dom";
export default function InforContent() {
  let { selectedYear, selectedCategory } = useSelector((state: RootState) => {
    return state.selectionSlice;
  });
  const [tableContentList, setTableContentList] = useState<
    I_DataRace[] | I_DataDriver[] | I_DataTeamName[] | I_Data_LapTable[]
  >([]);
  const [selectedButton, setSelectedButton] = useState("");
  let [listInfor, setListInfor] = useState<I_Data[]>([]);
  let dispatch = useDispatch();
  useEffect(() => {
    switch (selectedCategory) {
      case "races":
        setListInfor(raceByLocationTable);
        break;
      case "drivers":
        setListInfor(driverDataTable);
        break;
      case "teams":
        setListInfor(teamDataTable);
        break;
      case "fastest-lap":
        setListInfor([]);
        let index = lapByYearTable.findIndex(
          (item) => item.year == selectedYear
        );
        setTableContentList(lapByYearTable[index].lapData);
        break;
    }
    setSelectedButton("all");
  }, [selectedCategory, selectedYear]);
  let navigate= useNavigate()
  // select detail
  let handleSelectInfor = (item: string) => {
    dispatch(selectInforAction(item));
    setSelectedButton(item);
    let index = listInfor.findIndex((item) => item.year == selectedYear);
    let { data } = listInfor[index];

    let indexTable = -1;
    switch (selectedCategory) {
      case "races":
        indexTable = data.findIndex((object) => {
          return (object as I_Race_Location).locationId == item;
        });
        navigate(`/homepage/search-nav/races/2023/${item}`)
        break;
      case "drivers":
        indexTable = data.findIndex((object) => {
          return (object as I_DriverName).driver == item;
        });
        navigate(`/homepage/search-nav/drivers/2023/${item}`)
        break;
      case "teams":
        indexTable = data.findIndex((object) => {
          return (object as I_TeamName).team == item;
        });
        navigate(`/homepage/search-nav/teams/2023/${item}`)
        break;
      case "fastest-lap":
        break;
    }
    console.log(item, indexTable);
  };
  const renderListContent = () => {
    let index = listInfor.findIndex((item) => item.year == selectedYear);
    let data = listInfor[index];

    return data?.data.map((item) => {
      if ("location" in item) {
        let newName = "";
        if (item.location.includes("-")) {
          newName =
            item.location.replace(/-/g, " ").toUpperCase() +
            " " +
            item.locationId;
        } else {
          newName = item.location.toUpperCase() + " " + item.locationId;
        }
        return (
          <h2>
            <button
              onClick={() => handleSelectInfor(item.locationId)}
              className={selectedButton === item.locationId ? "selected" : ""}
            >
              {newName}
            </button>
          </h2>
        );
      }
      if ("driver" in item) {
        let newName = "";
        if (item.driver.includes("-")) {
          newName = item.driver.replace(/-/g, " ").toUpperCase();
        } else {
          newName = item.driver.toUpperCase();
        }

        return (
          <h2>
            <button
              onClick={() => handleSelectInfor(item.driver)}
              className={selectedButton === item.driver ? "selected" : ""}
            >
              {newName}
            </button>
          </h2>
        );
      }
      if ("team" in item) {
        let newName = "";
        if (item.team.includes("_")) {
          newName = item.team.replace(/_/g, " ").toUpperCase();
        } else {
          newName = item.team.toUpperCase();
        }
        return (
          <h2>
            <button
              onClick={() => handleSelectInfor(item.team)}
              className={selectedButton === item.team ? "selected" : ""}
            >
              {newName}
            </button>
          </h2>
        );
      }

      if ("fastestLap" in item) {
        return null;
      }
    });
  };
  return (
    <div>
      <div className="detail-infor">{renderListContent()}</div>
    </div>
  );
}
