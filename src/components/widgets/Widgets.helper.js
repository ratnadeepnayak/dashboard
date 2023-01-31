import GavelIcon from "@mui/icons-material/Gavel";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ForestIcon from "@mui/icons-material/Forest";
import { sumArrayValues } from "../../utils/helper";
export const getScoreData = (type, todos) => {
  let scoreData;
  switch (type) {
    case "Environment":
      return (scoreData = {
        title: "Environment Avg Score",
        link: "How is this calculated",
        avgScore: sumArrayValues(todos.map((score) => score.environment)),
        diff: -2,
        icon: (
          <ForestIcon
            className="icon"
            style={{
              color: "green",
            }}
          />
        ),
      });
    case "Social":
      return (scoreData = {
        title: "Social Avg Score",
        link: "How is this calculated",
        avgScore: sumArrayValues(todos.map((score) => score.social)),
        diff: 4,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "red",
            }}
          />
        ),
      });
    case "Governance":
      return (scoreData = {
        title: "Governance Avg Score",
        link: "How is this calculated",
        avgScore: sumArrayValues(todos.map((score) => score.governance)),
        diff: 10,
        icon: (
          <GavelIcon
            className="icon"
            style={{
              color: "black",
            }}
          />
        ),
      });
    default:
      return null;
  }
};
