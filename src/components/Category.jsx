import React from "react";
import { categories } from "../constants";
import "./CategoryStyles.css";

const ShopbyCategory = () => {
  return (
    <>
      <div className="mr-24 ml-24 "> 
      {/* bg-[#F4F0E9] */}
        <div className="af-category-title">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Shop by Category
          </h1>
          <p>Explore our curated collection of authentic African crafts</p>
        </div>
        <div className="af-categories grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 place-items-center">
          {categories.map((category, index) => {
            return (
              <div
                key={category.id}
                className="relative aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all"
              >
                <img
                  src={category.image}
                  alt={category.categoryTitle}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="text-white font-medium text-sm md:text-base">
                    {category.categoryTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShopbyCategory;
