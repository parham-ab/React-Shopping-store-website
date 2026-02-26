import { useContext } from "react";
import { Container, Grid } from "@mui/material";
// context
import { ProductContext } from "../contexts/ProductContextProvider";
// components
import Products from "./common/Products";
import Loading from "./Loading";
const Store = () => {
  const products = useContext(ProductContext);

  return (
    <Container>
      <Grid container>
        {products.length ? (
          products?.map((product) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              p={2}
              mt={8}
              key={product.id}
            >
              <Products productData={product} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Loading />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Store;
