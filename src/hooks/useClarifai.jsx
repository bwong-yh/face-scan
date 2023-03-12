import axios from "axios";
import { useState } from "react";
import configClarifai from "../utils/configClarifai";

const useClarifai = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    const { raw, targetUrl, API_KEY } = configClarifai(url);

    setError(null);
    setIsLoading(true);

    try {
      const res = await axios.post(targetUrl, raw, {
        headers: {
          Accept: "application/json",
          Authorization: "Key " + API_KEY,
        },
      });
      const data = await res.data.outputs[0].data.regions;

      return data;
    } catch (err) {
      setError(
        "Unable to get image. Please check your image URL or try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, error];
};

export default useClarifai;
