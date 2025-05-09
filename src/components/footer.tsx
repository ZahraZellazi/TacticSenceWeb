import React from 'react';
import logo from '../assets/images/logo.png';
import widget01 from '../assets/images/widget/widget01.jpg';
import widget02 from '../assets/images/widget/widget02.jpg';
import widget03 from '../assets/images/widget/widget03.jpg';
import comment01 from '../assets/images/widget/comment01.jpg';
import comment02 from '../assets/images/widget/comment02.jpg';
import comment03 from '../assets/images/widget/comment03.jpg';
import appleStore from '../assets/images/appstore/apple.png';
import googleStore from '../assets/images/appstore/google.png';

export const Footer = () => {
  return (
    <footer className="footer-type01">
      <div className="container">
        <div className="row">
          <ul className="footer-widget">
            <li className="widget-about">
              <h4 className="footerheading">
                about <span>soccer club</span>
              </h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vitae, velit perferendis dolor atque magni, porro minus repellendus nostrum alias ea deserunt. Vel quam explicabo laudantium accusamus est, nulla minima!</p>
              <p><span className="uppercaseheading">address:</span> <span className="red">239</span> main street London, England.</p>
              <p><span className="uppercaseheading">call:</span> <span className="red">1800-2222-3333</span></p>
            </li>

            <li className="widget-news">
              <h4 className="footerheading">
                recent <span>news</span>
              </h4>
              <ul className="widget-newsdetails clearfix">
                {[widget01, widget02, widget03].map((img, i) => (
                  <li className="clearfix" key={i}>
                    <a href="#" className="clearfix">
                      <div className="widget-pic" style={{ background: `url(${img}) center no-repeat` }}></div>
                      <div className="widget-newsinfo">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam soluta excepturi.</p>
                        <p className="uppercaseheading">18 september ,<span className="red">2015</span></p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="widget-product">
              <h4 className="footerheading">
                real <span>soccer products</span>
              </h4>
              <ul className="widget_productdetails">
                <li><a href="#">shoes(4)</a></li>
                <li><a href="#">men(4)</a></li>
                <li><a href="#">t-shirt(4)</a></li>
                <li><a href="#">sports(4)</a></li>
                <li><a href="#">glass</a></li>
              </ul>
            </li>

            <li className="widget-comment">
              <h4 className="footerheading">
                recent <span>comments</span>
              </h4>
              <ul className="widget_commentDetails">
                {[comment01, comment02, comment03].map((img, i) => (
                  <li key={i}>
                    <a href="#" className="clearfix">
                      <div className="comment-pic">
                        <div className="columnpic">
                          <img src={img} alt="comment" />
                        </div>
                      </div>
                      <div className="commentinfo">
                        <p className="uppercaseheading">jhon doe</p>
                        <p>18 April ,<span className="red">2015</span></p>
                        <p>nice and cool</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-type02">
        <div className="container">
          <div className="row">
            <a href="index-2.html" className="footer-logo">
              <img src={logo} alt="logo" />
            </a>

            <div className="footer-container">
              <ul className="clearfix">
                <li>
                  <a href="https://www.facebook.com/templatespoint.net" className="bigsocial-link" target="_blank" rel="noreferrer">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" className="bigsocial-link" target="_blank" rel="noreferrer">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/" className="bigsocial-link" target="_blank" rel="noreferrer">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
              <p>
                <a target="_blank" href="https://www.templateshub.net" rel="noreferrer">Templates Hub</a>
              </p>
            </div>

            <div className="footer-appstore">
              <figure><a href="#"><img src={appleStore} alt="apple store" /></a></figure>
              <figure><a href="#"><img src={googleStore} alt="google store" /></a></figure>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

