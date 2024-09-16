
import {
  useLoaderData,
  redirect,
  Form,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../constants/asyncFetch";

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
    const data = await loginUser({ email, password });

    localStorage.setItem("loggedIn", true);
    const response = redirect(redirectTo || "/host");
    response.body = true;
    return response;
  } catch (err) {
    return err.message;
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
          <input
            type="email"
            name="email"
            placeholder="Email Address"
          
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
           
          />

          <button disabled={navigation.state === "submitting"}
            className="p-3 text-white rounded border-0 w-100 mt-4 fw-semibold"
            style={{ background: "#ff8c38" }}
          >
            {navigation.state === "submitting" ? "Logging in" : "Log in"}
          </button>
        </Form>
      </div>
    </>
  );
};

export default Login;
