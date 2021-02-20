import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';

const SideNav = () => {
  return (
    <section className="side_nav">
      <ul>
        <li>
          <Link to="/" className="side_nav_link">
            <HomeIcon/> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/clients" className="side_nav_link">
           <PeopleIcon/> Clients
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default SideNav;