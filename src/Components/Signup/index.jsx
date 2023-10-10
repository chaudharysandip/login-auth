import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { app } from "../../firebase/firebase";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { RotatingTriangles } from "react-loader-spinner";

const SignupFormStyle = styled("div")(({ theme }) => ({
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
}));

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        toast.success("User Created Successfully!");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        toast.error("Error Created User", err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  return (
    <section className="signup">
      <SignupFormStyle>
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
            onSubmit={handleSubmit}
            ref={formRef}
          >
            {loader ? (
              <Box
                sx={{
                  height: "300px",
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
                  Create New User
                </Typography>
                <Grid container spacing={4}>
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
                  <Grid item sm={12} md={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        boxShadow: "none",
                        borderRadius: 2,
                        padding: "10px 20px",
                      }}
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        </Container>
      </SignupFormStyle>
      <Toaster />
    </section>
  );
};

export default Signup;
