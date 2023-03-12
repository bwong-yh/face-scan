import axios from "axios";
import configClarifai from "../utils/configClarifai";

const useClarifai = () => {
  const fetchData = async (url) => {
    const { raw, targetUrl, API_KEY } = configClarifai(url);

    try {
      const res = await axios.post(targetUrl, raw, {
        headers: {
          Accept: "application/json",
          Authorization: "Key " + API_KEY,
        },
      });
      const data = await res.data.outputs[0].data.concepts;

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return [fetchData];
};

export default useClarifai;
