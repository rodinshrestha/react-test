import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../../Redux/actions/cart.actions";
import { useHistory } from "react-router-dom";
import ConformationBox from "../../components/ConformationBox";
import { Modal, makeStyles, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 50,
    padding: "3px",
    minWidth: "unset",
  },
  backBtn: {
    borderRadius: 20,
    padding: "10px 50px",
  },
  addToBtn: {
    borderRadius: 20,
    padding: "10px 15px",
  },
}));

const Index = () => {
  const [isConformModal, setIsConformModal] = React.useState(false);
  const [conformModalObj, setConformModalObj] = React.useState({
    title: "",
    msg: "",
    onSuccess: "",
  });
  const selectedItem = useSelector((state) => state.cart.product);
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  console.log(selectedItem);
  return (
    <>
      <ConformationBox
        data={conformModalObj}
        isConformModal={isConformModal}
        setIsConformModal={setIsConformModal}
      />
      <Modal
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className="product-list-container">
          <div className="product-selected-list-title">Selected Order List</div>

          <div className="product-selected-list-content">
            <div className="product-selected-list-header">
              <div className="product-selected-title-food">Food</div>
              <div className="product-selected-title-qty">Quantity</div>
              <div className="product-selected-title-unit-price">
                Unit price
              </div>
              <div className="product-selected-title-price"> price</div>
            </div>

            <div className="product-selected-list-content-container">
              {selectedItem?.map((item, i) => {
                return (
                  <div key={i} className="selected-item-container">
                    <div className="selected-item-name">{item.title}</div>
                    <div className="selected-item-qty-container">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => dispatch(increaseQty(item._id))}
                      >
                        <AddIcon />
                      </Button>{" "}
                      {item.quantity}{" "}
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        disabled={item.quantity === 1}
                        onClick={() => dispatch(decreaseQty(item._id))}
                      >
                        <RemoveIcon />
                      </Button>
                    </div>
                    <div className="selected-item-unit-price">
                      ${item.price}
                    </div>
                    <div className="selected-item-price">
                      ${(item.quantity * item.price).toFixed(2)}
                    </div>
                    <div className="selected-item-delete-action">
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={() => {
                          setIsConformModal(true);
                          setConformModalObj({
                            title: "You are about to remove this product",
                            msg: "This will remove your product from the selected list. Are you sure?",
                            onSuccess: () => {
                              dispatch(removeFromCart(item._id));
                              setIsConformModal(false);
                            },
                          });
                        }}
                      >
                        <DeleteForeverIcon />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="product-list-button-container">
            <Button
              color="primary"
              variant="contained"
              className={classes.addToBtn}
              onClick={() => history.push("/fourth-screen")}
            >
              Add to Order
            </Button>
            <Button
              color="primary"
              variant="outlined"
              className={classes.backBtn}
              onClick={() => history.push("/second-screen")}
            >
              Back
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Index;
