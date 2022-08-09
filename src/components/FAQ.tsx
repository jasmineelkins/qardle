import React, { useState } from "react";

interface Props {
  isToggled: boolean;
}

const FAQ: React.FC<Props> = ({ isToggled }) => {
  const faqClass = isToggled ? "faqContainer" : "faqContainer hidden";

  return (
    <div className={faqClass}>
      <div id="faqText">
        <div id="faqTextInnerDiv">
          Guess the QARDLE in five tries! <br />
          Every QARDLE consists of 5 random unique playing cards. <br />
          Each guess must consist of 5 unique playing cards. The order of the
          cards does not matter. <br />
          Select your guesses from the deck below, and hit the submit button to
          check your guess. If you want to change any of you guesses, simply
          click the card you want to remove. <br />
          When you submit your guess hand, each card will tell you if it is one
          of the goal QARDs. If it does not appear in the QARDLE, the color of
          the suit and value markers will tell you if any cards of that suit or
          value appear in the goal hand. <br />
          See examples below:
          <br />
          <img
            id="faqAll"
            className="faqImg"
            src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1660080556/Qardle/faqExampleAll_olqkyk.png"
            alt="example of all possible match results"
          />
        </div>
        <div className="faqExample">
          <img
            id="faqBothWrong"
            className="faqImg"
            src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1660080554/Qardle/faqBothWrong_sx7nui.png"
            alt="example of possible match results"
          />
          <p>No cards with this suit or value appear in the QARDLE.</p>
        </div>
        <div className="faqExample">
          <img
            id="faqRightNumWrongSuit"
            className="faqImg"
            src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1660080560/Qardle/faqRightNumWrongSuit_dltoqb.png"
            alt="example of possible match results"
          />
          <p>
            This card shares a value with at least one of the cards in the
            QARDLE, but the suit does not match any of the QARDS.
          </p>
        </div>
        <div className="faqExample">
          <img
            id="faqWrongNumRightSuit"
            className="faqImg"
            src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1660080562/Qardle/faqwrongNumRightSuit_xgvzmc.png"
            alt="example of possible match results"
          />
          <p>
            This card's suit matches at least one of the QARDS, but no cards
            with this value appear in the QARDLE.
          </p>
        </div>
        <div className="faqExample">
          <img
            id="faqBothRight"
            className="faqImg"
            src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1660080552/Qardle/faqBothRight_iodk5h.png"
            alt="example of possible match results"
          />
          <p>
            Getting closer! This at least one card with this value, and at least
            one card of this suit appear in the QARDLE, but this specific card
            is not included.
          </p>
        </div>
        <div className="faqExample">
          <img
            id="faqQard"
            className="faqImg"
            src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1660080558/Qardle/faqQard_edjm8g.png"
            alt="example of possible match results"
          />
          <p>This card is in the QUARDLE!</p>
        </div>
        The cards in the clickable deck will also change color to reflect your
        guesses - cards that do not appear in the Qardle will darken, Qards will
        brighten. <br />
        If you get stuck, try clicking the hint button!
      </div>
    </div>
  );
};

export default FAQ;
