import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <div>
            <div className="home">
                <h2>WELCOME TO YOUR GIPHY</h2>
                <img src="https://cdn.siasat.com/wp-content/uploads/2021/11/GIPHY.jpg" width = "325" height = "250"></img>
            </div>
            
            <Link to="/ironman" className="nav">IRON MAN GIPHY</Link>
            <br/>
            <Link to="/search" className="nav">SEARCH YOUR GIPHY</Link>
        </div>
      <Outlet />
    </>
  )
};

export default Layout;