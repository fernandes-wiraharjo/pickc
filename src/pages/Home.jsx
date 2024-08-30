import Card from '../components/Card';
import '../css/Home.css'

function Home() {
  const cardContent = [
    {
      icon: '/colorize.png',
      text: 'Effortlessly recreate your favourite style with PickC, avoiding guesswork and endless online searches.',
    },
    {
      icon: '/checklist.png',
      text: 'Empower your dream home creation with a complete and optimized materials list.',
    },
    {
      icon: '/attach_money.png',
      text: 'Get construction estimates to understand the cost of each design decision.',
    },
  ];

  return (
    <>
      <div className="home-container">
        <h1 className="home-text ai">AI</h1>
        <h1 className="home-text">Construction</h1>
        <h1 className="home-text">Shopping List</h1>

        <p className="home-subtext text-sub">Easily recreate your favourite style.</p>

        <button className="primary-button mt-10">
          <span>Try It FREE</span>
        </button>

        <div className="product-video-section">
          <img src="/play_circle.png" alt="Overlay" className="overlay-image" />
        </div>

        <div className="build-with-confidence-section new-section">
          <p className="section-text">Build with</p>
          <p className="section-text text-purple mt-8">Confidence</p>
          <p className="sub-section-text">Get buildable solution, not just inspiration. Explore curated styles, 
            get a complete materials list, and see construction estimates - all in one place.
          </p>

          <button className="primary-button mt-10">
            <span>Try It FREE</span>
          </button>

          <div className="row">
            {cardContent.map((item, index) => (
              <Card key={index} icon={item.icon} text={item.text} />
            ))}
          </div>
        </div>

        <div className="get-solution-section new-section">
          <p className="section-text">
            Get a solution and cost estimate <span className="text-purple">in seconds</span>
          </p>

          <div className="row">
            <div className="col-6 steps-container">
              <div className="step">
                <div className="bullet first"></div>
                <div className="step-content">
                  <h2 className="step-title">Pick a style to recreate</h2>
                  <p className="step-description">
                    Explore curated design themes and choose the perfect style for your space. Simply tell PickC the size of your space, and let our AI guide you through the rest.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="bullet"></div>
                <div className="step-content">
                  <h2 className="step-title-secondary">Pick a shopping list that suits your budget</h2>
                </div>
              </div>
              <div className="step">
                <div className="bullet"></div>
                <div className="step-content">
                  <h2 className="step-title-secondary">Build your design</h2>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="image-container">
                <div className="image" style={{ backgroundImage: 'url("/pick_your_style.png")' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
