import { useContext } from "react";
import { Container, Grid } from "@mui/material";
import Products from "../../components/common/Products";
import { ProductContext } from "../../contexts/ProductContextProvider";
import Loading from "../../components/common/Loading";

const ProductsPage = () => {
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

export default ProductsPage;
