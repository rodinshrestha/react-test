import React from "react";
import {
  addToCart,
  removeFromCart,
  reset,
} from "../../Redux/actions/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Modal,
  makeStyles,
  OutlinedInput,
  InputAdornment,
  Checkbox,
  Button,
} from "@material-ui/core";
import { productList } from "../../productsList";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: "10px 50px",
  },
}));

const Index = () => {
  const [searchField, setSearchField] = React.useState("");
  const selectedProduct = useSelector((state) => state.cart.product);
  const history = useHistory();
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChange = (e, item) => {
    if (e.target.checked) {
      dispatch(addToCart(item));
    } else {
      dispatch(removeFromCart(item.title));
    }
  };

  const filteredData = productList.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchField.toLowerCase()) ||
      item.price.toString().toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleClick = () => {
    if (selectedProduct.length) {
      history.push("/third-screen");
    } else {
      alert("Please select aleast one product. To procced further");
    }
  };

  console.log(selectedProduct);

  return (
    <Modal
      open={true}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <div className="product-list-container">
        <div className="Product-list-header">
          <div className="product-list-title">Product List </div>
          <div className="product-list-search">
            <OutlinedInput
              id="input-with-icon-adornment"
              variant="outlined"
              placeholder="Search food items"
              value={searchField}
              onChange={(e) => setSearchField(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </div>
        </div>

        <div className="product-list-content">
          <div className="product-list-content-header">
            <div className="product-list-content-header-container">
              <div className="product-list-content-header-title">Food</div>
              <div className="product-list-content-header-image">
                <ArrowDropUpIcon />
              </div>
            </div>
            <div className="product-list-content-header-container-price">
              <div className="product-list-content-header-title">Price</div>
              <ArrowDropUpIcon />
            </div>
          </div>
          <div className="product-item-container">
            {filteredData.map((item, i) => {
              return (
                <div className="product-item-content" key={i}>
                  <div className="product-item-left">
                    <div className="product-item-checkbox">
                      {" "}
                      <Checkbox
                        color="primary"
                        onChange={(e) => handleChange(e, item)}
                        checked={selectedProduct.some(
                          (data) => data.title === item.title
                        )}
                      />
                    </div>
                    <div className="product-item-name">{item.title}</div>
                  </div>
                  <div className="product-item-price"> ${item.price}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="product-list-button-container">
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={handleClick}
          >
            Done
          </Button>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => dispatch(reset())}
          >
            Reset
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Index;
