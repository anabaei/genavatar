import { Link } from 'react-router-dom';

const Home = () => {
    return <div className="Home">
        <div>
            <Link to="/create" className='Homelist'>Create</Link>
        </div>
    </div>
}
export default Home;