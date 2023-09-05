
import { Link } from 'react-router-dom';


const Sidebar = (props: any): any => {
  return (
    <div className='side-bar'>
    <Link to="/">Home</Link>
    <Link to="/create">Create</Link>
    <Link to="/search">Search</Link>
    </div>
  );
};

export default Sidebar;
