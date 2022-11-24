import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const [accountStatus, setAccountStatus]=useState("buyer")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, googleSignIn,updateUserName } = useContext(AuthContext);
  const onSubmit = (data) => {
    const newlyCreatedAccount = {
      username: data.username,
      userEmail: data.email,
      accountStatus : accountStatus
    }

    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("user created successfully");
        updateUserName(data.username)
          .then(result => {
            fetch('http://localhost:5000/allAccounts', {
              method: "POST",
              headers: {
                "content-type":"application/json"
              },
              body:JSON.stringify(newlyCreatedAccount)
            })
              .then(res => res.json())
            .then(data=>console.log(data))
          })
        .catch(err=>console.log(err))
        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  //google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("successfully logged in");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-yellow-50 text-gray-800 my-20 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-5">Please Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label
            htmlFor="username"
            className="block text-gray-600 font-semibold "
          >
            Username
          </label>
          <input
            type="text"
            {...register("username", { required: "* required field" })}
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-sm border-b border-b-yellow-400 focus:outline-none bg-yellow-50 "
          />
          {/* {errors.username && <span className="text-red-600">{errors.username}</span>} */}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-600 font-semibold ">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "* required field" })}
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-sm border-b border-b-yellow-400 focus:outline-none bg-yellow-50 "
          />
          {/* {errors.email && <span className="text-red-600">{errors.email}</span>} */}
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="password"
            className="block text-gray-600 font-semibold "
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "* required field" })}
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-sm border-b border-b-yellow-400 focus:outline-none bg-yellow-50"
          />
          {/* {errors.password && <span className="text-red-600">{errors.password}</span>} */}
        </div>
        <div className="space-y-1 text-sm">
          <p>What kind of account do you want ?</p>
          <div>
          <input onClick={()=>setAccountStatus('buyer')} type="radio" id="buyer" name="accountStatus" value="Buyer" /> {" "}
          <label htmlFor="buyer">Buyer</label>
          </div>
         
          <div>
          <input onClick={()=>setAccountStatus('seller')} type="radio" id="seller" name="accountStatus" value="Seller" /> {" "}
          <label htmlFor="seller">Seller</label>
          </div>
         
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="block w-full bg-yellow-100 p-2 text-center rounded-sm border-2 text-xl border-l-yellow-400 border-r-zinc-700 border-t-zinc-700 border-b-yellow-400 text-zinc-700 "
        />
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3  text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleGoogleLogin}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full bg-yellow-100 p-2 space-x-4 text-xl rounded-sm border-2 border-l-yellow-400 border-r-zinc-700 border-t-zinc-700 border-b-yellow-400 text-zinc-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Continue with Google</p>
        </button>
      </div>
      <p className="text-sm text-center sm:px-6 text-gray-600">
        Already have an account?
        <Link
          to="/login"
          className=" text-gray-800 ml-3 font-semibold hover:text-yellow-600"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
