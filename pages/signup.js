import React, { Fragment, useContext } from "react";
import Content from "../Components/SignUp/Content";
import Navigation from "../Components/Index/Navigation";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const signup = () => {
  const router = useRouter();
  const submitHandler = (data) => {
    fetch("http://localhost:8080/auth/signup", {
      method: "PUT",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        name: data.name,
        phone: data.phone,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Account successfully created !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1500,
            theme: "light",
          });
          setTimeout(() => {
            router.push("/signin");
          }, 2000);
        } else {
          return res.json().then((data) => {
            let errorMessage = "Unable to create account";
            if (data.data[0].msg) {
              errorMessage = data.data[0].msg;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        // alert(err.message);
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
          theme: "light",
        });
      });
  };

  return (
    <Fragment>
      <ToastContainer />
      <Navigation />
      <Content onAdd={submitHandler} />
    </Fragment>
  );
};

export default signup;
