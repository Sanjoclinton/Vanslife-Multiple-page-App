import {
  useLoaderData,
  redirect,
  Form,
  useActionData,
  useNavigation,
  Link
} from "react-router-dom";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../constants/api";

// Loader
export async function loader({ request }) {
  const message = new URL(request.url).searchParams.get("message");

  return message;
}

// Form action
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const redirectTo = new URL(request.url).searchParams.get("redirectTo");
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // const data = await loginUser({ email, password });

    return redirect(redirectTo || "/host");
  } catch (error) {
    console.log(error.message, error.code);
    let customMessage = "";

    switch (error.code) {
      case "auth/invalid-credential":
        customMessage = "Invalid Credentials";
        break;
      case "auth/email-already-in-use":
        customMessage = "This email is already registered.";
        break;
      case "auth/weak-password":
        customMessage = "The password is too weak.";
        break;
      default:
        customMessage = error.message; // Fallback to default message
    }
    // Display the custom message
    console.log(customMessage);
    return customMessage;
  }
}

const Login = () => {
  const message = useLoaderData();
  const error = useActionData();
  const navigation = useNavigation();

  return (
    <>
      <div className="container py-4 text-center d-flex flex-column gap-4 ">
        <h1 className="w-100 fw-bold">Sign in to your account</h1>
        {message && (
          <h3 className="text-danger fw-bold" style={{ fontSize: "15px" }}>
            {message}!
          </h3>
        )}
        {error && (
          <h3 className="text-danger fw-bold" style={{ fontSize: "15px" }}>
            {error}!
          </h3>
        )}

        <Form method="post" className="w-100" replace>
          <input type="email" name="email" placeholder="Email Address" />
          <input type="password" name="password" placeholder="Password" />

          <button
            disabled={navigation.state === "submitting"}
            className="p-3 text-white rounded border-0 w-100 mt-4 fw-semibold"
            style={{ background: "#ff8c38" }}
          >
            {navigation.state === "submitting" ? "Logging in" : "Log in"}
          </button>
        </Form>

        <p
          style={{
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          Don't have an account?{" "}
          <Link to="../signup"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              textAlign: "center",
              color: " #FF8C38",
            }}
          >
            Create one now!
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
