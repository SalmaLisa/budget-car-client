import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../shared/Loader";

const CarModels = () => {
  const { data: carModels = [], isLoading } = useQuery({
    queryKey: ["carModels"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/carModels");
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-20">
      <h1 className="text-5xl text-center mb-5 lg:mb-16 italic">
        Browse Our <span className="text-yellow-500">Models</span>
      </h1>
      <div className=" md:w-5/6 mx-auto md:grid grid-cols-4 gap-6 lg:mb-40">
        {carModels.map((carModel) => (
          <Link key={carModel._id} to={`/carModels/${carModel.model}`}>
            <div className="card card-compact bg-base-300 shadow-xl hover:bg-yellow-100">
              <img src={carModel.image} alt="Shoes" />
              <div className="card-body">
                <h2 className="text-2xl md:text-xl text-center font-bold">
                  {carModel.model}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CarModels;
