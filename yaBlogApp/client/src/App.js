import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="https://ya.ru" className="logo"> YaBlog </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>


      <div className="post">
        <div className="img">
          <img src="https://d1fufvy4xao6k9.cloudfront.net/images/landings/479/jeans5-1.jpg" alt=""></img>
        </div>
        <div className="texts">
          <h2> <a href=""> Levi's expands jean roster to include high calorie women. </a></h2>
          <p className="info">
            <a className="author">Hans Yabao</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary"> Popular clothing brand Levis...</p>
        </div>
      </div>
    </main>

  );
}

export default App;
