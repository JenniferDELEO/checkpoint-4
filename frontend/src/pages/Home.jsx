import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => (res[key] = value));
}

export default function Home() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stuffList, setStuffList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [popup, setPopup] = useState(false);
  const [popupPatch, setPopupPatch] = useState(false);
  const [id, setId] = useState();
  const defaultState = {
    title: "",
    description: "",
    imageUrl: "",
    price: 0,
    categoryId: 0,
    userId: 1,
  };
  const [infos, setInfos] = useState(defaultState);

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

  function handleDelete(id) {
    const stringId = id.toString();
    axios
      .delete(`http://localhost:3001/stuff/${stringId}`)
      .then(() => setStuffList(stuffList.filter((stuff) => stuff.id !== id)));
    setPopup(!popup);
  }

  function handlePatch(e, id) {
    const stringId = id.toString();
    axios
      .put(`http://localhost:3001/stuff/${stringId}`, infos)
      .then(() => setInfos(defaultState))
      .then(() => {
        axios
          .get(`http://localhost:3001/stuff/`)
          .then((res) => setStuffList(res.data));
      });
  }

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
          <option value="Catégories">Choisissez votre catégorie</option>
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
            <div
              className="bg-white m-3 rounded-xl p-2 flex flex-col justify-between items-center h-[280px] w-[300px] lg:w-[260px]"
              key={stuff.id}
            >
              <div className="flex justify-between">
                <NavLink to={`/thingdetail/${stuff.id}`}>
                  <img
                    src={stuff.imageUrl}
                    alt={stuff.title}
                    className="w-[150px] h-[120px] rounded-xl m-4"
                  />
                </NavLink>
                <div className="flex justify-between">
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setId(stuff.id);
                      setPopupPatch(!popupPatch);
                    }}
                  >
                    <BsPencilSquare />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setId(stuff.id);
                      setPopup(!popup);
                    }}
                  >
                    <BsTrash className="ml-2" />
                  </div>
                </div>
              </div>
              <h2 className="w-[250px] text-center">{stuff.title}</h2>
              <p className="text-center">{stuff.price} €</p>
              <p className="text-center">{stuff.description.slice(0, 30)}...</p>
            </div>
          ))}
      </div>
      <div
        className={
          popup ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            popup
              ? "mx-auto my-40 w-[60%] h-[45%] bg-[white] p-5 ease-in duration-500 rounded-xl"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <h3>Supprimer</h3>
            <div
              className="p-3 cursor-pointer"
              onClick={() => setPopup(!popup)}
            >
              <AiOutlineClose size={25} style={{ color: "#CA0D0D" }} />
            </div>
          </div>
          <div className="my-20">
            Etes-vous sûr de vouloir suppimer cet objet ?
          </div>
          <div className="flex justify-evenly">
            <button
              type="submit"
              className="w-[40%] h-[30px] mx-auto py-1 flex justify-evenly text-white shadow-md shadow-[#B32222] rounded-xl bg-gradient-to-b from-[#B32222] to-[#CA0D0D]"
              onClick={() => handleDelete(id)}
            >
              Supprimer
            </button>
            <button
              type="submit"
              className="w-[40%] h-[30px] mx-auto py-1 flex justify-evenly text-[#B32222] shadow-md shadow-gray-300 rounded-xl bg-slate-200"
              onClick={() => setPopup(!popup)}
            >
              Annuler
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          popupPatch ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            popupPatch
              ? "mx-auto my-20 w-[90%] h-[90%] bg-[white] p-4 ease-in duration-500 rounded-xl"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <h3>Modifier</h3>
            <div
              className="p-3 cursor-pointer"
              onClick={() => setPopupPatch(!popupPatch)}
            >
              <AiOutlineClose size={25} style={{ color: "#CA0D0D" }} />
            </div>
          </div>
          <form className="flex flex-col py-3 mx-2 sm:w-[70%] sm:mx-auto">
            <label htmlFor="title" className="py-2">
              Titre
            </label>
            <input
              className="py-2 rounded-lg px-2 text-black bg-slate-50"
              type="text"
              name="title"
              id="title"
              placeholder="Nouveau titre"
              value={infos.title}
              onChange={(e) => setInfos({ ...infos, title: e.target.value })}
              required
            />
            <label htmlFor="categories" className="py-2">
              Catégorie
            </label>
            <select
              name="categories"
              id="categories"
              value={infos.categoryId}
              onChange={(e) =>
                setInfos({ ...infos, categoryId: parseInt(e.target.value, 10) })
              }
              required
              className="bg-slate-50 rounded-lg py-2 px-2 my-2 text-gray-700"
            >
              <option value="Catégories">Modifier la catégorie</option>
              {categoriesList.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <label htmlFor="price" className="py-2">
              Prix (en €)
            </label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="0"
              className="py-2 rounded-lg px-2 text-black bg-slate-50"
              value={infos.price}
              onChange={(e) => setInfos({ ...infos, price: e.target.value })}
              required
            />
            <label htmlFor="description" className="py-2">
              Description
            </label>
            <textarea
              className="py-2 rounded-lg h-[150px] px-2 text-black bg-slate-50"
              name="description"
              id="description"
              placeholder="Nouvelle description"
              value={infos.description}
              onChange={(e) =>
                setInfos({ ...infos, description: e.target.value })
              }
              required
            ></textarea>
            <label className="py-2" htmlFor="image">
              Image Url
            </label>
            <input
              className="py-2 rounded-lg px-2 text-black bg-slate-50"
              type="text"
              name="image"
              id="image"
              placeholder="http://..."
              value={infos.imageUrl}
              onChange={(e) => setInfos({ ...infos, imageUrl: e.target.value })}
              required
            />
            <div className="flex justify-evenly mt-3">
              <button
                type="submit"
                className="w-[40%] h-[30px] mx-auto flex py-1 justify-evenly text-white shadow-md shadow-[#B32222] rounded-xl bg-gradient-to-b from-[#B32222] to-[#CA0D0D]"
                onClick={(e) => {
                  handlePatch(e, id);
                  setPopupPatch(!popupPatch);
                }}
              >
                Modifier
              </button>
              <button
                type="submit"
                className="w-[40%] h-[30px] mx-auto py-1 flex justify-evenly text-[#B32222] shadow-md shadow-gray-300 rounded-xl bg-slate-200"
                onClick={() => setPopupPatch(!popupPatch)}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
