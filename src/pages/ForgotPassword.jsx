import { Field, Formik } from "formik";
import React from "react";
import { Form } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="w-full">
      <img
        className="w-full"
        src="/public/5176119115_f157862569_o 1.png"
        alt=""
      />
      <div className="form flex flex-col items-center justify-center pt-10 pb-30">
        <h1 className="text-[#D9176C] text-center mt-10 font-medium">
          Forget Password ?
        </h1>
        <span className="text-center text-gray-400 py-[1em]">Enter your email to reset your password</span>
        <Formik>
          <Form className="flex flex-col w-xl gap-4 ">
            <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          name="email"
                          id="Email"
                          placeholder="example@gmail.com"
                          className="border-2 border-gray-300 rounded-md p-4 placeholder:text-gray-400 text-black"
                        />
                          <button
              type="submit"
              className="px-4 py-3 text-center bg-[#D9176C] rounded-md text-white"
            >
              Send reset code
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
