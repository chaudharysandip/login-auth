import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./../../firebase/firebase";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { RotatingTriangles } from "react-loader-spinner";

const LoginFormStyle = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(0deg,transparent,#fff 0,#ff8fab1f 50%,transparent)",
  "& .title": {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.gray,
  },
  "& .MuiFormControl-root": {
    "& .MuiInputBase-root": {
      borderRadius: "8px",
      fontFamily: "unset",
    },
  },
  "& .forgot-password, .signup": {
    color: theme.palette.primary.main,
  },
  "& .forgot-password": {
    fontSize: theme.typography.body2.fontSize,
    cursor: "pointer",
  },
  "& .MuiButtonBase-root": {
    boxShadow: "none",
    borderRadius: "8px",
    padding: "10px 20px",
  },
  "& .signup-account": {
    background: `${theme.palette.primary.main}0f`,
    color: theme.palette.text.gray,
    "&:hover": {
      background: `${theme.palette.primary.main}2f`,
    },
  },
}));

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const handleDirect = () => {
    navigate("/forgot-password");
  };
  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("Logged in successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log("Logged in error:", err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <section className="login">
      <LoginFormStyle>
        <Container>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            width={500}
            margin="0 auto"
            padding={4}
            sx={{
              boxShadow: "0 60px 45px 0 rgba(40,54,73,.1)",
              borderRadius: 3,
            }}
            onSubmit={loginUser}
          >
            {loader ? (
              <Box
                sx={{
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RotatingTriangles
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="rotating-triangels-loading"
                  wrapperStyle={{}}
                  wrapperClass="rotating-triangels-wrapper"
                  colors={[
                    `${theme.palette.primary.main}`,
                    `${theme.palette.secondary.main}`,
                    "#FF7E6B",
                  ]}
                />
              </Box>
            ) : (
              <>
                <Typography variant="h1" className="title" mb={4}>
                  Login Form
                </Typography>
                <Grid container spacing={4} mb={1}>
                  <Grid item sm={12} md={12}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      name="email"
                      fullWidth
                      error={!email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={12} md={12}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      name="password"
                      fullWidth
                      error={!password}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Typography
                  variant="h6"
                  className="forgot-password"
                  mb={4}
                  onClick={handleDirect}
                >
                  Forgot Password?
                </Typography>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mb: 4,
                  }}
                  fullWidth
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  LinkComponent={Link}
                  to="/signup"
                  fullWidth
                  className="signup-account"
                >
                  Don't have an account?{" "}
                  <Typography component="span" className="signup" ml={1}>
                    Sign up
                  </Typography>
                </Button>
              </>
            )}
          </Box>
        </Container>
      </LoginFormStyle>
      <Toaster />
    </section>
  );
};

export default Login;
