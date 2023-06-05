import { Box, Card, Rating } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H5, Small } from "components/Typography";
import { FC } from "react";

const TopSelling: FC = () => {
  return (
    <Card sx={{ padding: "2rem", height: "100%" }}>
      <H5>Top Supply students</H5>

      {productList.map((product, index) => (
        <FlexBox key={index} mt="1.2rem">
          <img src={product.image} alt="Men Keds" width="90px" />

          <Box display="flex" flexDirection="column" ml="1rem">
            <Small>{product.title}</Small>
            {/* <Rating
              name="read-only"
              size="small"
              defaultValue={product.rating}
              readOnly
              sx={{ my: "3px" }}
            /> */}
            <Small fontWeight={600}>no.of supply: {product.rating}</Small>
            <Small fontWeight={600}>CGPA: {product.price}</Small>
          </Box>
        </FlexBox>
      ))}
    </Card>
  );
};

const productList = [
  {
    title: "Amal",
    image: "/static/avatar/001-man.svg",
    price: 5.4,
    rating: 15,
  },
  {
    title: "Ajay",
    image: "/static/avatar/001-man.svg",
    price: 5.7,
    rating: 12,
  },
  {
    title: "Prajwal",
    image: "/static/avatar/001-man.svg",
    price: 6,
    rating: 5,
  },
];

export default TopSelling;
