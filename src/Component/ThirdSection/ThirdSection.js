import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ThirdSection.css";
const ThirdSection = () => {
  const [answer, setAnswer] = useState(false);
  const [answerOne, setAnswerOne] = useState(false);
  const [answerTwo, setAnswerTwo] = useState(false);
  const [answerThree, setAnswerThree] = useState(false);
  const [answerFour, setAnswerFour] = useState(false);
  const [answerFive, setAnswerFive] = useState(false);

  const answerHandler = () => {
    setAnswer((prev) => !prev);
    setAnswerOne(false);
    setAnswerTwo(false);
    setAnswerThree(false);
    setAnswerFour(false);
    setAnswerFive(false);
  };
  const answerHandlerOne = () => {
    setAnswerOne((prev) => !prev);
    setAnswer(false);
    setAnswerTwo(false);
    setAnswerThree(false);
    setAnswerFour(false);
    setAnswerFive(false);
  };

  const answerHandlerTwo = () => {
    setAnswerTwo((prev) => !prev);
    setAnswerOne(false);
    setAnswer(false);
    setAnswerThree(false);
    setAnswerFour(false);
    setAnswerFive(false);
  };

  const answerHandlerThree = () => {
    setAnswerThree((prev) => !prev);
    setAnswerOne(false);
    setAnswerTwo(false);
    setAnswer(false);
    setAnswerFour(false);
    setAnswerFive(false);
  };

  const answerHandlerFour = () => {
    setAnswerFour((prev) => !prev);
    setAnswerOne(false);
    setAnswerTwo(false);
    setAnswerThree(false);
    setAnswer(false);
    setAnswerFive(false);
  };

  const answerHandlerFive = () => {
    setAnswerOne(false);
    setAnswerTwo(false);
    setAnswerThree(false);
    setAnswerFour(false);
    setAnswer(false);

    setAnswerFive((prev) => !prev);
  };
  return (
    <div className="thirdSection-outer-wrapper">
      <h1 className="title-wrapper"> Frequently Asked Questions</h1>
      <div className="questions-wrapper">
        <button className="thirdSection-inner-wrapper" onClick={answerHandler}>
          What is Netflix?
        </button>
      </div>
      {answer && (
        <p className="answerHolder">
          Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries, and more on
          thousands of internet-connected devices. You can watch as much as you
          want, whenever you want without a single commercial – all for one low
          monthly price. There's always something new to discover and new TV
          shows and movies are added every week!s
        </p>
      )}
      <div className="questions-wrapper">
        <button
          className="thirdSection-inner-wrapper"
          onClick={answerHandlerOne}
        >
          How much does Netflix cost
        </button>
      </div>
      {answerOne && (
        <p className="answerHolder">
          Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
          streaming device, all for one fixed monthly fee. Plans range from
          $9.99 to $19.99 a month. No extra costs, no contracts.
        </p>
      )}
      <div className="questions-wrapper">
        <button
          className="thirdSection-inner-wrapper"
          onClick={answerHandlerTwo}
        >
          where can I watch?
        </button>
      </div>
      {answerTwo && (
        <p className="answerHolder">
          Watch anywhere, anytime. Sign in with your Netflix account to watch
          instantly on the web at netflix.com from your personal computer or on
          any internet-connected device that offers the Netflix app, including
          smart TVs, smartphones, tablets, streaming media players and game
          consoles. You can also download your favorite shows with the iOS,
          Android, or Windows 10 app. Use downloads to watch while you're on the
          go and without an internet connection. Take Netflix with you anywhere.
        </p>
      )}
      <div className="questions-wrapper">
        <button
          className="thirdSection-inner-wrapper"
          onClick={answerHandlerThree}
        >
          How can I cancel?
        </button>
      </div>
      {answerThree && (
        <p className="answerHolder">
          Netflix is flexible. There are no pesky contracts and no commitments.
          You can easily cancel your account online in two clicks. There are no
          cancellation fees – start or stop your account anytime.
        </p>
      )}
      <div className="questions-wrapper">
        <button
          className="thirdSection-inner-wrapper"
          onClick={answerHandlerFour}
        >
          What can I watch on Netflix?
        </button>
      </div>
      {answerFour && (
        <p className="answerHolder">
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals, and more. Watch as much
          as you want, anytime you want.
        </p>
      )}
      <div className="questions-wrapper">
        <button
          className="thirdSection-inner-wrapper"
          onClick={answerHandlerFive}
        >
          Is Netflix is good for kids?
        </button>
      </div>
      {answerFive && (
        <p className="answerHolder">
          The Netflix Kids experience is included in your membership to give
          parents control while kids enjoy family-friendly TV shows and movies
          in their own space. Kids profiles come with PIN-protected parental
          controls that let you restrict the maturity rating of content kids can
          watch and block specific titles you don’t want kids to see.
        </p>
      )}
      <p className="paragraph">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="third-button">
        <input
          className="enterEmail"
          type="email"
          required
          placeholder="Email address"
        />
        <button className="GetStart">
          {" "}
          <Link to="signUp" style={{ textDecoration: "none" }}>
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ThirdSection;
