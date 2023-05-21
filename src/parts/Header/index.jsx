import { useLocation } from "react-router-dom";
import Button from "../../elements/Button";
import IconText from "../IconText";
import "./index.scss";

export default function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header>
      <nav className="navbar">
        <IconText />
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${getNavLinkClass("/")}`}>
            <Button className="nav-link" type="link" href="/" isExternal>
              Home
            </Button>
          </li>
          <li className={`nav-item ${getNavLinkClass("/browse-by")}`}>
            <Button
              className="nav-link"
              type="link"
              href="/browse-by"
              isExternal
            >
              Browse By
            </Button>
          </li>
          <li className={`nav-item ${getNavLinkClass("/stories")}`}>
            <Button className="nav-link" type="link" href="/stories" isExternal>
              Stories
            </Button>
          </li>
          <li className={`nav-item ${getNavLinkClass("/agents")}`}>
            <Button className="nav-link" type="link" href="/agents" isExternal>
              Agents
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
