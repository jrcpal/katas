import { useState, useEffect } from "react";

export default function checkBox() {
  const [selectedCategory, setSelectedCategory] = useState(new Set());

  const handleSelect = (category) => {
    setSelectedCategory((prevSet) => {
      const newSet = new Set(prevSet);
      newSet.has(category) ? newSet.delete(category) : newSet.add(category);
      return newSet;
    });
  };

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const restaurantData = {
    title: "Delicious Restaurant Menu",
    description:
      "Explore our carefully crafted menu featuring fresh ingredients and diverse flavors to satisfy every taste preference and dietary requirement.",
    categories: ["Vegetarian", "Vegan", "Gluten-Free", "Spicy", "Healthy"],
  };

  const categories = restaurantData.categories;

  return (
    <div>
      {categories.map((category) => {
        return (
          <div key={category}>
            <label>{category}</label>
            <input
              type="checkbox"
              checked={selectedCategory.has(category)}
              onChange={() => handleSelect(category)}
            ></input>
          </div>
        );
      })}
    </div>
  );
}
