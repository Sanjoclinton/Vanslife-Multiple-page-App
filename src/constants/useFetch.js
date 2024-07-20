import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Resource could not be fetched");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.vans);
        setIsPending(false);
        setError(null);

      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
        setData(null);
    
      });

    //   return () => controller.abort();
  }, [url]);

  return { data, error, isPending };
};

export default useFetch;
