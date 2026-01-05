
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ftop}>
        <div className={styles.fpara}>

          <div className={styles.fpara1}>
            <div className={styles.fparahead}>
              <p>Get to Know Us</p>
            </div>
            <div className={styles.fparainfo}>
              <a href="">About AddKart</a>
              <a href="">Services</a>
              <a href="">Careers</a>
            </div>
          </div>

          <div className={styles.fpara1}>
            <div className={styles.fparahead}>
              <p>Shop with Us</p>
            </div>
            <div className={styles.fparainfo}>
              <a href="">Your Account</a>
              <a href="">Your Orders</a>
              <a href="">Your Address</a>
              <a href="">Your Lists</a>
            </div>
          </div>

          <div className={styles.fpara1}>
            <div className={styles.fparahead}>
              <p>Make Money with Us</p>
            </div>
            <div className={styles.fparainfo}>
              <a href="">Protect and build your brands</a>
              <a href="">Sell on AddKart</a>
              <a href="">Fulfillment by AddKart</a>
              <a href="">Supply to AddKart</a>
              <a href="">Become an Affiliate</a>
              <a href="">Advertise Your Products</a>
            </div>
          </div>

          <div className={styles.fpara1}>
            <div className={styles.fparahead}>
              <p>Let Us Help You</p>
            </div>
            <div className={styles.fparainfo}>
              <p>Help</p>
              <p>Shipping & Delivery</p>
              <p>Returns & Replacements</p>
              <p>AddKart App Download</p>
            </div>
          </div>

          <div className={styles.fpara1}>
            <div className={styles.fparahead}>
              <p>Registered Office Address:</p>
            </div>
            <div className={styles.fparainfo}>
              <p>Addkart Internet Pvt Ltd,</p>
              <p>456, Tech Tower, Sector 33</p>
              <p>City Name, State - 000000</p>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.fbottom}>
        <div className={styles.fbottompara}>
          <div className={styles.fbottompara1}>Become a seller</div>
        </div>
        <div className={styles.fbottompara}>
          <div className={styles.fbottompara1}>Advertise</div>
        </div>
        <div className={styles.fbottompara}>
          <div className={styles.fbottompara1}>Gift cards</div>
        </div>
        <div className={styles.fbottompara}>
          <div className={styles.fbottompara1}>Help center</div>
        </div>
        <div className={styles.fbottompara}>
          <div className={styles.fbottompara1}>2007-2025 Addkart.com</div>
        </div>
      </div>
    </footer>
  );
}
