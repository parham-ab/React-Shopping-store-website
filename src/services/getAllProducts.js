import http from "./http";

const GetAllProducts = async () => {
  const result = await http.get(`/products`);
  return result.data;
};
export { GetAllProducts };
