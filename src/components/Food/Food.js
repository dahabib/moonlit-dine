import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Food = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  console.log(id);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals));
  }, [id]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-column content-start w-1/2 sm:w-full">
        <div className="flex flex-row">
          <h2>Light Breakfast</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quae
            odio iusto exercitationem saepe pariatur deleniti est, vel similique
            veritatis non autem itaque sapiente alias, aliquid obcaecati earum
            et facere quia qui molestiae quam. Totam quaerat eligendi
            accusantium officiis obcaecati.
          </p>
        </div>

        <div className="flex flex-row">
          <div className="felx flex-column">$55</div>
          <div className="felx flex-column m-1 p-1 rounded-2xl block w-full">
            <button
              className="font-normal inline-block"
              onClick={() => decrease()}
            >
              -
            </button>
            <p className="inline-block">{quantity}</p>
            <button
              className="font-normal inline-block"
              onClick={() => increase()}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-column w-1/2 sm:w-full">
        <img src="" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Food;
