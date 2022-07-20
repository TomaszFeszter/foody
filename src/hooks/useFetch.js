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
      fetch(url, {
        method,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined,
          ...headers,
        },
        ...customConfig,
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setStatus("success");
        })
        .catch((err) => {
          setError(err);
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
  };
};

export default useFetch;
