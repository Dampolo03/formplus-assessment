import React, { useCallback, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import { Searchbar } from "../Searchbar/Searchbar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/configureStore";
import { useDispatch } from "react-redux";
import { setObtainedData } from "../../redux/obtainedDataSlice";
import { setTemplate } from "../../redux/templateSlice";
import { setSearchWords } from "../../redux/searchWordsSlice";
import { setResults } from "../../redux/resultsSlice";

export const Header = () => {
  const [savedData, setSavedData] = useState<Array<any>>([]);
  const [category, setCategory] = useState<string>("All");
  const [order, setOrder] = useState<string>("default");
  const [date, setDate] = useState<string>("default");

  const obtainedData = useSelector(
    (state: RootState) => state.obtainedData.value
  );
  const unchangedData = useSelector(
    (state: RootState) => state.unchangedData.value
  );
  const searchWords = useSelector(
    (state: RootState) => state.searchWords.value
  );

  const dispatch = useDispatch();

  const handleSearchWordsChange = useCallback(
    (e: any) => {
      dispatch(setSearchWords({ words: e.target.value }));
      dispatch(
        setResults({
          results: [...obtainedData].filter((each: any) =>
            each.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
          ),
        })
      );
    },
    [obtainedData, dispatch]
  );

  const handleCategoryChange = useCallback(
    (e: any) => {
      setDate("default");
      setOrder("default");
      dispatch(setSearchWords({ words: "" }));
      dispatch(setResults({ results: [] }));
      setCategory(e.target.value);
      if (e.target.value === "All") {
        dispatch(setTemplate({ template: "All" }));
        dispatch(setObtainedData({ newData: [...unchangedData] }));
      } else {
        dispatch(setTemplate({ template: e.target.value }));
        const categoryArray = [];
        for (var i = 0; i < unchangedData.length; i++) {
          if (unchangedData[i].category.includes(e.target.value)) {
            categoryArray.push(unchangedData[i]);
          }
        }
        dispatch(setObtainedData({ newData: categoryArray }));
        setSavedData(categoryArray);
      }
    },
    [dispatch, unchangedData]
  );

  const handleOrderChange = useCallback(
    (e: any) => {
      setDate("default");
      setOrder(e.target.value);
      if (e.target.value === "default") {
        if (savedData.length) {
          dispatch(setObtainedData({ newData: savedData }));
        } else dispatch(setObtainedData({ newData: obtainedData }));
      } else if (e.target.value === "ascending") {
        let data = [...obtainedData];
        data = data.sort((a: any, b: any) => a.name.localeCompare(b.name));
        dispatch(setObtainedData({ newData: data }));
      } else if (e.target.value === "descending") {
        let data = [...obtainedData];
        data = data.sort((a: any, b: any) => b.name.localeCompare(a.name));
        dispatch(setObtainedData({ newData: data }));
      }
    },
    [obtainedData, dispatch, savedData]
  );

  const handleDateChange = useCallback(
    (e: any) => {
      setOrder("default");
      setDate(e.target.value);
      if (e.target.value === "default") {
        if (savedData.length) {
          dispatch(setObtainedData({ newData: savedData }));
        } else dispatch(setObtainedData({ newData: obtainedData }));
      } else if (e.target.value === "ascending") {
        let data = [...obtainedData];
        data = data.sort((a, b) => {
          return a.created < b.created ? -1 : a.created > b.created ? 1 : 0;
        });
        dispatch(setObtainedData({ newData: data }));
      } else if (e.target.value === "descending") {
        let data = [...obtainedData];
        data = data.sort((a, b) => {
          return b.created < a.created ? -1 : b.created > a.created ? 1 : 0;
        });
        dispatch(setObtainedData({ newData: data }));
      }
    },
    [obtainedData, dispatch, savedData]
  );

  return (
    <div className="header-container">
      <div className="search-and-select">
        <div>
          <Searchbar
            searchWords={searchWords}
            onChange={handleSearchWordsChange}
          />
        </div>
        <div className="options-container">
          <div className="sort-text">Sort By:</div>
          <SelectComponent
            value={category}
            onChange={handleCategoryChange}
            items={[
              { value: "All", name: "All" },
              { value: "Education", name: "Education" },
              { value: "E-commerce", name: "E-commerce" },
              { value: "Health", name: "Health" },
            ]}
            label="Category"
          />
          <SelectComponent
            value={order}
            onChange={handleOrderChange}
            items={[
              { value: "default", name: "Default" },
              { value: "ascending", name: "Ascending" },
              { value: "descending", name: "Descending" },
            ]}
            label="Order"
          />
          <SelectComponent
            value={date}
            onChange={handleDateChange}
            items={[
              { value: "default", name: "Default" },
              { value: "ascending", name: "Ascending" },
              { value: "descending", name: "Descending" },
            ]}
            label="Date"
          />
        </div>
      </div>
      <div className="info-container">
        <div className="info">
          <BsInfoCircle />
          <span>
            Tada! Get started with a free template. Can't find what you are
            looking for? Search from the 1000+ available templates
          </span>
        </div>
      </div>
    </div>
  );
};
