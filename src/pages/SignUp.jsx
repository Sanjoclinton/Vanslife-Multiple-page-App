import React from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../constants/api";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    console.log(data);
    return redirect("/host");
  } catch (error) {
    let errorMessage;
    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "Email is already in use, try signing in";
        break;

      case "auth/invalid-email":
        errorMessage = "Invalid Email"
        break;

      case "auth/weak-password":
        errorMessage = "Weak password, please try again";
        break;

      default:
        errorMessage =
          "An error occured, check details and try signing up again";
    }
    console.log(errorMessage);
    return errorMessage;
  }
}

const SignUp = () => {
  const navigation = useNavigation();
  const error = useActionData();

  return (
    <>
      <div className="container py-4 text-center d-flex flex-column gap-4 ">
        <h1 className="w-100 fw-bold">Create an account</h1>

        {error && (
          <h3 className="text-danger fw-bold" style={{ fontSize: "15px" }}>
            {error}!
          </h3>
        )}

        <Form method="post" className="w-100" replace noValidate>
          <input type="email" name="email" placeholder="Email Address" />
          <input type="password" name="password" placeholder="Password" />

          <button
            disabled={navigation.state === "submitting"}
            className="p-3 text-white rounded border-0 w-100 mt-4 fw-semibold"
            style={{ background: "#ff8c38" }}
          >
            {navigation.state === "submitting" ? "Signing up" : "Sign up"}
          </button>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
