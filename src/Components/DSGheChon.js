import React, { Component } from "react";
import styleBookingTicket from "./BaiTapBookingTicket.module.css";
import { connect } from "react-redux";
import {
  huyGheAction,
  datGheAction,
} from "../redux/actions/BTBookTiscketsAction";

class DSGheChon extends Component {
  renderMenu = () => {
    let { choseChair } = this.props;

    return choseChair.map((ghe, index) => {
      // console.log(ghe.soGhe);
      return (
        <tr key={index} className="text-warning ">
          <td style={{ verticalAlign: "middle" }}>{ghe.soGhe}</td>
          <td style={{ verticalAlign: "middle" }}>{ghe.gia}</td>
          <td style={{ verticalAlign: "middle" }}>
            <button
              onClick={() => {
                this.props.dispatch(huyGheAction(ghe));
              }}
              className="btn text-danger"
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h4 className="text-light">DANH SÁCH GHẾ BẠN CHỌN</h4>
        <div className="d-flex align-items-center">
          <div className={`${styleBookingTicket.gheDuocChon} my-1 mr-2`}></div>
          <p className="text-light">Ghế đã đặt</p>
        </div>
        <div className="d-flex align-items-center">
          <div className={`${styleBookingTicket.gheDangChon} my-1 mr-2`}></div>
          <p className="text-light">Ghế đang chọn</p>
        </div>
        <div className="d-flex align-items-center">
          <div className={`${styleBookingTicket.ghe} my-1 ml-0 mr-2`}></div>
          <p className="text-light">Ghế chưa đặt</p>
        </div>

        <table className="table ">
          <thead>
            <tr className="text-light">
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>{this.renderMenu()}</tbody>
          <tfoot>
            <tr>
              <td style={{ verticalAlign: "middle" }} className="text-light">
                Tổng tiền:{" "}
              </td>
              <td style={{ verticalAlign: "middle" }} className="text-success">
                {this.props.total}
              </td>
              <td>
                <button
                  onClick={() => {
                    this.props.dispatch(datGheAction());
                  }}
                  className="btn btn-warning"
                >
                  Đặt
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  choseChair: state.BTBookTicketsReducer.choseChair,
  total: state.BTBookTicketsReducer.total,
});

export default connect(mapStateToProps)(DSGheChon);
