import React, { useState, useEffect } from "react";
import axios from "axios";
import profilPicture from "../assets/photo_linkedin.jpeg";

export default function Profil() {
  const [profil, setProfil] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/1`)
      .then((res) => res.data)
      .then((data) => setProfil(data));
  }, []);

  return (
    <div>
      {profil.map((profil) => (
        <div
          className="mx-auto mt-5 flex flex-col justify-center items-center text-white"
          key={profil.id}
        >
          <img
            src={profilPicture}
            alt="profile"
            className="h-[100px] sm:w-[500px] sm:h-[500px] mb-4 rounded-full"
          />
          <h2 className="text-center text-xl sm:text-2xl mb-4">
            Votre nom : {profil.firstname} {profil.lastname}
          </h2>
          <p className="text-center mb-4">Votre email : {profil.email}</p>
        </div>
      ))}
    </div>
  );
}
