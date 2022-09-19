import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-28 py-20 mx-auto">
        <div class="flex flex-wrap -m-12">
          <div class="p-12 md:w-1/2 flex flex-col items-start">
            <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              {meal?.strCategory}
            </span>
            <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              {meal?.strMeal}
            </h2>
            <p class="leading-relaxed mb-8">{meal?.strInstructions}</p>
            <div class="flex items-center flex-wrap pb-2 mb-1 mt-auto w-full">
              <p class="text-red-800 text-lg font-bold inline-flex items-center content-center">
                $55
              </p>
              <div className="rounded-3xl border border-gray-400 ml-2 px-4 space-x-2">
                <button
                  className="inline-block font-bold text-lg"
                  onClick={() => decrease()}
                >
                  -
                </button>
                <p className="inline-block font-bold text-lg px-2">
                  {quantity}
                </p>
                <button
                  className="inline-block font-bold text-lg"
                  onClick={() => increase()}
                >
                  +
                </button>
              </div>
            </div>
            <div class="inline-flex items-center">
              <button className="inline-flex items-center text-white bg-red-600 border-0 py-3 px-5 focus:outline-none hover:bg-black rounded-3xl text-base mt-4 md:mt-0 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Add</span>
              </button>
            </div>
            <p class="inline-flex items-center mt-4">
              <img
                alt="blog"
                src="https://dummyimage.com/104x104"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
              />
            </p>
          </div>

          <div class="p-12 md:w-1/2 sm:w-full flex flex-col items-start">
            <div className="w-full h-auto">
              <img
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
