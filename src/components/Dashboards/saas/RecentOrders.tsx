import {
  Box,
  Card,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { H5, Small } from "components/Typography";
import { FC } from "react";
import ScrollBar from "simplebar-react";

const commonCSS = {
  minWidth: 120,
  "&:nth-of-type(2)": { minWidth: 170 },
  "&:nth-of-type(3)": { minWidth: 80 },
};

// Styled components
const HeadTableCell = styled(TableCell)(() => ({
  fontSize: 12,
  fontWeight: 600,
  "&:first-of-type": { paddingLeft: 0 },
  "&:last-of-type": { paddingRight: 0 },
}));

const BodyTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  padding: 0,
  paddingLeft: "1rem",
  paddingTop: "0.7rem",
  "&:first-of-type": { paddingLeft: 0 },
  "&:last-of-type": { paddingRight: 0 },
  [theme.breakpoints.down("sm")]: { ...commonCSS },
  [theme.breakpoints.between(960, 1270)]: { ...commonCSS },
}));

const RecentOrders: FC = () => {
  return (
    <Card sx={{ padding: "2rem" }}>
      <H5>Recent Results - TOP</H5>

      <ScrollBar>
        <Table>
          <TableHead
            sx={{ borderBottom: "1.5px solid", borderColor: "divider" }}
          >
            <TableRow>
              <HeadTableCell>KTU Reg</HeadTableCell>
              <HeadTableCell>Student Name</HeadTableCell>
              <HeadTableCell>Semester</HeadTableCell>
              <HeadTableCell>CGPA</HeadTableCell>
              {/* <HeadTableCell>Total amount</HeadTableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {orderList.map((item, index) => (
              <TableRow key={index}>
                <BodyTableCell>{item.orderNo}</BodyTableCell>
                <BodyTableCell>
                  <Box display="flex" alignItems="center">
                    <img src={item.image} alt="product title" width="40px" />
                    <Small ml="1rem">{item.name}</Small>
                  </Box>
                </BodyTableCell>
                <BodyTableCell>{item.price}</BodyTableCell>
                <BodyTableCell>
                  <Box
                    sx={{
                      backgroundColor: "secondary.200",
                      borderRadius: 11,
                      maxWidth: 55,
                      padding: "0.3rem",
                      textAlign: "center",
                      color: "secondary.400",
                    }}
                  >
                    {item.totalOrder}
                  </Box>
                </BodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollBar>
    </Card>
  );
};

const orderList = [
  {
    orderNo: "KGR20CS043",
    name: "Spear",
    image: "/static/avatar/001-man.svg",
    price: "S6",
    totalOrder: 9.5,
    // totalAmount: "$1,45,660",
  },
  {
    orderNo: "KGR20CS044",
    name: "Spear Pro",
    image: "/static/avatar/001-man.svg",
    price: "S6",
    totalOrder: 9.3,
    // totalAmount: "$1,45,420",/
  },
  {
    orderNo: "KGR20CS045",
    name: "5P34R",
    image: "/static/avatar/001-man.svg",
    price: "S6",
    totalOrder: 7.8,
    // totalAmount: "$45,660",
  },
  {
    orderNo: "KGR20CS046",
    name: "5P34R Pro",
    image: "/static/avatar/001-man.svg",
    price: "S6",
    totalOrder: "7.5",
    // totalAmount: "$12,660",
  },
];

export default RecentOrders;
