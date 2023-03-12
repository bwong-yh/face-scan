const USER_ID = import.meta.env.VITE_USER_ID;
const APP_ID = "face-scan";
const MODEL_ID = "face-detection";
const MODEL_VERSION_ID = "6dc7e46bc9124c5c8824be4822abe105";
const API_KEY = import.meta.env.VITE_CLARIFAI_KEY;

const configClarifai = (url) => {
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

      const targetUrl = `https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/outputs`;

  return {raw, targetUrl, API_KEY}
}

export default configClarifai