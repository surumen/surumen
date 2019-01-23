import React, { Component } from 'react';

import '../styles/somalab/home.css';
import '../styles/somalab/slides.min.css';
import '../styles/somalab/slide-normalize.css';

class SomaLab extends Component {
    render() {
        return (
          <div className="sqs-slide-wrapper" data-slide-type="lock-screen">
            <div className="sqs-slide-container lock-size-extra-small lock-style-border lock-shape-rounded password-style-underlined  ">
              <div className="sqs-slide yui3-widget yui3-lockfullcenter01 yui3-lockfullcenter01-content sqs-slide-ready yui3-lockfullcenter01-focused">
                <div className="sqs-slide-layer layer-front full-width-height">
                  <div className="sqs-slide-layer-content">
                    <div className="sqs-slice-group group-content restrict-width-1000 text-align-center align-center align-center-absolute">
                      <div className="sqs-slice yui3-widget sqs-slice-lock sqs-slice-lock-content" id="yui_3_17_2_1_1548269903322_102" data-slice-type="lock">
                        <span className="icon-wrapper">
                          <div>
                            <svg viewBox="0 0 64 64">
                              <g className="use-background">
                                <circle cx={32} cy={32} r={31} />
                              </g>
                              <g className="use-icon">
                                <path d="M40.2,29v-4c0-4.5-3.7-8.2-8.2-8.2s-8.2,3.7-8.2,8.2v4H21v15h22V29H40.2z M27.2,25 c0-2.6,2.1-4.8,4.8-4.8s4.8,2.1,4.8,4.8v4h-9.5V25z" />
                              </g>
                              <g className="use-mask">
                                <path d="M0,0v64h64V0H0z M43,44H21V29h2.8v-4c0-4.5,3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2v4H43V44z M32,20.2 c-2.6,0-4.8,2.1-4.8,4.8v4h9.5v-4C36.8,22.4,34.6,20.2,32,20.2z" />
                              </g>
                            </svg>
                          </div>
                        </span>
                      </div>
                      <div className="sqs-slice-group group-copy">
                        <div className="sqs-slice yui3-widget sqs-slice-heading sqs-slice-heading-content" data-slice-type="heading"><h1 id="sqs-slash-page-header">SomaLab</h1>
                        </div>
                        <div className="sqs-slice yui3-widget sqs-slice-body sqs-slice-body-content" data-slice-type="body">
                          <p>Thanks for stopping by! My work at <a href="https://www.msoma.org/">M-Soma Institute</a> is covered by an NDA, so I can't share anything publicly. If you'd like to hear more about my work, please reach out at <a href="mailto:msurumen@berkeley.edu">msurumen@berkeley.edu</a><br /><br />If we've already talked about it, please use the password I shared</p>
                        </div>
                      </div>
                      <div className="sqs-slice yui3-widget sqs-slice-password sqs-slice-password-content sqs-slice-password-focused show-arrow" data-slice-type="password">
                        <div className="input-container">
                          <input type="password" tabIndex={1} name="password" placeholder="Password" />
                          <div className="arrow-icon">
                            <div className="icon-wrapper arrow">
                              <div>
                                <svg>
                                  <g className="svg-icon">
                                    <polygon points="27.7,13.3 26.3,14.7 31.6,20 14,20 14,22 31.6,22 26.3,27.3 27.7,28.7 35.4,21 " />
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="error-message" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default SomaLab;

