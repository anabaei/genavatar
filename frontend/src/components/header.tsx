import { Button } from "react-bootstrap";

const Header = () => {

    return (
        <div className="Header">
            <div className="link">
                <button type="button" className="btn btn-secondary">Secondary</button>
            </div>
            <div className="circle">
                <div style={{ marginTop: '9px' }}>
                    A.V
                </div>
            </div>
        </div>

    )
}
export default Header; 