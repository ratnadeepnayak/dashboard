import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useGetTableDataQuery } from "../../api/apiSlice";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Widgets.scss";
import { getScoreData } from "./Widgets.helper";

export const Widget = ({ type }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data: todos = [] } = useGetTableDataQuery();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  let scoreData = getScoreData(type, todos);

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{scoreData.title}</span>
        <span className="counter">{scoreData.avgScore / todos.length}</span>
        <span className="link" onClick={handleOpen}>
          {scoreData.link}
        </span>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {scoreData.title} is calculated by summing all of the scores in your
            portfolio
          </Typography>
        </Box>
      </Modal>
      <div className="right">
        <div
          className={
            scoreData.diff >= 0 ? "percentage positive" : "percentage negative"
          }
        >
          {scoreData.diff >= 0 ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
          {scoreData.diff} %
        </div>
        {scoreData.icon}
      </div>
    </div>
  );
};
