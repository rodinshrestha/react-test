import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./style.css";

const useStyle = makeStyles(() => {
  return {
    button: {
      borderRadius: 20,
      padding: 2,
      minWidth: 45,
    },
    btn: {
      borderRadius: 20,
      padding: "10px 40px",
      display: "flex",

      margin: "0 auto",
      marginBottom: 40,
    },
  };
});

const Index = () => {
  const product = useSelector((state) => state.cart.product);

  const classes = useStyle();
  const history = useHistory();

  const getSubTotal = () => {
    return product
      .reduce((acc, current) => acc + current.price * current.quantity, 0)
      .toFixed(2);
  };

  const getVat = () => {
    return (
      product.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      ) * 0.25
    );
  };

  const getTotoal = () => {
    return parseInt(getSubTotal()) + parseInt(getVat());
  };

  return (
    <div className="container">
      <div className="purchased-bill-container">
        <div className="purchased-bill-tittle">PURCHASE ORDER LIST</div>

        <div className="purchased-bill-content">
          <div className="purchased-bill-header">
            <div className="purchased-bill-title food">Food</div>
            <div className="purchased-bill-title qty">QTY</div>
            <div className="purchased-bill-title price">Price</div>
          </div>
          <div className="purchased-item-bill-container">
            {product.map((item, i) => {
              return (
                <div className="purchased-item-content" key={i}>
                  <div className="purchased-item-name">{item.title}</div>
                  <div className="purchased-item-qty">{item.quantity}</div>
                  <div className="purchased-item-price">
                    ${(item.quantity * item.price).toFixed(2)}
                  </div>
                </div>
              );
            })}
            <div className="purchased-item-sub-container">
              <div className="purchased-item-sub-total-container">
                <div className="purchased-item-subtotal">SUBTOTAL</div>
                <div className="purchased-item-subtotal-details">
                  ${getSubTotal()}
                </div>
              </div>

              <div className="purchased-item-vat-container">
                <div className="purchased-item-vat">VAT 25%</div>
                <div className="purchased-item-subtotal-details">
                  ${getVat().toFixed(2)}
                </div>
              </div>
            </div>
            <div className="purchased-item-total-container">
              <div className="purchased-item-total">Total</div>
              <div className="purchased-item-total-details">
                ${getTotoal().toFixed(2)}
              </div>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <Button
            color="primary"
            variant="contained"
            className={classes.btn}
            onClick={() => history.push("/fifth-screen")}
          >
            Confirm
          </Button>
          <div className="homepage-add-product">
            <Link to="/second-screen">
              <div className="homepage-link-text">Add Products</div>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                <ArrowForwardIosIcon />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
