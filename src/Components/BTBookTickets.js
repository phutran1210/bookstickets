import React, { Component } from "react";
import DSGhe from "./DSGhe";
import DSGheChon from "./DSGheChon";
import styleBookingTicket from "./BaiTapBookingTicket.module.css";

export default class BTBookTickets extends Component {
  render() {
    return (
      <div className={`${styleBookingTicket.bookingMovie} container-fluid `}>
        <div className={`${styleBookingTicket.overlay}`}></div>
        <div className="row align-items-center py-3">
          <div className="col-12 col-lg-9 p-0 py-1">
            <DSGhe />
          </div>
          <div className="col-12 col-lg-3 p-0 pr-1">
            <DSGheChon />
          </div>
        </div>
      </div>
    );
  }
}
