//import logo from './logo.svg';
import './ArticlesResources.css';

//Featured Investment Oppotunities, in Homepage
function ArticlesResources() {
  return (
    <div className="Articles">
      <header className="App-header">
      </header>
      <h1>Articles and Resources</h1>
        
        <div className="articleGrid">
            <div className="Article">
                <img src="article.png" alt="Article Image not Found" className="articleImg" />
                <p className="title">Single-Family Rentals % Build-to-Rent: The Housing Market's Bright Spot?</p>
                <p className="date">December 2, 2023</p>
            </div>
            <div className="Article">
                <img src="article.png" alt="Article Image not Found" className="articleImg" />
                <p className="title">Single-Family Rentals % Build-to-Rent: The Housing Market's Bright Spot?</p>
                <p className="date">December 2, 2023</p>
            </div>
            <div className="Article">
                <img src="article.png" alt="Article Image not Found" className="articleImg" />
                <p className="title">Single-Family Rentals % Build-to-Rent: The Housing Market's Bright Spot?</p>
                <p className="date">December 2, 2023</p>
            </div>
        </div>
    </div>
  );
}

export default ArticlesResources;
