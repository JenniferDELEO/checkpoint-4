import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ThingDetail({ id }) {
  const [stuffDetails, setStuffDetails] = useState([]);
  const stuffId = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/stuff/`)
      .then((res) => res.data)
      .then((data) => setStuffDetails(data));
  }, []);

  return (
    <div>
      {stuffDetails
        .filter((stuff) => stuff.id === parseInt(stuffId.id, 10))
        .map((stuff) => (
          <div key={stuff.id}>
            <div className="mx-auto flex flex-col justify-center items-center text-white -mt-5">
              <img
                src={stuff.imageUrl}
                alt={stuff.title}
                className="w-[100vw] h-[300px] sm:w-[700px] sm:h-[500px] mb-4"
              />
              <h2 className="text-center text-xl sm:text-2xl mb-4">
                {stuff.title}
              </h2>
              <p className="text-center mb-4">{stuff.price} €</p>
              <div className="h-[3px] bg-slate-100 w-[100vw] mb-4"></div>
              <h2 className="self-start sm:self-center pl-4 text-xl sm:text-2xl mb-4">
                Description :
              </h2>
              <p className="self-start sm:self-center pl-4 sm:w-[80%]">
                {stuff.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
