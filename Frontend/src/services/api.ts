import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-model-arena-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const invokeArena = async (input: string) => {
  try {
    const response = await api.post("/invoke", {
      input,
    });

    return response.data;
  } catch (error) {
    console.error("Arena API Error:", error);
    throw error;
  }
};

export default api;