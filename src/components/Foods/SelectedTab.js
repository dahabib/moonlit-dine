import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const SelectedTab = ( props ) => {
    const {selectedCategory} = props;
    console.log(selectedCategory);
    const history = useHistory();

    const [menu, setMenu] = useState(null);

    useEffect((selectedCategory) => {
        const url = `www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    return (

        menu && menu.map(item => (
            <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 px-1 py-2 w-full items-center hover:shadow-lg cursor-pointer" onClick={() => history.push(`/food/details/${selectedCategory.idMeal}`)}>
                <div className="block relative h-48 rounded overflow-hidden">
                    <img alt={selectedCategory.strMeal} class="object-contain object-center w-full h-full block" src={selectedCategory.strMealThumb} />
                </div>

                <div class="mt-4 text-center">
                    <h3 class="text-gray-900 title-font text-lg font-medium">{selectedCategory}</h3>
                    <h2 class="text-gray-500 text-xs tracking-widest title-font mb-1">{selectedCategory.strMeal}</h2>
                    <p class="mt-1">$16.00</p>
                </div>
            </div>
        ))

    );
};

export default SelectedTab;