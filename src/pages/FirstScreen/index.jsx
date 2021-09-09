import React from "react";
import { Link } from "react-router-dom";
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
  };
});

const Index = () => {
  const classes = useStyle();
  return (
    <div className="container">
      <div className="homepage-content">
        <div className="homepage-title"> Your Shopping Cart </div>
        <div className="homepage-helper-text">
          To get started, click button below and products to your cart.
        </div>
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
  );
};

export default Index;
