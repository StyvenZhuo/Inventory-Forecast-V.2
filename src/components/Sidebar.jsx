import Account from "./Account";
import { Title, NavItems } from "./NavItems";
import { Link } from "react-router-dom";
import {
  faBox,
  faCubesStacked,
  faGear,
  faHome,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bg-white rounded-lg px-4 py-2 sticky top-4 min-h-screen">
        {<Account />}

        <div className="space-y-1">
          <Title title="General" />

          <Link to="/">
            <NavItems title="Dashboard" icon={faHome} />
          </Link>

          <Link to="inventory">
            <NavItems title="Inventory" icon={faBox} />
          </Link>

          <NavItems title="Forecast" icon={faCubesStacked} />

          <Title title="Others" />

          <NavItems title="Settings" icon={faGear} />
          <NavItems title="Help Center" icon={faQuestionCircle} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
