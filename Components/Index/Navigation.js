import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  const { data: session, status } = useSession();
  const logOutHandler = () => {
    if (status === "authenticated") {
      console.log(session);
    }
    signOut();
  };
  return (
    <Navbar expand={"lg"} className="bg-white navbar-light px-4 px-lg-5">
      <Link href="/" className="navbar-brand">
        <h2 className="text-info fw-bold">
          <img
            src="images/icon-1.png"
            style={{ width: "45px" }}
            className="me-2 img-fluid"
          ></img>
          CryptoCoin
        </h2>
      </Link>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className="py-4 py-lg-0 ">
        <Nav className="ms-auto " navbar>
          {!session && (
            <NavItem>
              <Link href="/signin" className="nav-link bg-info text-white">
                Sign In
              </Link>
            </NavItem>
          )}
          {session && (
            <NavItem>
              <Link href="/me" className="nav-link mx-2 bg-info text-white ">
                Profile
              </Link>
            </NavItem>
          )}
          {session && (
            <NavItem>
              <Link
                href="/"
                className="nav-link ms-2 bg-danger text-light"
                onClick={logOutHandler}
              >
                Logout
              </Link>
            </NavItem>
          )}
          {!session && (
            <NavItem>
              <Link href="/signup" className="nav-link mx-2 bg-info text-white">
                Sign Up
              </Link>
            </NavItem>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
