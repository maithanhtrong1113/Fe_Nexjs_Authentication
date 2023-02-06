import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Content = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.Login(data);
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="row mb-4">
                <div className="form-outline ">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    })}
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  {errors?.email?.type === "required" && (
                    <span className="text-danger">Không được để trống</span>
                  )}
                  {errors?.email?.type === "pattern" && (
                    <span className="text-danger">Định dạng email sai</span>
                  )}
                </div>
              </div>
              <div className="row mb-3">
                <div className="form-outline ">
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 8,
                    })}
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  {errors?.password?.type === "required" && (
                    <span className="text-danger">Không được để trống</span>
                  )}
                  {errors?.password?.type === "minLength" && (
                    <span className="text-danger">
                      Mật khẩu tối thiểu phải có 8 ký tự
                    </span>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" />
                  <label className="form-check-label">Remember me</label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-info btn-lg text-white"
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link href="/signup" className="link-info">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
