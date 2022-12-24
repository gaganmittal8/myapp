import React from "react";
import { Helmet } from 'react-helmet';

export default function PlotConverted() {
  return (
    <>
      <Helmet>
          <title>React App | Plot</title>
      </Helmet>
      <section className="plot">
        <div className="container">
          <div className="row py-5">
            <div className="col-sm-12">
              <div className="text-center mb-3">
                <h1>Plot</h1>
                <p>Other projects in Greater Noida West - Price Trends for Mar'21</p>
              </div>
            </div>
            <div className="col-sm-12"></div>
          </div>
        </div>
      </section>
    </>
  );
}
