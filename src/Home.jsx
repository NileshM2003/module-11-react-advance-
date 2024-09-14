import { useNavigate } from 'react-router-dom';
import './App.css';  // Make sure to create this CSS file for custom styling

function Home() {
  const navigate = useNavigate();

  function goToRegister() {
    navigate("/");
  }

  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to vagitable shop</h1>
        <p>Your go-to place for fresh vegetables!</p>
      </header>
      <main className="main-content">
        <div className="info-section">
          <img src="https://c4.wallpaperflare.com/wallpaper/663/737/291/vegetables-assorted-basket-wallpaper-preview.jpg" alt="Vegetables" className="main-image" />
          <p>Explore our wide range of fresh and organic vegetables. From farm to table, we ensure the best quality and taste.</p>
        </div>
        <button className="register-button" onClick={goToRegister}>Register Now</button>
      </main>
      {/* <footer className="footer">
        <p>&copy; 2024 VeggieLand. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Home;

