import { useCallback, useState } from "react";

const useFetch = (url, initialConfig = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");

  const run = useCallback(
    ({
      method = "GET",
      token,
      headers = {},
      ...customConfig
    } = initialConfig) => {
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
    [url, initialConfig]
  );

  return {
    data,
    isSuccess: status === "success",
    isLoading: status === "loading" || status === "idle",
    isError: status === "error",
    error,
    run,
  };
};

export default useFetch;
