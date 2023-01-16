import { Box } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { User } from "../../common/utils/customTypes";
import {
  getAllMobileSuits,
  getAllUsers,
} from "../../common/utils/requestHandlers";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useCallback, useState } from "react";
import Fuse from "fuse.js";
import _ from "lodash";
import { useRenderCount } from "../../common/hooks/useRenderCount";
import Button from "@mui/material/Button";

const Home = () => {
  const [searchKeys, setSearchKeys] = useState<string[]>(["name"]);
  const [searchData, setSearchData] = useState<Array<any> | null>(null);
  const [placeHolderText, setPlaceHolderText] = useState<string>("Name");
  //const {
  //   data: users,
  //   isError,
  //   isLoading,
  // } = useQuery(["user"], getAllUsers, { refetchOnWindowFocus: false });

  // const { mutate } = useMutation(getAllMobileSuits);
  // const renderCount = useRenderCount();

  // const fuseOptions = {
  //   keys: searchKeys,
  // };

  // const handleSearchQuery = (event: any) => {
  //   const query = event.target.value.trim();
  //   const fuse = new Fuse<User>(users, fuseOptions);
  //   const result = fuse.search(query);
  //   setSearchData(result); //may need to add to debounced useMemo dependency array
  // };

  // const handleSearchKeySelection = useCallback(
  //   (event: any) => {
  //     let newSearchKeys = [];
  //     const searchKey = event.target.value.trim();
  //     setPlaceHolderText(_.startCase(searchKey));
  //     newSearchKeys.push(searchKey);
  //     setSearchKeys(newSearchKeys);
  //   },
  //   [searchKeys]
  // );

  // if (isLoading) {
  //   return <>Loading...</>;
  // }

  // if (isError) {
  //   return <>Error</>;
  // }

  return (
    <Box component="section">
      {/* // <Button onClick={() => mutate()}>GET ALL MOBILE SUITS</Button>
      // <Box color="black">Home: {renderCount}</Box>
      // <SearchBar
      //   placeHolderText={placeHolderText}
      //   handleSearchQuery={handleSearchQuery}
      //   handleSearchKeySelection={handleSearchKeySelection}
      // />
      // <Box
      //   sx={{ border: "1px solid black", marginTop: "5rem", color: "black" }}
      // >
      //   {searchData?.length === 0 && <>No results</>}
      //   {searchData ? (
      //     searchData.map((item: any) => (
      //       <ul key={item.item._id}>
      //         <li>{item.item.name}</li>
      //         <li>{item.item.email}</li>
      //         <li>{item.item.team}</li>
      //         <li>{item.item.username}</li>
      //         <li>{JSON.stringify(item.item.roles)}</li>
      //       </ul>
      //     ))
      //   ) : (
      //     <>No Data Available</>
      //   )}
      // </Box> */}
    </Box>
  );
};

export default Home;
