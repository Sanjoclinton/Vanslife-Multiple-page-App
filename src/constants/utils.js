import { redirect } from "react-router-dom";

export async function requireAuth(pathName) {
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!isLoggedIn) {
  
    const response = redirect(
      `/login?message=You must log in first&redirectTo=${pathName}`
    );
    response.body = true; //Test.
    return response;
  }

  return null;
}

export const authLoader = (loaderFunction) => {
  // We want this to return require auth if there is a response or return loader function
  // That is an asynchronous action
  return async ({ params, request }) => {
    // Check for path name on request, so we can redirect after log in
    const pathName = new URL(request.url).pathname;

    // Pass pathname into require auth and ad as a search param &pathname
    const response = await requireAuth(pathName);
    // If not loggedin it returns a response and block loader from loading data
    if (response) {

      return response;
    }
    // If logged in, return loaded data.
    return loaderFunction ? await loaderFunction({params}) : null;
  };
};
