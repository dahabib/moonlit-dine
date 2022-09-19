import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const SelectedTab = (props) => {
  const { selectedCategory } = props;
  const [menu, setMenu] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMenu(data.meals));
  }, [selectedCategory]);

  return (
    <>
      {menu &&
        menu.map((item) => (
          <div
            key={item.idMeal}
            class="md:w-1/3 sm:w-1/2 px-1 py-2 items-center hover:shadow-lg cursor-pointer"
            onClick={() => history.push(`/food/details/${item.idMeal}`)}
          >
            <div className="block relative rounded overflow-hidden">
              <img
                alt={item.strMeal}
                class="object-contain object-center w-full h-full block"
                src={item.strMealThumb}
              />
            </div>

            <div class="mt-4 text-center">
              <h3 class="text-gray-900 title-font text-lg font-medium">
                {item.strMeal}
              </h3>
              <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                {selectedCategory}
              </h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default SelectedTab;
