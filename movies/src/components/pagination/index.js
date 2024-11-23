import { Box } from "@mui/material";
import { Pagination } from "@mui/material";


const MoviePagination= ({currentPage, totalPages, onPageChange})=>  {
    return(
        <Box justifyContent={"center"} alignItems="center" display={"flex"}
            sx={{
                margin: "20px 0px"
            }}
                >
        <Pagination
            count={totalPages}
            page={currentPage}
            onChange={onPageChange}
            />
        </Box>
    );
};
export default MoviePagination;