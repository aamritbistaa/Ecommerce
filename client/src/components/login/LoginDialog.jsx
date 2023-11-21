import React, { useState, useContext } from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../services/api.js";
import { DataContext } from "../../context/DataProvider.jsx";

const Component = styled(Box)`
  height: 70vh;
  /* width: 90vh; */
  display: flex;
  overflow: hidden;
`;
const LeftComponent = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat center 85%;
  width: 30%;
  padding: 45px 35px;
  color: white;
  height: 83%;
`;
const RightComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 40px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 10px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background-color: orange;
  color: white;
  height: 48px;
  border-radius: 5px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background-color: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  font-size: 14px;
  color: #a09b9b;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your orders, wishlist and recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subheading: "Signup with your mobile to get started ",
  },
};
const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const loginInitialValue = {
  username: "",
  password: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
    Toggleaccount(accountInitialValues.login);
    setError(false);
  };
  const [account, Toggleaccount] = useState(accountInitialValues.login);

  const toggleSignup = () => {
    Toggleaccount(accountInitialValues.signup);
  };

  const [signup, setSignup] = useState(signupInitialValues);
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const { setAccount } = useContext(DataContext);

  const signupUser = async () => {
    let res = await authenticateSignup(signup);
    if (!res) return;

    handleClose();
    setAccount(signup.firstname);
  };

  const [login, setLogin] = useState(loginInitialValue);
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState(false);
  const loginUser = async () => {
    let res = await authenticateLogin(login);
    console.log(res);
    if (res.status === 200) {
      handleClose();
      setAccount(res.data.data.firstname);
    } else {
      setError(true);
    }
  };
  return (
    <Dialog open={open} onClose={() => handleClose()}>
      <Component>
        <LeftComponent>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subheading}
          </Typography>
        </LeftComponent>
        {account.view === "login" ? (
          <RightComponent>
            <TextField
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
            />
            {error && (
              <Typography
                style={{
                  fontSize: "14px",
                  color: "red",
                  lineHeight: 0,
                  marginTop: "10px",
                }}>
                Please Enter valid username and password
              </Typography>
            )}
            <Text>Agree to flipkart's term and condition</Text>
            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>
              New to site? Create an account
            </CreateAccount>
          </RightComponent>
        ) : (
          <RightComponent>
            <TextField
              variant="standard"
              label="Enter First Name"
              onChange={(e) => onInputChange(e)}
              name="firstname"
            />
            <TextField
              variant="standard"
              label="Enter Last Name"
              onChange={(e) => onInputChange(e)}
              name="lastname"
            />
            <TextField
              variant="standard"
              label="Enter Username"
              onChange={(e) => onInputChange(e)}
              name="username"
            />
            <TextField
              variant="standard"
              label="Enter Email"
              onChange={(e) => onInputChange(e)}
              name="email"
            />
            <TextField
              variant="standard"
              label="Enter Password"
              onChange={(e) => onInputChange(e)}
              name="password"
            />
            <TextField
              variant="standard"
              label="Enter Phone"
              onChange={(e) => onInputChange(e)}
              name="phone"
            />
            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </RightComponent>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
