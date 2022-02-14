import React, { useCallback, useContext, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { UserContext } from "../../context/UserContext";
import { SelectComponent } from "../SelectComponent/SelectComponent";
import { Searchbar } from "../Searchbar/Searchbar";

export const Header = () => {
  const {
    obtainedData,
    unchangedData,
    searchWords,
    setObtainedData,
    setTemplate,
    setSearchWords,
    setResults,
  } = useContext(UserContext);

  const [savedData, setSavedData] = useState<Array<any>>([]);
  const [category, setCategory] = useState<string>("All");
  const [order, setOrder] = useState<string>("default");
  const [date, setDate] = useState<string>("default");

  const handleSearchWordsChange = useCallback(
    (e: any) => {
      setSearchWords(e.target.value);
      setResults(
        [...obtainedData].filter((each: any) =>
          each.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
        )
      );
    },
    [obtainedData, setResults, setSearchWords]
  );

  const handleCategoryChange = useCallback(
    (e: any) => {
      setDate("default");
      setOrder("default");
      setSearchWords("");
      setResults([]);
      setCategory(e.target.value);
      if (e.target.value === "All") {
        setTemplate("All");
        setObtainedData([...unchangedData]);
      } else {
        setTemplate(e.target.value);
        const categoryArray = [];
        for (var i = 0; i < unchangedData.length; i++) {
          if (unchangedData[i].category.includes(e.target.value)) {
            categoryArray.push(unchangedData[i]);
          }
        }
        setObtainedData(categoryArray);
        setSavedData(categoryArray);
      }
    },
    [setObtainedData, unchangedData, setTemplate, setSearchWords, setResults]
  );

  const handleOrderChange = useCallback(
    (e: any) => {
      setDate("default");
      setOrder(e.target.value);
      if (e.target.value === "default") {
        if (savedData.length) {
          setObtainedData(savedData);
        } else setObtainedData(obtainedData);
      } else if (e.target.value === "ascending") {
        let data = [...obtainedData];
        data = data.sort((a: any, b: any) => a.name.localeCompare(b.name));
        setObtainedData(data);
      } else if (e.target.value === "descending") {
        let data = [...obtainedData];
        data = data.sort((a: any, b: any) => b.name.localeCompare(a.name));
        setObtainedData(data);
      }
    },
    [obtainedData, setObtainedData, savedData]
  );

  const handleDateChange = useCallback(
    (e: any) => {
      setOrder("default");
      setDate(e.target.value);
      if (e.target.value === "default") {
        if (savedData.length) {
          setObtainedData(savedData);
        } else setObtainedData(obtainedData);
      } else if (e.target.value === "ascending") {
        let data = [...obtainedData];
        data = data.sort((a, b) => {
          return a.created < b.created ? -1 : a.created > b.created ? 1 : 0;
        });
        setObtainedData(data);
      } else if (e.target.value === "descending") {
        let data = [...obtainedData];
        data = data.sort((a, b) => {
          return b.created < a.created ? -1 : b.created > a.created ? 1 : 0;
        });
        setObtainedData(data);
      }
    },
    [obtainedData, setObtainedData, savedData]
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
