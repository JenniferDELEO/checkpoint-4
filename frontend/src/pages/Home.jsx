import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import Stuff from "../components/Stuff";

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => (res[key] = value));
}

export default function Home() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stuffList, setStuffList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/categories`)
      .then((res) => setCategoriesList(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/stuff?${searchParams}`)
      .then((res) => setStuffList(res.data));
  }, [searchParams]);

  return (
    <div>
      <form className="bg-white w-[90%] mx-auto mb-[50px] rounded-xl h-[200px] lg:h-[100px] flex flex-wrap justify-around items-center">
        <select
          name="categories"
          id="categories"
          onChange={(e) => {
            setSelectedCategory(parseInt(e.target.value, 10));
          }}
          value={selectedCategory}
          className="bg-slate-100 rounded-lg py-3 px-5 m-2 h-[50px]"
        >
          <option value="0">Choisissez votre catégorie</option>
          {categoriesList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          className="w-[47%] p-3 m-2 h-[50px] mx-7 bg-slate-100 rounded-lg"
          value={searchParams.get("title") || ""}
          onChange={(e) =>
            setSearchParams({
              ...toObject(searchParams),
              title: e.target.value,
            })
          }
        />
      </form>
      <div className="flex flex-wrap w-[90%] items-center justify-around lg:justify-between mx-auto">
        {stuffList
          .filter((stuff) =>
            stuff.categoryId === selectedCategory
              ? selectedCategory
              : !selectedCategory
          )
          .map((stuff) => (
            <Stuff stuff={stuff} key={stuff.id} />
          ))}
      </div>
    </div>
  );
}
