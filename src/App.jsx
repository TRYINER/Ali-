import { useState, useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IntroductionSlide from "./components/Slides/IntroductionSlide/IntroductionSlide";
import AboutPwaSlide from "./components/Slides/AboutPwaSlide/AboutPwaSlide";
import QuestionOneSlide from "./components/Slides/QuestionOneSlide/QuestionOneSlide";
import QuestionTwoSlide from "./components/Slides/QuestionTwoSlide/QuestionTwoSlide";
import QuestionThreeSlide from "./components/Slides/QuestionThreeSlide/QuestionThreeSlide";
import QuestionFourSlide from "./components/Slides/QuestionFourSlide/QuestionFourSlide";
import QuestionFiveSlide from "./components/Slides/QuestionFiveSlide/QuestionFiveSlide";
import QuestionSixSlide from "./components/Slides/QuestionSixSlide/QuestionSixSlide";
import QuestionSevenSlide from "./components/Slides/QuestionSevenSlide/QuestionSevenSlide";
import QuestionEightSlide from "./components/Slides/QuestionEightSlide/QuestionEightSlide";
import QuestionNineSlide from "./components/Slides/QuestionNineSlide/QuestionNineSlide";
import QuestionTenSlide from "./components/Slides/QuestionTenSlide/QuestionTenSlide";
import ResultSlide from "./components/Slides/ResultSlide/ResultSlide";

import Layout from "./components/Layout/Layout";

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [user, setUser] = useState(null);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const handleAnswerSubmit = (answer, correctAnswer) => {
    setAnswers((prevAnswers) => [...prevAnswers, { answer, correctAnswer }]);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      <div>
        <IntroductionSlide onNext={next} setUser={setUser} />
      </div>
      <div>
        <AboutPwaSlide onNext={next} />
      </div>
      <div>
        <QuestionOneSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionTwoSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionThreeSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionFourSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionFiveSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionSixSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionSevenSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionEightSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionNineSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>
      <div>
        <QuestionTenSlide
          onNext={next}
          handleAnswerSubmit={handleAnswerSubmit}
        />
      </div>

      <div>
        <ResultSlide answers={answers} user={user} />
      </div>
    </Slider>
  );
};

export default App;
