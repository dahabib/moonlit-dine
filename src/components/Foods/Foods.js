import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectedTab from "./SelectedTab";

const Foods = () => {
  const [category, setCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Beef");
  const [openTab, setOpenTab] = useState(1);

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCategory(data.categories));
  }, []);

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-16 py-12 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="content-center mx-auto w-full flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              {category &&
                category.map((category) => (
                  <li className="-mb-px mr-0 flex-auto text-center">
                    <Link
                      key={category.idCategory}
                      className={
                        "text-xs font-bold uppercase px-5 py-3 inline-block leading-normal " +
                        (openTab === category.idCategory
                          ? "text-red-600 border-b-2 border-red-500"
                          : "text-black border-0")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(category.idCategory);
                        setSelectedCategory(category.strCategory);
                      }}
                      data-toggle="tab"
                      to={`#${category.strCategory}`}
                      role="tablist"
                    >
                      {category.strCategory}
                    </Link>
                  </li>
                ))}
            </ul>
            {console.log(
              "Selected Category:",
              selectedCategory + ", Open Tab: ",
              openTab
            )}
            {selectedCategory && (
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div id={category?.strCategory}>
                      <div class="flex flex-wrap">
                        <SelectedTab selectedCategory={selectedCategory} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-10 py-1 content-center bg-gray-300 text-white hover:bg-gray-700 rounded-sm">
            Checkout Your Food
          </button>
        </div>
      </div>
    </section>
  );
};

export default Foods;
