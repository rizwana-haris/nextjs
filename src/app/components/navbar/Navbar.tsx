'use client'

import Link from "next/link";
import { createContext } from "react";
import { BsCart } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about-us">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact-us">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/cart">
                <BsCart size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );}


