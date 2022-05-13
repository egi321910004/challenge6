import style from '../Dashboard/Dashboard.module.css';
import homeIcon from '../../images/home-icon.svg';
import truckIcon from '../../images/fi_truck.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import menuLogo from '../../images/fi_menu.svg';
import accountIcon from '../../images/account-icon.svg';
import chevronDown from '../../images/fi_chevron-down.svg';
import chevronRight from '../../images/chevron-right.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Dashboard = () => {
  const { dataLogin } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if(dataLogin?.email !== "admin@admin.com") navigate("/login")
  }, []);

  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.leftSide}>
          <div className={style.sidebar}>
            <div className={style.sidebarLogo}></div>
            <div className={style.dashboardLogo}>
                <img src={homeIcon} alt="home-icon" />
                <p>Dashboard</p>
            </div>
            <div className={style.carsLogo}>
                <img src={truckIcon} alt="truck-icon" />
                <p>Cars</p>
            </div>
          </div>
          <div className={style.leftBar}>
            <div className={style.leftBarUp}>
              <div className={style.leftBarLogo}></div>
            </div>
            <div className={style.leftBarDown}>
              <h5>DASHBOARD</h5>
              <div className={style.pStyling}>
                <p>Dashboard</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.rightSide}>
          <div>
            <Container className={style.navbar}>
              <div className={style.menuLogo}>
                <img src={menuLogo} alt="menu" />
              </div>
              <div className={style.navbarRightSide}>
                <input type="text" placeholder='Search'/>
                <button>Search</button>
                <div className={style.account}>
                  <img src={accountIcon} alt="acc-icon" />
                  <p>Unis Badri</p>
                  <img src={chevronDown} alt="down" />
                </div>
              </div>
            </Container>
          </div>
          <div className={style.breadcrumb}>
            <h6>Dashboard</h6>
            <img src={chevronRight} alt="right" />
            <p>Dashboard</p>
          </div>
          <div className={style.title}>
            <h4>Dashboard</h4>
            <h4>Welcome Admin</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard;