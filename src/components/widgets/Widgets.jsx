import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useGetTableDataQuery } from "../../api/apiSlice";
import { sumArrayValues } from "../../utils/helper";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import GavelIcon from "@mui/icons-material/Gavel";
import "./Widgets.scss";

export const Widget = ({ type }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let scoreData;
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

  const diff = 20;

  switch (type) {
    case "Environment":
      scoreData = {
        title: "Environment Avg Score",
        link: "How is this calculated",
        avgScore: sumArrayValues(todos.map((score) => score.environment)),
        icon: (
          <EmojiPeopleIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Social":
      scoreData = {
        title: "Social Avg Score",
        link: "How is this calculated",
        avgScore: sumArrayValues(todos.map((score) => score.social)),
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "Governance":
      scoreData = {
        title: "Governance Avg Score",
        link: "How is this calculated",
        avgScore: sumArrayValues(todos.map((score) => score.governance)),
        icon: (
          <GavelIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{scoreData.title}</span>
        <span className="counter">{scoreData.avgScore}</span>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {scoreData.title}
          </Typography>
        </Box>
      </Modal>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {scoreData.icon}
      </div>
    </div>
  );
};
