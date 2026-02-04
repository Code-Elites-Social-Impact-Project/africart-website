import React from "react";
import { badges } from "../constants";

const Badges = () => {
  return (
    <section className=" mt-24 mb-24">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:w-[80%] w-[90%] mx-auto">
        {badges.map((badge, index) => {
          return (
            <div
              key={badge.id}
              className="flex flex-col items-center w-[240px] space-y-2 hover:shadow-lg p-4"
            >
              <i className={badge.icon} />
              <h3 className="m-3 font-medium">{badge.title}</h3>
              <p className="text-sm font-regular">{badge.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Badges;
