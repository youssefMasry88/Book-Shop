import { ErrorMessage,Form, Field, Formik } from "formik";
import React from "react";
import {  Link, useNavigate } from "react-router-dom";
import Google from "../components/UI/Google";
import Facebook from "../components/UI/Facebook";
import axios from "axios";
import * as Yup from "yup";

export default function LoginPage() {
  const Navigate = useNavigate();
  async function HandleLogin(values) {
    console.log(values);
    try {
      const payload = {
        email: values.email,
        password: values.Password,
      }
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        payload,
      );
      Navigate("/");
      console.log(res);
    } catch (error) {
  console.log(error?.response?.data); 
}
  }
  const LoginSchema = Yup.object({
    email: Yup.string().email("invalid email").required("please enter your email"),
    Password: Yup.string().required( "please enter your Password"),
  });
  return (
    <div>
      <img
        className="w-full"
        src="/public/5176119115_f157862569_o 1.png"
        alt=""
      />
      <h3 className="text-[#D9176C] text-center mt-10 font-medium">
        Welcome Back!
      </h3>
      <div className="form flex flex-col items-center justify-center pt-10 pb-30">
        <Formik
          initialValues={{ email: "", Password: "" }}
          validationSchema={LoginSchema}
          onSubmit={HandleLogin}
        >
          
          <Form className="flex flex-col gap-2 mt-10 w-xl">
            <label htmlFor="Email" className="font-medium">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="Email"
              placeholder="example@gmail.com"
              className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
            <label htmlFor="Password" className="font-medium">
              Password
            </label>
            <Field
              type="Password"
              name="Password"
              id="Password"
              placeholder="Enter Password"
              className="border-2 border-gray-300 rounded-md p-4  "
            />
            <ErrorMessage
              name="Password"
              component="p"
              className="text-red-500"
            />
            <div className="Password_action flex items-center justify-between my-2">
              <div className="remember flex items-center gap-2">
                <Field type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forget-password">
                <Link
                  to="/forgot-password"
                  className="text-[#D9176C] font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="px-4 py-2.5 text-center bg-[#D9176C] rounded-md text-white"
            >
              
              Log in
            </button>
            <p className="text-center mt-5">
              Don't have an account?
              <Link to="/register" className="text-[#D9176C] font-medium ml-1">
                Sign up
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
