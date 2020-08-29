import React, { Component } from "react";
import styleBookingTicket from "./BaiTapBookingTicket.module.css";
import { connect } from "react-redux";
import { chonGheAction } from "../redux/actions/BTBookTiscketsAction";

class DSGhe extends Component {
  renderChair = () => {
    let content = [];
    let { lineChair, choseChair } = this.props;

    //Duyệt từng hàng ghế trong mảng
    for (let key in lineChair) {
      //Nếu key===0 xuất ra số dãy ghê
      if (key === "0") {
        content.push(
          <div key={key} className="row">
            <div className={`${styleBookingTicket.rowNumber} col-1 col-md-2`}>
              {lineChair[key].hang}
            </div>
            <div className={`col-10 col-md-8 `}>
              <div className="row">
                {lineChair[key].danhSachGhe.map((dsGhe, index) => {
                  return (
                    <div
                      key={index}
                      className={`${styleBookingTicket.firstChar} col-1 p-0`}
                    >
                      {dsGhe.soGhe}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      } else {
        //Ngược lại, hiển thị ghế theo hàng
        content.push(
          <div key={key} className="row">
            <div className={`${styleBookingTicket.rowNumber} col-1 col-md-2`}>
              {lineChair[key].hang}
            </div>
            <div className={`col-10 col-md-8 d-flex`}>
              {lineChair[key].danhSachGhe.map((dsGhe, index) => {
                //hiển thị từng ghế theo hàng

                if (dsGhe.daDat === true) {
                  //Gọi ghế đã đặt (daDat===true)
                  return (
                    <div
                      onClick={() => {
                        this.props.dispatch(chonGheAction(dsGhe));
                      }}
                      key={index}
                      className={`${styleBookingTicket.gheDuocChon} ${styleBookingTicket.ghe}`}
                    >
                      {dsGhe.soGhe}
                    </div>
                  );
                }

                //Nếu ghế đã có trong choseChair thì là ghế đang chọn
                for (let sp of choseChair) {
                  if (sp.soGhe === dsGhe.soGhe) {
                    return (
                      <div
                        onClick={() => {
                          this.props.dispatch(chonGheAction(dsGhe));
                        }}
                        key={index}
                        className={`${styleBookingTicket.ghe} ${styleBookingTicket.gheDangChon}`}
                      >
                        {dsGhe.soGhe}
                      </div>
                    );
                  }
                }
                //Ngược lại là ghế chưa được chọn
                return (
                  <div
                    onClick={() => {
                      this.props.dispatch(chonGheAction(dsGhe));
                    }}
                    key={index}
                    className={`${styleBookingTicket.ghe}`}
                  >
                    {dsGhe.soGhe}
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    }

    return <div>{content}</div>;
  };
  render() {
    return (
      <div className="text-center ">
        <h3 className="text-warning">ĐẶT VÉ XEM PHIM</h3>
        <div className={`${styleBookingTicket.screen} `}>
          <p>Màn hình</p>
        </div>

        {this.renderChair()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lineChair: state.BTBookTicketsReducer.lineChair,
  choseChair: state.BTBookTicketsReducer.choseChair,
});

export default connect(mapStateToProps)(DSGhe);
