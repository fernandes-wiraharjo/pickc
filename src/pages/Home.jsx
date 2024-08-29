import '../css/Home.css'

function Home() {
  return (
    <>
      <div className="home-container">
        <h1 className="home-text ai">AI</h1>
        <h1 className="home-text">Construction</h1>
        <h1 className="home-text">Shopping List</h1>

        <p className="home-subtext">Easily recreate your favourite style.</p>

        <button className="primary-button mt-10">
          <span>Try It FREE</span>
        </button>

        <div className="product-video-section">
          <img src="/play_circle.png" alt="Overlay" className="overlay-image" />
        </div>
      </div>
    </>
  )
}

export default Home
