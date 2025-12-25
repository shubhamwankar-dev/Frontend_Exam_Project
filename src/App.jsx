import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FeatureCard from "./components/FeatureCard/FeatureCard";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import image1 from "../src/assets/image1.avif";
import image2 from "../src/assets/image2.avif";
import image3 from "../src/assets/image3.avif";
import image4 from "../src/assets/image4.avif";
import Corousel from "./components/Corousel/Corousel";
import Testimonials from "./components/Testimonials/Testimonials";
import Blogs from "./components/Blogs/Blogs";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <main>
          <section id="home" className="hero mb-5">
            <Header />

            <Hero />
            <Routes>
              <Route path="/" element={"/home"}></Route>

              <Route
                path="/login"
                element={<PageNotFound title="Login" />}
              ></Route>
              <Route
                path="/signup"
                element={<PageNotFound title="Signup" />}
              ></Route>
            </Routes>
          </section>

          <section id="services" className="feature-card container mb-5">
            <h1 className="text-center mb-5">BUSINESS FEATURES</h1>
            <Row xs={1} md={4} className="g-4">
              <Col>
                <FeatureCard
                  icon={
                    <ion-icon
                      name="bar-chart-outline"
                      className="fs-1 text-white"
                    ></ion-icon>
                  }
                  title={"Strategic Growth"}
                  description={
                    "Accelerate your business expansion with proven methodologies"
                  }
                />
              </Col>

              <Col>
                <FeatureCard
                  icon={
                    <ion-icon
                      name="bulb-outline"
                      className="fs-1  text-white"
                    ></ion-icon>
                  }
                  title={"Innovation Focus"}
                  description={
                    "Transform challenges into opportunities through creative solutions"
                  }
                />
              </Col>

              <Col>
                <FeatureCard
                  icon={
                    <ion-icon
                      name="people-outline"
                      className="fs-1  text-white"
                    ></ion-icon>
                  }
                  title={"Expert Team"}
                  description={
                    "Industry veterans dedicated to your success and growth"
                  }
                />
              </Col>

              <Col>
                <FeatureCard
                  icon={
                    <ion-icon
                      name="medal-outline"
                      className="fs-1  text-white"
                    ></ion-icon>
                  }
                  title={"Proven Results"}
                  description={
                    "Track record of delivering measurable business outcomes"
                  }
                />
              </Col>
            </Row>
          </section>

          <section className="corousel mb-5">
            <Corousel />
          </section>

          <section id="testiminials" className="testimonials container mb-5">
            <h1 className="text-center fw-bolder fs-2">Testimonials</h1>
            <p className="text-center fs-5 fw-semibold text-secondary lh-1 mb-5">
              Peolpe Love This!
            </p>
            <Testimonials />
          </section>

          <section id="blogs" className="blogs container mb-5">
            <h1 className="text-center mb-5">Blogs</h1>
            <Blogs />
          </section>

          <section className="newsletter container text-center mb-5">
            <NewsLetter />
          </section>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
