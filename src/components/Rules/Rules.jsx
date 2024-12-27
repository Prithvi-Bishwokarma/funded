import React from "react";

const Rules = () => {
  return (
    <section id="rules" className="rules">
      <div className="container">
        <div className="rule-wrap">
          <div className="about-content-two rules-left wow fadeInRight" data-wow-delay=".2s">
            <div className="section-title section-title-two mb-15">
              <h2 className="title">
                Unlock More with Our Add-Ons
              </h2>
            </div>
            <p>When you purchase our add-ons, the above trading rules no longer apply. Enjoy the freedom to:</p>
            <div className="about-list">
              <ul>
                <li>
                  <i class="fa fa-fire"></i>Trade during major news events.
                </li>
                <li>
                  <i class="fa fa-fire"></i>Utilize your favorite Expert Advisors for automated trading.
                </li>
                <li>
                  <i class="fa fa-fire"></i>Get access to our free leading trading tools.
                </li>
                <li>
                  <i class="fa fa-fire"></i>Enjoy daily payouts.
                </li>
              </ul>
            </div>
          </div>
          <div className="about-content-two rules-right wow fadeInRight" data-wow-delay=".2s">
            <div className="section-title section-title-two mb-15">
              <h2 className="title">
                Trading Rules
              </h2>
            </div>
            <div className="about-list">
              <ul>
                <li>
                  <i class="fa fa-fire"></i>News Trading: Trading is not allowed 5 minutes before and after significant news events.
                </li>
                <li>
                  <i class="fa fa-fire"></i>Expert Advisors (EAs): The use of automated trading systems or Expert Advisors is not permitted.
                </li>
                <li>
                  <i class="fa fa-fire"></i>High-Frequency Trading (HFT): High-Frequency Trading strategies are strictly prohibited.
                </li>
                <li>
                  <i class="fa fa-fire"></i>Minimum Trade Close Time: All trades must remain open for at least 90 seconds.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
