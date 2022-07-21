import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stuffList, setStuffList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/categories`)
      .then((res) => setCategoriesList(res.data));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/stuff`)
      .then((res) => setStuffList(res.data));
  }, [selectedCategory]);

  return (
    <div>
      <div className="bg-white w-[60%] mx-auto mb-[50px] rounded-xl h-[100px] flex justify-around items-center">
        <select
          name="categories"
          id="categories"
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          value={selectedCategory}
          className="bg-slate-50 rounded-lg py-3 px-5 m-2 mx-7 h-[50px]"
        >
          <option value="Catégories" className="">
            Choisissez votre catégorie
          </option>
          {categoriesList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Que recherchez-vous ?"
          className="w-[40%] p-3 m-2 h-[50px] mx-7 bg-slate-50 rounded-lg"
        />
      </div>
      <div className="flex flex-wrap w-[90%] justify-between mx-auto">
        {stuffList
          .filter((stuff) =>
            stuff.categoryId === selectedCategory
              ? selectedCategory
              : !selectedCategory
          )
          .map((stuff) => (
            <NavLink to={`/thingdetail/${stuff.id}`} key={stuff.id}>
              <div className="bg-white m-3 rounded-xl p-2 flex flex-col justify-center items-center h-[280px]">
                <img
                  src={stuff.imageUrl}
                  alt={stuff.title}
                  className="w-[150px] h-[120px] rounded-xl m-4"
                />
                <h2 className="w-[250px] text-center">{stuff.title}</h2>
                <p className="text-center">{stuff.price} €</p>
                <p className="text-center">
                  {stuff.description.slice(0, 30)}...
                </p>
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  );
}
