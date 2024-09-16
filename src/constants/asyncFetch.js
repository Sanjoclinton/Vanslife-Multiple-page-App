// Fetch Function
export async function fetchVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans";
  try {
    const res = await fetch(url);
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

export async function fetchHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  try {
    const res = await fetch(url);
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

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }
  // Parse the valid response and return the data
  return data;
}
