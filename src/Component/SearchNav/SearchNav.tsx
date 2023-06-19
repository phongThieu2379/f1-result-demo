import { Tabs } from "antd";
import React from "react";
import { yearList } from "../../Resource/Data/yearList";
import SearchNavDetailInfor from "./SearchNavDetailInfor";
import { useDispatch } from "react-redux";
import {
  selectCategoryAction,
  selectChildActiveKeyAction,
  selectYearAction,
} from "../../reduxToolKit/selectionSlice";
import { useNavigate } from "react-router-dom";

export default function SearchNav() {
  let dispatch = useDispatch();
  const handleSelectYear = (year: string) => {
    dispatch(selectYearAction(year));
    dispatch(selectChildActiveKeyAction("races"))
    dispatch(selectCategoryAction("races"));
    navigate(`/homepage/search-nav/races/${year}`)
  };
  let navigate = useNavigate()

  const renderContent = () => {
    return yearList.map((year) => {
      return {
        label: <button>{year.year}</button>,
        key: year.year,
        children: <SearchNavDetailInfor />,
      };
    });
  };
  return (
    <div>
      <Tabs
        onChange={handleSelectYear}
        defaultActiveKey="1"
        tabPosition={"left"}
        items={renderContent()}
      />
    </div>
  );
}
