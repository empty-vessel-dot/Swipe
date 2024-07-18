import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL = "https://swipe-backend-iaom.onrender.com";

  const handelRegister = async () => {
    if (!name || !email || !password) {
      return alert("Please fill all fields!!");
    }
    try {
      const { data } = await axios.post(`${URL}/user/register`, {
        name: name,
        email: email,
        password: password,
      });
      if (data?.success) {
        alert("Successfully registered!!");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen bg-[url('https://www.inventiva.co.in/wp-content/uploads/2021/08/payment-gateway.png')] bg-cover ">
      <div className="flex justify-end h-full items-center p-4 gap-5 backdrop-blur-sm">
        <div className="bg-blue-200  w-[400px] mr-10 place-self-center bg-opacity-75 rounded-xl flex flex-col p-4">
          <h1 className="place-self-center mt-8 font-black text-4xl">
            REGISTER
          </h1>

          <input
            className="p-3 rounded-xl w-[350px] mt-10 place-self-center outline-none"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="p-3 rounded-xl w-[350px] mt-10 place-self-center outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-3 rounded-xl w-[350px] mt-10 place-self-center outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="p-4 rounded-xl bg-violet-500 hover:bg-violet-400 font-bold w-fit mt-14 place-self-center"
            onClick={handelRegister}
          >
            Register
          </button>
          <h1 className="font-bold text-xl place-self-center mt-5 ">Or</h1>
          <h1 className="font-semibold text-xl place-self-center mt-5">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:font-bold hover:underline underline-offset-4"
            >
              Login
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
