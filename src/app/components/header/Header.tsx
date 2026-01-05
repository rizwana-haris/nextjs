
import Link from 'next/link';
import { AiOutlineSearch } from "react-icons/ai";
import styles from './Header.module.css';

export default function Header() {
   return (
    <header
      className=" text-white py-2 px-3"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center gx-3">
          <div className="col-auto">
            <Link className="navbar-brand fw-bold fs-3" href="/">
              <span className={styles.brandAdd}>ADD</span>
              <span className={styles.brandKart}>KART</span>
            </Link>
          </div>

          <div className="col-auto d-none d-md-block">
            <div className="text-white small">
              <div style={{ lineHeight: 1 }}>Deliver to</div>
              <i className="bi bi-geo-alt-fill me-1"></i>
              <strong>Location</strong>
            </div>
          </div>

          <div className="col-md-9 col-sm-6">
            <div className="input-group">
              <select className="form-select" style={{ maxWidth: "70px" }}defaultValue="All">
                  <option value="All">All</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Search AddKart"
              />
              <button className="btn btn-warning">
                 <AiOutlineSearch size={24} color="#000" />
              </button>
            </div>
          </div>

          <div className="col-auto d-none d-xl-block text-end">
            <small>Hello, sign in</small>
            <br />
            <strong>
              Account & Lists <i className="bi bi-caret-down-fill"></i>
            </strong>
          </div>

          <div className="col-auto d-none d-xl-block text-end">
            <small>Returns</small>
            <br />
            <strong>& Orders</strong>
          </div>
        </div>
      </div>
    </header>
  );
}
