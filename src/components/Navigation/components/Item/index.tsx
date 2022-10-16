import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

type NavigationItem = {
  linkPath: string;
  linkTitle: string;
};
const NavigationItem = ({ linkPath, linkTitle }: NavigationItem) => {
  return (
    <Link to={linkPath}>
      <Typography marginRight="1rem">{linkTitle}</Typography>
    </Link>
  );
};

export default NavigationItem;
