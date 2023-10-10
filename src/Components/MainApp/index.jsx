import { useEffect, useState } from "react";
import Counter from "../Counter";
import TableList from "../Table-list";
import { Box, useTheme } from "@mui/material";
import { RotatingSquare } from "react-loader-spinner";

const MainApp = () => {
  const [loader, setLoader] = useState(true);
  const theme = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  return loader ? (
    <Box
      sx={{
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RotatingSquare
        height="100"
        width="100"
        color={theme.palette.secondary.main}
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  ) : (
    <main>
      <TableList />
      {/* <Counter /> */}
    </main>
  );
};

export default MainApp;
