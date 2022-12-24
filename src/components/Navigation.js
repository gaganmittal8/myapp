import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { HashLink as Link} from 'react-router-hash-link';
import "../style/navigation.scss";

const Navigation = () => {
    let section =  document.querySelectorAll('section');
    let navLinks =  document.querySelectorAll('.navigation_wrapper li a');
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setScroll(true);
            section.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop + 168;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('.navigation_wrapper li a[href*=' + id + ']').classList.add('active');
                    });
                };
            });
        }
    }, [scroll]);

    return (
      <>
        <Helmet>
          <title>React App | Navigation</title>
        </Helmet>
        <div className="navigation-main">
          <div className="container">
            <div className="row py-5">
              <div className="col-sm-12">
                <div className="text-center mb-3">
                  <h1>Scroll Navigation</h1>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="navigation_wrapper">
                  <ul>
                    <li><Link to="#one" className="active"> Home </Link></li>
                    <li><Link to="#two"> About </Link></li>
                    <li><Link to="#three"> Blogs </Link></li>
                    <li><Link to="#four"> Contact Us </Link></li>
                  </ul>
                </div>
                <section className="one" id="one">
                  <h1>Home</h1>
                </section>
                <section className="two" id="two">
                  <h1>About</h1>
                </section>
                <section className="three" id="three">
                  <h1>Blogs</h1>
                </section>
                <section className="four" id="four">
                  <h1>Contact Us</h1>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Navigation;