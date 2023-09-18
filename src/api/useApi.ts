import { useState } from "react";
import { ApiFunction } from "./api";

export function useApi(apiFunction: ApiFunction) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    try {
      const requestArgs = [...args];
      const result = await apiFunction(requestArgs);
      setData(result.data);
    } catch (err: any) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
}
