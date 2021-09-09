import React from "react";
import { Modal, makeStyles, Button } from "@material-ui/core";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 30,
    padding: "10px 50px",
  },
}));

const Index = ({ data, isConformModal, setIsConformModal }) => {
  const classes = useStyles();
  return (
    <Modal
      open={isConformModal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.modal}
    >
      <div className="conformation-box-container">
        <div className="conformation-image">
          <CancelOutlinedIcon
            style={{ color: "red", width: "35px", height: "35px" }}
          />
        </div>
        <div className="conformation-text-conatiner">
          <div className="conformation-text-title">{data.title}</div>
          <div className="conformation-helper-text">{data.msg} </div>
        </div>

        <div className="conformation-btn-container">
          <Button
            onClick={() => setIsConformModal(false)}
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Cancel
          </Button>
          <Button
            onClick={data.onSuccess}
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Confirm
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Index;
