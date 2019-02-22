import React, { Component } from "react";
import "../css/footer.css";
import "../mobile/footer.css";
import Axios from "axios";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: null,
      email: "",
      text: "",
      ne: false,
      pe: false,
      ee: false,
      te: false
    };
  }

  formSubmit = async e => {
    e.preventDefault();
    const { name, email, text } = this.state;
    const data = { name, email, content: text };
    console.log(data);
    try {
      const res = await Axios({
        method: "post",
        url: process.env.REACT_APP_API,
        data: data,
        headers: {
          "Content-Type": "application/json",
        //   'X-Requested-With': 'XMLHttpRequest'
        }
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  input = (e, type) => {
    const nr = /[A-Za-z]{1}[A-Za-z]/;
    const er = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    switch (type) {
      case "name":
        this.setState({
          name: e.target.value
        });
        if (!e.target.value.match(nr)) {
          this.setState({
            ne: true
          });
        } else {
          this.setState({
            ne: false
          });
        }
        break;
      case "phone":
        console.log(type);
        this.setState({
          phone: e.target.value
        });
        if (isNaN(e.target.value) || e.target.value.length < 8) {
          this.setState({
            pe: true
          });
        } else {
          this.setState({
            pe: false
          });
        }
        break;
      case "email":
        this.setState({
          email: e.target.value
        });
        if (!e.target.value.match(er)) {
          this.setState({
            ee: true
          });
        } else {
          this.setState({
            ee: false
          });
        }
        break;
      case "text":
        this.setState({
          text: e.target.value
        });
        break;
      default:
        alert("error occurs. please try again later.");
    }
  };
  render() {
    return (
      <div className="footer">
        <div className="social center">
          <div className="content">
            <a
              href="https://github.com/matthew-leee"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-github" />
            </a>
          </div>
          <div className="content">
            <a
              href="https://www.linkedin.com/in/matthew-leee/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
        <div className="form center">
          <form>
            <h4>Name:</h4>
            <input
              type="text"
              onChange={e => {
                this.input(e, "name");
              }}
              id="name-input"
              placeholder="Enter name here…"
              value={this.state.name}
            />
            <br />
            <p className="error">{this.state.ne && "invalid name"}</p>

            {/* <h4>Phone:</h4>
                        <input type="phone" onChange={(e) => { this.input(e, "phone") }} id="phone-input" placeholder="Enter phone number" value={this.state.phone} /><br />
                        <p className="error">{this.state.pe && "invalid phone number"}</p> */}

            <h4>Email:</h4>
            <input
              type="email"
              onChange={e => {
                this.input(e, "email");
              }}
              id="email-input"
              placeholder="Enter email here…"
              value={this.state.email}
            />
            <br />
            <p className="error">{this.state.ee && "invalid email"}</p>

            <h4>How can I help you?</h4>
            <textarea
              onChange={e => {
                this.input(e, "text");
              }}
              id="description-input"
              rows="3"
              placeholder="Enter your message…"
              value={this.state.text}
            />
            <br />
            <p className="error">{this.state.te && "invalid phone number"}</p>

            <div
              className="g-recaptcha"
              data-sitekey="6Lc7cVMUAAAAAM1yxf64wrmO8gvi8A1oQ_ead1ys"
            />

            <button onClick={this.formSubmit} type="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Footer;
