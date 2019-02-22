/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import "../css/works.css";
import "../mobile/works.css";

// gif
const scroll = require("../asset/scrollS.gif");
const swap = require("../asset/swap.gif");
const search = require("../asset/search.gif");
const candle = require("../asset/candle.gif");
const draw = require("../asset/draw.gif");
const line = require("../asset/line.gif");

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trade: false,
      prop: false,
      canvas: false
    };
  }

  componentDidMount = () => {
    document.addEventListener("scroll", () => {
      this.scrollWorks();
      this.zWorks();
    });
  };

  componentWillUnmount = () => {
    document.removeEventListener("scroll");
  };

  scrollWorks = () => {
    const works = document.querySelector(".works");
    const scrollY = window.scrollY;
    const start = 5000;
    if (scrollY >= start - 1000 && scrollY < start) {
      this.alloff();
      works.style.opacity = (scrollY - (start - 1000)) / 1000;
    } else if (scrollY >= start && scrollY < start + 1500) {
      works.style.opacity = 1;
    } else if (scrollY >= start + 1500 && scrollY < start + 2500) {
      works.style.opacity = (start + 2500 - scrollY) / 1000;
    } else {
      works.style.opacity = 0;
      this.alloff();
    }
  };

  zWorks = () => {
    const works = document.querySelector(".works");
    const worksNav = document.querySelector(".worksNav");
    const scrollY = window.scrollY;
    const start = 5000;
    if (scrollY < start) {
      works.style.zIndex = 9990;
      worksNav.style.zIndex = 9991;
    } else if (scrollY >= start && scrollY < start + 2500) {
      works.style.zIndex = 10001;
      worksNav.style.zIndex = 10002;
    } else {
      works.style.zIndex = -1;
      worksNav.style.zIndex = -1;
    }
  };

  alloff = () => {
    const all = Array.from(document.querySelectorAll(".worksContainer")).map(
      u => u.id
    );
    for (let one of all) {
      if (this.state[one] === true) {
        const target = document.querySelector(`#${one}`);
        this.onoff("-", target);
      }
    }
  };

  addwidth = id => {
    const all = Array.from(document.querySelectorAll(".worksContainer")).map(
      u => u.id
    );
    if (this.state[id] === false) {
      const target = document.querySelector(`#${id}`);
      this.onoff("+", target);
      const filter = all.filter(u => u !== id);
      for (let one of filter) {
        if (this.state[one] === true) {
          const tar = document.querySelector(`#${one}`);
          this.onoff("-", tar);
        }
      }
    } else {
      for (let one of all) {
        if (this.state[one] === true) {
          const target = document.querySelector(`#${one}`);
          this.onoff("-", target);
        }
      }
    }
  };

  onoff = (onoff, target) => {
    let count = 0;
    let animate;
    const limit = onoff === "+" ? 27 : 28;
    const loop = () => {
      target.style.width = `calc(${target.offsetWidth}px ${onoff} 3vw)`;
      if (count < limit) {
        animate = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(animate);
        this.setState({
          [target.id]: onoff === "+" ? true : false
        });
      }
      count++;
    };
    animate = requestAnimationFrame(loop);
  };

  render() {
    return (
      <div className="works">
        <div onClick={this.alloff} className="worksInstruction center">
          <h1>WebApp Projects</h1>
          <h4 className="desktop">Click the side panel for details</h4>
          <h4 className="mobile">Click the below panel for details</h4>
        </div>

        <div className="worksNav">
          <div
            className="nav center"
            id="tradeNav"
            onClick={() => {
              this.addwidth("trade");
            }}
          >
            <i class="fas fa-gifts" />
            <h4>Barter Trading Platform</h4>
          </div>
          <div
            className="nav center"
            id="propNav"
            onClick={() => {
              this.addwidth("prop");
            }}
          >
            <i class="fas fa-city" />
            <h4>Property Info Platform</h4>
          </div>
          <div
            className="nav center"
            id="canvasNav"
            onClick={() => {
              this.addwidth("canvas");
            }}
          >
            <i class="fas fa-palette" />
            <h4>Canvas for Kids</h4>
          </div>
        </div>

        <div className="worksContainer" id="trade">
          <div className="gif center">
            <div className="allGif center desktop">
              <h1>Main Page</h1>
              <img src={scroll} alt="scroll" />
              <h1>Trading Interface</h1>
              <img src={swap} alt="propic" />
            </div>

            <div className="allGif center mobile">
              <div className="content center">
                <h1>Main Page</h1>
                <img src={scroll} alt="scroll" />
              </div>
              <div className="content center">
                <h1>Trading Interface</h1>
                <img src={swap} alt="propic" />
              </div>
            </div>

            <div className="description">
              <div className="title">
                <h1>Trade4Goods Barter Platform</h1>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <span />
                    <div>
                      <div class="title">Introduction</div>
                      <div class="info">
                        A C2C trading webapp
                        <br />
                        built with React and deployed to AWS
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Frontend</div>
                      <div class="info">
                        Centralizing state management with Redux
                        <br />
                        for better maintainability
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Backend</div>
                      <div class="info">
                        Built backend with Express
                        <br />
                        and two databases with PostgreSQL and Redis
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Database</div>
                      <div class="info">
                        A multi-to-multi database architecture
                        <br />
                        for managing trading status
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Link</div>
                      <div class="info">
                        <a
                          href="https://trade4goods.xyz/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          TRADE4GOODS
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="worksContainer" id="prop">
          <div className="gif center">
            <div className="allGif center desktop">
              <h1>Search and Mapping</h1>
              <img src={search} alt="search" />
              <h1>Data Visualization</h1>
              <img src={candle} alt="candle" />
            </div>

            <div className="allGif center mobile">
              <div className="content center">
                <h1>Search and Mapping</h1>
                <img src={search} alt="search" />
              </div>
              <div className="content center">
                <h1>Data Visualization</h1>
                <img src={candle} alt="candle" />
              </div>
            </div>

            <div className="description">
              <div className="title">
                <h1>PROPERTY.HK Info Platform</h1>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <span />
                    <div>
                      <div class="title">Introduction</div>
                      <div class="info">
                        A Server-side Rendered Webapp
                        <br />
                        built with Express, PostgreSQL and Handlebars
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Data Visualization</div>
                      <div class="info">
                        Utilized Google Map and Google Chart API
                        <br />
                        for data visualization
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Web Scraping</div>
                      <div class="info">
                        Scraped 100k entries of HK property trading data
                        <br />
                        with Cheerio and Puppeteer
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Link</div>
                      <div class="info">
                        <a
                          href="https://hkproject.tech/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          PROPERTY.HK
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="worksContainer" id="canvas">
          <div className="gif center">

            <div className="allGif center desktop">
              <h1>Styling</h1>
              <img src={draw} alt="draw" />
              <h1>Pen Tool</h1>
              <img src={line} alt="line" />
            </div>

            <div className="allGif center mobile">
              <div className="content center">
                <h1>Styling</h1>
                <img src={draw} alt="draw" />
              </div>
              <div className="content center">
                <h1>Pen Tool</h1>
                <img src={line} alt="line" />
              </div>
            </div>

            <div className="description">
              <div className="title">
                <h1>Canvas For Kids</h1>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <span />
                    <div>
                      <div class="title">Introduction</div>
                      <div class="info">
                        Utilized Canvas API in HTML5
                        <br />
                        to create interactive canvas drawing webapp
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">UI Design</div>
                      <div class="info">
                        Used CSS Grid in creating
                        <br />
                        2-dimensional layout of the webapp
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">JQuery</div>
                      <div class="info">
                        Employed JQuery for DOM manipulation
                        <br />
                        and better cross-browser compatibility
                      </div>
                    </div>
                  </li>
                  <li>
                    <span />
                    <div>
                      <div class="title">Link</div>
                      <div class="info">
                        <a
                          href="http://canvas4kids.club/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          CANVAS4KIDS
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Works;
