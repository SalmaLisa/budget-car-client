import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const [conditionType, setConditionType] = useState("Excellent");
  console.log(conditionType);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const image = form.image.files[0];
    const location = form.location.value;
    const model = form.model.value;
    const resalePrice = form.resalePrice.value;
    const originalPrice = form.originalPrice.value;
    const useYear = form.useYear.value;
    const purchaseYear = form.purchaseYear.value;
    const description = form.description.value;
    const sellerName = form.username.value;
    const sellerEmail = form.email.value;
    const phone = form.phone.value;

    //time
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const min = `${minutes < 10 ? "0" + minutes : minutes}`;
    const time = `${hour > 12 ? hour - 12 : hour}:${min} ${
      hour > 12 ? "PM" : "AM"
    }`;
    //date
    const days = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = `${days}/${month + 1}/${year}`;

    //image upload to imageBB
    const formData = new FormData();
    formData.append("image", image);
    fetch(
      `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_IMAGEBB_KEY}`,
      {
        method: "POST",

        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.url);
        const addProductInfo = {
          productName,
          image: data.data.url,
          model,
          location,
          resalePrice,
          originalPrice,
          useYear,
          conditionType,
          purchaseYear,
          description,
          saleStatus: "available",
          sellerName,
          sellerEmail,
          phone,
          postTime: time,
          date,
        };
        fetch("https://budget-car-server.vercel.app/allCar", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(addProductInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                icon: "success",
                text: "product is successfully added",
              });
              form.reset();
              navigate("/dashboard/myProducts");
            }
            console.log(data);
          });
      });
  };
  return (
    <section className="p-6 bg-gray-100 text-gray-900 ">
      <form
        onSubmit={handleSubmit}
        className="container flex flex-col mx-auto  "
      >
        <fieldset className="p-6 rounded-md shadow-sm bg-gray-50">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="productName" className="text-sm">
                Product Name
              </label>
              <input
                name="productName"
                id="productName"
                type="text"
                placeholder="Product Name"
                className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="" className="text-sm">
                Product Photo
              </label>
              <input
                name="image"
                type="file"
                className="file-input file-input-bordered w-full "
                required
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="location" className="text-sm">
                Location
              </label>
              <input
                name="location"
                id="location"
                type="text"
                placeholder=""
                className="w-full rounded-md  px-4 py-3 focus:outline-none border  text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="model" className="text-sm">
                Car Model
              </label>
              <input
                name="model"
                id="model"
                type="text"
                placeholder=""
                className="w-full rounded-md  px-4 py-3 focus:outline-none border  text-gray-900"
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="conditionType" className="text-sm">
                Condition Type
              </label>
              <select
                onChange={(e) => setConditionType(e.target.value)}
                className="select select-bordered focus:outline-none w-full max-w-xs"
              >
                <option value="Excellent" defaultValue>
                  Excellent
                </option>

                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="resalePrice" className="text-sm">
                Resale Price
              </label>
              <input
                required
                name="resalePrice"
                id="resalePrice"
                type="text"
                placeholder=""
                className="w-full  px-4 py-3 rounded-md  focus:outline-none border text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="originalPrice" className="text-sm">
                Original Price
              </label>
              <input
                name="originalPrice"
                id="originalPrice"
                type="text"
                placeholder=""
                className="w-full  px-4 py-3 rounded-md  focus:outline-none border "
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="useYear" className="text-sm">
                Year of Use
              </label>
              <input
                name="useYear"
                id="useYear"
                type="text"
                placeholder=""
                className="w-full  px-4 py-3 rounded-md  focus:outline-none border "
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="purchaseYear" className="text-sm">
                Purchase Year
              </label>
              <input
                name="purchaseYear"
                id="purchaseYear"
                type="text"
                placeholder=""
                className="w-full  px-4 py-3 rounded-md  focus:outline-none border "
                required
              />
            </div>
            <div className="col-span-full sm:col-span-4">
              <label htmlFor="description" className="text-sm">
                Description
              </label>
              <input
                name="description"
                id="description"
                type="text"
                placeholder=""
                className="w-full  px-4 py-3 rounded-md  focus:outline-none border "
              />
            </div>
          </div>
        </fieldset>
        <fieldset className=" p-6 rounded-md border-t-2 my-10 shadow-sm bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="text-2xl text-center mb-3 text-gray-700">
              Seller Information
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                name="username"
                id="username"
                type="text"
                defaultValue={user?.displayName}
                className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900"
                disabled
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                name="email"
                id="email"
                type="text"
                defaultValue={user.email}
                className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900"
                required
                disabled
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="phone" className="text-sm">
                Phone Number
              </label>
              <input
                name="phone"
                id="phone"
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md  focus:outline-none border text-gray-900"
                required
              />
            </div>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="bg-yellow-100 border-yellow-400 border my-6 px-5 py-3 cursor-pointer"
          />
        </fieldset>
      </form>
    </section>
  );
};

export default AddProduct;
