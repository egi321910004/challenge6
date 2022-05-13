import style from '../Landing/Landing.module.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import image from '../../images/landing-img.png';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const data = useSelector((globalStore) => globalStore);

  const navigate = useNavigate();

  const checkLogin = () => {
    if (data.auth.dataLogin === null || data.auth.dataLogin?.email === "admin@admin.com") navigate("/login");
  };

  useEffect(() => {
    checkLogin();
  }, [])

  return (
    <>
      <div className={style.heroContainer}>
        <Container>
          <Navbar>
            <Container className={style.navbarContainer}>
              <div className={style.logo}></div>
              <Nav className={style.navbar}>
                  <Nav.Link href='#' className={style.item}>Our Services</Nav.Link>
                  <Nav.Link href='#' className={style.item}>Why Us</Nav.Link>
                  <Nav.Link href='#' className={style.item}>Testimonial</Nav.Link>
                  <Nav.Link href='#' className={style.item}>FAQ</Nav.Link>
                  <Nav.Link href='#' className={style.lastItem}>Register</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Container>
        <div className={style.hero}>
          <div className={style.text}>
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <button className={style.buttonSewa}>Mulai Sewa Mobil</button>
          </div>
          <div>
            <img src={image} alt="hero image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing;