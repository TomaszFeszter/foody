import { useCallback, useState } from "react";

const useFetch = (initialUrl, initialConfig = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  const run = useCallback(
    (
      url = initialUrl,
      { method = "GET", token, headers = {}, ...customConfig } = initialConfig
    ) => {
      setStatus("loading");
      return fetch(url, {
        method,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
          ...headers,
        },
        ...customConfig,
      })
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson ? await response.json() : null;
          if (!response.ok) {
            // get error message from body or default to response status
            return Promise.reject(data);
          }
          setData(data);
          setStatus("success");
          return data;
        })
        .catch((err) => {
          setError(err);
          console.log(err);
          setStatus("error");
        });
    },
    [initialUrl, initialConfig]
  );

  return {
    data,
    isSuccess: status === "success",
    isLoading: status === "loading",
    isError: status === "error",
    error,
    run,
    setData,
  };
};

export default useFetch;
