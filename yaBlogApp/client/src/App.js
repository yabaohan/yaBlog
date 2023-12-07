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
          <img src="https://s.yimg.com/ny/api/res/1.2/XzWJZqN2lND_X9D9SH378Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNjAwO2NmPXdlYnA-/https://media.zenfs.com/en-us/homerun/complex.com/ad7bc3dbd951cec9c59ae7c647facf49" alt=""></img>
        </div>
        <div className="texts">
          <h2> <a href=""> New clothing brand aims to target high calorie males. </a></h2>
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
