import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../components/UI/Google";
import Facebook from "../components/UI/Facebook";
import axios from "axios";
import * as Yup from "yup";

export default function RegisterPage() {
  const Navigate = useNavigate();
  const HandleRegister = async (values) => {
    if (values.password !== values.password_confirmation) {
      alert("password doesn't match");
    } else {
      try {
        const payload = {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          password: values.password,
          password_confirmation: values.password_confirmation,
        };
        const res = await axios.post(
          "https://bookstore.eraasoft.pro/api/register",
          payload,
          
        );

        Navigate("/login");
        console.log(res.data);
      } catch (error) {
        console.log(error?.response?.data);
         console.log(error?.response?.data?.errors?.password?.[0]);
    console.log(error?.response?.data?.errors?.password_confirmation?.[0]);
      }
    }
  };
  const RegisterSchema = Yup.object({
    first_name: Yup.string().required("please enter your first name"),
    last_name: Yup.string().required("please enter your last name"),
    email: Yup.string().email("invalid email").required("please enter your email"),
    password: Yup.string().required("please enter your Password"),
    password_confirmation: Yup.string().required("please enter your Password"),
  });
  return (
    <div>
      <img
        className="w-full"
        src="/public/5176119115_f157862569_o 1.png"
        alt=""
      />
      <div className="form flex flex-col items-center justify-center pt-10 pb-30">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          onSubmit={HandleRegister}
          validationSchema={RegisterSchema}
        >
          <Form className="flex flex-col gap-3 mt-10 w-xl">
            <div className="Name flex gap-2 ">
              <div className="First_Name flex flex-col w-full ">
                <label htmlFor="first_name"  className="mb-1">
                  FirstName
                </label>
                <Field
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black"
                />
                <ErrorMessage name="first_name" className="text-[#D9176C]" component="span" />
              </div>
              <div className="Last_Name w-full flex flex-col">
                <label htmlFor="last_name" className="mb-1">
                  LastName
                </label>
                <Field
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black"
                />
                <ErrorMessage name="last_name" className="text-[#D9176C]" component="span" />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              id="Email"
              placeholder="example@gmail.com"
              className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black"
            />
            <ErrorMessage name="email" className="text-[#D9176C]" component="span" />
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black"
            />
            <ErrorMessage name="password" className="text-[#D9176C]" component="span" />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <Field
              type="Password"
              name="password_confirmation"
              id="password_confirmation"
              placeholder="Confirm Password"
              className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black"
            />
            <ErrorMessage name="password_confirmation" className="text-[#D9176C]" component="span" />
            <div className="Agree">
              <Field
                type="checkbox"
                name="Agree"
                id="Agree"
                placeholder="Agree"
                className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black mr-2 cursor-pointer"
              />
              <label htmlFor="Agree">
                Agree with{" "}
                <span className="text-[#D9176C] cursor-pointer">
                  Terms & Conditions.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="px-4 py-3 text-center bg-[#D9176C] rounded-md text-white"
            >
              Sign Up
            </button>
            <p className="text-center mt-5">
              Don't have an account?
              <Link to="/login" className="text-[#D9176C] font-medium ml-1">
                LogIn
              </Link>
            </p>
            <span className="text-center my-5 text-gray-400">or</span>
            <button><Google /></button>
            <button><Facebook /></button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
