import React from "react";
import { reset } from "../../Redux/actions/cart.actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import QRCode from "react-qr-code";
import "./style.css";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
      history.push("/first-screen");
    }, 5000);
  });

  return (
    <div className="container">
      <div className="product-successfull-container">
        <div className="product-successfull-title">
          Your products has been placed successfully
        </div>

        <div className="product-successfull-helpertext">
          To get receipt.
          <br />
          please scan the QR code below
        </div>
        <div className="qr-contianer">
          <QRCode value={"booom"} size={90} />
        </div>
      </div>
    </div>
  );
};

export default Index;
