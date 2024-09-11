// Fetch Function
export async function fetchVans(url) {
  try {
    const res = await fetch(url);
    res.ok = false;
    if (!res.ok) {
      throw {
        message: "HTTP Error!",
        status: res.status,
        statusText: res.statusText,
      };
    }
    const data = await res.json();
    return data.vans;
  } catch (error) {
    throw {
      message: error.message || "Failed to fetch vans",
      status: error.status || 400,
      statusText: error.statusText || "Bad request",
    };
  }
}
