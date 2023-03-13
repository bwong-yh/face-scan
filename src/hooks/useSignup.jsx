import axios from "axios";
import { useState } from "react";

const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (username, email, password) => {
    setError(null);
    setIsLoading(true);

    try {
      if (!username || !email || !password)
        throw new Error("Please fill all fields");

      const res = await axios.post("/api/users", {
        username,
        email,
        password,
      });

      return res.data;
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [register, isLoading, error];
};

export default useSignup;
