import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Content = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    props.onAdd(data);
  };

  return (
    <section className="h-100 h-custom header1">
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-6 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <h3 className="pb-2 pb-md-0 mb-md-5 px-md-2 text-center text-info fw-bold">
                  Create a Account
                </h3>
                <form
                  className="px-md-2"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <div className="row mb-3">
                    <div className="col-md-12 inputBox">
                      <input
                        {...register("name", {
                          required: true,
                          maxLength: 20,
                        })}
                        type="text"
                        className="form-control"
                      />
                      <span className="mx-3 my-2 text-info">Name:</span>
                    </div>
                    {errors?.name?.type === "required" && (
                      <span className="text-danger">Tên không được trống</span>
                    )}
                    {errors?.name?.type === "maxLength" && (
                      <span className="text-danger">
                        Tên không vượt qua 20 ký tự
                      </span>
                    )}
                  </div>

                  <div className="row mb-3">
                    <div className=" col-md-12  inputBox">
                      <input
                        {...register("email", {
                          required: true,
                          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        })}
                        type="text"
                        className="form-control"
                      />
                      <span className="mx-3 my-2 text-info">Email:</span>
                    </div>
                    {errors?.email?.type === "required" && (
                      <span className="text-danger">Không được để trống</span>
                    )}
                    {errors?.email?.type === "pattern" && (
                      <span className="text-danger">Định dạng email sai</span>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12 inputBox">
                      <input
                        {...register("phone", {
                          required: true,
                          pattern:
                            /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/i,
                        })}
                        type="tel"
                        className="form-control"
                      />
                      <span className="mx-3 my-2 text-info">Phone:</span>
                    </div>
                    {errors?.phone?.type === "required" && (
                      <span className="text-danger">Không được để trống</span>
                    )}
                    {errors?.phone?.type === "pattern" && (
                      <span className="text-danger">
                        Số điện thoại không tồn tại
                      </span>
                    )}
                  </div>
                  <div className="row  mb-3">
                    <div className=" col-md-12  inputBox">
                      <input
                        {...register("password", {
                          required: true,
                          minLength: 8,
                        })}
                        type="password"
                        className="form-control"
                      />
                      <span className="mx-3 my-2 text-info">Password:</span>
                    </div>
                    {errors?.password?.type === "required" && (
                      <span className="text-danger">Không được để trống</span>
                    )}
                    {errors?.password?.type === "minLength" && (
                      <span className="text-danger">
                        Mật khẩu tối thiểu phải có 8 ký tự
                      </span>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className=" col-md-12   inputBox">
                      <input
                        {...register("password_repeat", {
                          required: true,
                          validate: (value) =>
                            value === watch("password", "") ||
                            "Mật khẩu không trùng",
                        })}
                        type="password"
                        className="form-control"
                      />
                      <span className="mx-3 my-2 text-info">
                        Confirm password:
                      </span>
                    </div>
                    {errors?.password_repeat?.type === "required" && (
                      <span className="text-danger">Không được để trống</span>
                    )}
                    {errors.password_repeat && (
                      <span className="text-danger">
                        {errors.password_repeat.message}
                      </span>
                    )}
                  </div>
                  <div className="row mb-2">
                    <Link
                      className="text-center fw-bold  text-info"
                      href="/signin"
                    >
                      Login with existing account
                    </Link>
                  </div>
                  <div className="row">
                    <button
                      className="btn btn-info btn-lg mb-1 justify-content-between text-white fw-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
