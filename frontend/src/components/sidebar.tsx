
import Dropdown from 'react-bootstrap/Dropdown';


import { NavLink } from 'react-router-dom';

const Sidebar = (props: any): any => {
  return (
    <Dropdown.Menu show>
      <NavLink to="/">
        <Dropdown.Item eventKey="1">Home</Dropdown.Item>
      </NavLink>
      <NavLink to="/create">
        <Dropdown.Item eventKey="2">Create</Dropdown.Item>
      </NavLink>
      <NavLink to="/search">
        <Dropdown.Item eventKey="3">Search</Dropdown.Item>
      </NavLink>
    </Dropdown.Menu>
  );
};

export default Sidebar;

