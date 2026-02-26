import http from "./http";

const GetSingleProducts = async (productId) => {
  const result = await http.get(`/products/${productId}`);
  return result.data;
};
export { GetSingleProducts };
