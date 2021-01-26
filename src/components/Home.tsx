import '../App.css';
import { Projects } from './Projects';

function Home() {
  return (
    <div className="body-container">
      <h1>Projects</h1>
      <div className="products-container">
      <div className="product-container">
        {Object.entries(Projects).map(([id, { name }]: any) => (
          <ol>
            <li key={id}>
              <h5>{id}. {name}</h5>
            </li>
          </ol>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Home;
