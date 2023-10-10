import { Box, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const SearchStyle = styled("div")(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontFamily: "unset",
    borderRadius: "8px",
  },
}));

const SearchBar = ({ setSearch }) => {
  return (
    <SearchStyle>
      <Box component="form" noValidate autoComplete="off" mb={3}>
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
    </SearchStyle>
  );
};

export default SearchBar;
