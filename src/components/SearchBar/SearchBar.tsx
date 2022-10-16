import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useEffect } from "react";
import { useRenderCount } from "../../common/hooks/useRenderCount";
import { useMemo, useRef } from "react";

import _ from "lodash";

interface SearchBarProps {
  placeHolderText: string;
  handleSearchQuery: (event: any) => void;
  handleFuseSearchKeySelection: (event: any) => void;
}

const SearchBar = ({
  placeHolderText,
  handleFuseSearchKeySelection = () => {},
  handleSearchQuery = () => {},
}: SearchBarProps) => {
  const muiInputRef = useRef<HTMLInputElement | null>(null);
  const renderCount = useRenderCount();

  const handleClearSearchInput = () => {
    if (muiInputRef.current) {
      const input: ChildNode | any =
        muiInputRef.current.childNodes[0].childNodes[0];
      input.value = "";
    }
  };
  const debouncedQuerySearch = useMemo(
    () => _.debounce(handleSearchQuery, 1000),
    [handleSearchQuery]
  );

  // Stopping debouncedQuerySearch from being invoked after component is unmounted
  useEffect(() => {
    return () => {
      debouncedQuerySearch.cancel();
    };
  }, []);

  return (
    <>
      <Box color={"black"}>SearchBar: {renderCount}</Box>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <TextField
          ref={muiInputRef}
          placeholder={`Search Users By ${placeHolderText}`}
          variant="outlined"
          fullWidth
          onChange={debouncedQuerySearch}
        />
        <FormControl>
          <InputLabel>Search By</InputLabel>
          <Select
            sx={{ minWidth: "100px" }}
            label={"Search By"}
            defaultValue={"name"}
            onChange={(e) => {
              handleClearSearchInput();
              handleFuseSearchKeySelection(e);
            }}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"team"}>Team</MenuItem>
            <MenuItem value={"email"}>Email</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SearchBar;
