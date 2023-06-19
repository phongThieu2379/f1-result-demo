import React from "react";
import { Tabs } from "antd";
import { categoryList } from "../../Resource/Data/yearList";
import InforContent from "./InforContent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategoryAction,
  selectChildActiveKeyAction,
} from "../../reduxToolKit/selectionSlice";
import { RootState } from "../..";
import { useNavigate } from "react-router-dom";

export default function SearchNavDetailInfor() {
  let { childActiveKey } = useSelector((state: RootState) => {
    return state.selectionSlice;
  });
  let {selectedYear}= useSelector((state:RootState)=>{
    return state.selectionSlice
  })
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSelectCategory = (category: string) => {
    dispatch(selectCategoryAction(category));
    dispatch(selectChildActiveKeyAction(category));
    navigate(`/homepage/search-nav/${category}/${selectedYear}`)
  };
  const renderContent = () => {
    return categoryList.map((category) => {
      return {
        label: <button>{category.category}</button>,
        key: category.categoryName,
        children: <InforContent />,
      };
    });
  };
  return (
    <div>
      <Tabs
        activeKey={childActiveKey}
        onChange={handleSelectCategory}
        defaultActiveKey="1"
        tabPosition={"left"}
        items={renderContent()}
      />
    </div>
  );
}
