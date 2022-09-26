import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { User } from "../../utils/customTypes";

const Home = () => {
  // const getAllUsers = async () => {
  //   const { data } = await axios.get("http://localhost:1337/api/users/");
  //   return data;
  // };
  // const { data: users, isError, isLoading } = useQuery(["user"], getAllUsers);

  return (
    <Box component="section">
      {/* {isLoading && <Box>Loading..</Box>}
      {isError && <Box>Error!</Box>}
      {users?.map((user: User) => (
        <Box
          key={user._id}
          component="ul"
          sx={{
            background: "gray",
            borderRadius: ".5rem",
            minWidth: "400px",
            padding: "1rem",
          }}
        >
          <Box component="li">{user.name}</Box>
          <Box component="li">{user.username}</Box>
          <Box component="li">{user.role}</Box>
          <Box component="li">{user.rank}</Box>
        </Box>
      ))} */}
    </Box>
  );
};

export default Home;
