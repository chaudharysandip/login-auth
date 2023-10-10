import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import CardDetail from "./CardContent";

const CardList = () => {
  const [data, setData] = useState(null);

  let url = "https://api-qa.sojhai.com/api/v1/home";
  // let url = "https://www.avsschool.edu.np/public/api";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        const data = res?.data;
        setData(data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={6}>
        {data &&
          data?.categories.map((item) => {
            return (
              item &&
              item.posts.map((postItem, i) => {
                return <CardDetail postItem={postItem} key={i + "__"} />;
              })
            );
          })}
      </Grid>
    </Container>
  );
};

export default CardList;
