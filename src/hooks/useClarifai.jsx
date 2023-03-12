const PAT = import.meta.env.VITE_CLARIFAI_KEY;
const USER_ID = import.meta.env.VITE_USER_ID;
const APP_ID = "face-scan";
const MODEL_ID = "general-image-recognition";
const MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";

const useClarifai = () => {
  const fetchData = async (url) => {
    const raw = JSON.stringify({
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID,
      },
      inputs: [
        {
          data: {
            image: { url },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + PAT,
      },
      body: raw,
    };

    const targetUrl = `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`;

    try {
      const res = await fetch(targetUrl, requestOptions);
      const data = await res.text();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return [fetchData];
};

export default useClarifai;
