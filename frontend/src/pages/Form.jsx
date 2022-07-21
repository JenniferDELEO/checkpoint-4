import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Form() {
  const defaultState = {
    title: "",
    description: "",
    imageUrl: "",
    price: 0,
    categoryId: 0,
    userId: 1,
  };
  const [infos, setInfos] = useState(defaultState);
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/categories`)
      .then((res) => setCategoriesList(res.data));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/stuff/`, infos);
      setInfos(defaultState);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="text-white">
      <h2 className="mx-2 sm:mx-[15%] text-xl sm:text-2xl">
        Déposer une annonce
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-3 mx-2 sm:w-[70%] sm:mx-auto"
      >
        <label htmlFor="title" className="py-2">
          Titre
        </label>
        <input
          className="py-2 rounded-lg px-2 text-gray-700"
          type="text"
          name="title"
          id="title"
          placeholder="Que vendez-vous ?"
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
          <option value="Catégories">Choisissez votre catégorie</option>
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
          className="py-2 rounded-lg px-2 text-gray-700"
          value={infos.price}
          onChange={(e) => setInfos({ ...infos, price: e.target.value })}
          required
        />
        <label htmlFor="description" className="py-2">
          Description
        </label>
        <textarea
          className="py-2 rounded-lg h-[150px] px-2 text-gray-700"
          name="description"
          id="description"
          placeholder="Décrivez votre objet (type, qualité, etc.)"
          value={infos.description}
          onChange={(e) => setInfos({ ...infos, description: e.target.value })}
          required
        ></textarea>
        <label className="py-2" htmlFor="image">
          Image Url
        </label>
        <input
          className="py-2 rounded-lg px-2 text-gray-700"
          type="text"
          name="image"
          id="image"
          placeholder="http://..."
          value={infos.imageUrl}
          onChange={(e) => setInfos({ ...infos, imageUrl: e.target.value })}
          required
        />
        <button
          className="py-2 rounded-lg px-2 bg-gradient-to-b from-[#B32222] to-[#CA0D0D] w-[100px] self-center mt-4"
          type="submit"
        >
          Valider
        </button>
      </form>
    </div>
  );
}
