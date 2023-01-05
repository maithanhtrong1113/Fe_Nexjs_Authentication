import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

function Content() {
  const [name, setName] = useState("dump");
  const [phone, setPhone] = useState("dump");
  const [email, setEmail] = useState("dump@gmail.com");

  return (
    <Fragment>
      <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3" style={{ bordeRadius: "0.5rem" }}>
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white me">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar"
                      className="img-fluid my-5"
                      style={{ width: "80px" }}
                    />
                    <h5>{name}</h5>
                    <p>Web Designer</p>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div>
                          <h6>Email:</h6>
                          <p className="text-info">{email}</p>
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className=" mb-3">
                          <h6>Phone:</h6>
                          <p className="text-info">{phone}</p>
                        </div>
                      </div>

                      <h6>Projects</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 ">
                          <h6>Recent</h6>
                          <p className="text-muted">Lorem ipsum</p>
                        </div>
                        <div className="col-6 ">
                          <h6>Most Viewed</h6>
                          <p className="text-muted">Dolor sit amet</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Content;
