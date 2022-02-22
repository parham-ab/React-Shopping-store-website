import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
const GetProducts = async () => {
  const result = await axios.get(`${BASE_URL}/products`);
  return result.data;
};
export { GetProducts };
