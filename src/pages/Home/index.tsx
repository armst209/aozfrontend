import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { User } from "../../common/utils/customTypes";
import { getAllUsers } from "../../common/utils/requestHandlers";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  ChangeEvent,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Fuse from "fuse.js";
import _ from "lodash";
import { useRenderCount } from "../../common/hooks/useRenderCount";

const Home = () => {
  const [searchKeys, setSearchKeys] = useState<string[]>(["name"]);
  const [searchData, setSearchData] = useState<Array<any> | null>(null);
  const [placeHolderText, setPlaceHolderText] = useState<string>("Name");
  const { data: users, isError, isLoading } = useQuery(["user"], getAllUsers);
  const renderCount = useRenderCount();

  const fuseOptions = {
    keys: searchKeys,
  };

  const handleSearchQuery = (event: any) => {
    const fuse = new Fuse<User>(users, fuseOptions);
    const result = fuse.search(event.target.value);
    setSearchData(result); //may need to add to debounced useMemo dependency array
  };
  const handleFuseSearchKeySelection = (e: any) => {
    let newSearchKeys = [];
    const searchKey = e.target.value.trim();
    setPlaceHolderText(_.startCase(searchKey));
    newSearchKeys.push(searchKey);
    setSearchKeys(newSearchKeys);
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>Error</>;
  }

  return (
    <Box component="section">
      <Box color="black">Home: {renderCount}</Box>
      <SearchBar
        placeHolderText={placeHolderText}
        handleSearchQuery={handleSearchQuery}
        handleFuseSearchKeySelection={handleFuseSearchKeySelection}
      />
      <Box
        sx={{ border: "1px solid black", marginTop: "5rem", color: "black" }}
      >
        {searchData?.length === 0 && <>No results</>}
        {searchData ? (
          searchData.map((item: any) => (
            <ul key={item.item._id}>
              <li>{item.item.name}</li>
              <li>{item.item.email}</li>
              <li>{item.item.team}</li>
              <li>{item.item.username}</li>
              <li>{JSON.stringify(item.item.roles)}</li>
            </ul>
          ))
        ) : (
          <>No Data Available</>
        )}
      </Box>
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
