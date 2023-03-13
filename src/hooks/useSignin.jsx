import axios from "axios";
import { useState } from "react";

const useSignin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const signin = async (email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      if (!email || !password) throw new Error("Email and password required");

      const res = await axios.post("/api/signin", {
        email,
        password,
      });

      return res.data;
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [signin, isLoading, error];
};

export default useSignin;
