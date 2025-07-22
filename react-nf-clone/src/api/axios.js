import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4f8863189c41b3ed16feb5564ca8475f",
    language: "ko-KR",
  },
});

export default instance;
