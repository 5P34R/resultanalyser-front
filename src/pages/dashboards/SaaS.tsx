import { Box, Grid, useTheme } from "@mui/material";
import Analytics from "components/Dashboards/saas/Analytics";
import SaaSCard from "components/Dashboards/saas/Card";
import Footer from "components/Dashboards/saas/Footer";
import RecentOrders from "components/Dashboards/saas/RecentOrders";
import TopSelling from "components/Dashboards/saas/TopSelling";
import TotalSpent from "components/Dashboards/saas/TotalSpent";
import useTitle from "hooks/useTitle";
import BucketIcon from "icons/BucketIcon";
import EarningIcon from "icons/EarningIcon";
import PeopleIcon from "icons/PeopleIcon";
import WindowsLogoIcon from "icons/WindowsLogoIcon";
import { FC } from "react";

const SaaS: FC = () => {
  // change navbar title
  useTitle("Resulter");

  const theme = useTheme();

  const cardList = [
    {
      price: 574,
      Icon: PeopleIcon,
      title: "All Students",
      color: theme.palette.primary.main,
    },
    {
      price: 521,
      title: "All Boys",
      Icon: PeopleIcon,
      color: theme.palette.primary.purple,
    },
    {
      price: 684,
      Icon: PeopleIcon,
      title: "All Girls",
      color: theme.palette.primary.red,
    },
    {
      price: 321,
      Icon: PeopleIcon,
      title: "No.of New admissions",
      color: theme.palette.primary.yellow,
    },
  ];

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <SaaSCard card={card} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4} pt={4}>
        <Grid item lg={8} md={7} xs={12}>
          <TotalSpent />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <Analytics />
        </Grid>

        <Grid item lg={8} md={7} xs={12}>
          <RecentOrders />
        </Grid>
        <Grid item lg={4} md={5} xs={12}>
          <TopSelling />
        </Grid>

        {/* <Grid item xs={12}>
          <Footer imageLink="/static/illustration/sass-dashboard.svg" />
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default SaaS;
