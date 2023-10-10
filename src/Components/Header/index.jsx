import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Image from "./../../assets/Images/logo.png";

const HeaderStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(4, 0),
  "& .logo-holder": {
    "& img": {
      maxHeight: "80px",
    },
  },
  "& ul": {
    "& li": {
      display: "inline-block",
      "&:not(:last-child)": {
        marginRight: theme.spacing(4),
      },
      "& a": {
        color: theme.palette.text.gray,
        transition: "all .3s ease-out",
        "&:hover": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  "& .MuiButtonBase-root": {
    borderRadius: "8px",
    minWidth: "120px",
    boxShadow: "none",
  },
}));

const Header = () => {
  return (
    <HeaderStyle>
      <header>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box className="logo-holder">
            <img src={Image} alt="img" />
          </Box>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="#">Resume</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
          <Box
            className="login-button-holder"
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Button variant="contained" LinkComponent={Link} to="/login">
              Login
            </Button>
            <Button variant="contained" LinkComponent={Link} to="/signup">
              Signup
            </Button>
          </Box>
        </Container>
      </header>
    </HeaderStyle>
  );
};

export default Header;
