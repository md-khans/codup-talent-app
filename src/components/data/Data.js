import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Data() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (page, rowsPerPage) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://backendcoduptalent.codupcloud2.com/applicants?page=${
          page + 1
        }&limit=${rowsPerPage}`
      );

      if (!response.ok) {
        throw new Error("Network respone was not ok");
      }
      const result = await response.json();

      if (result.data && Array.isArray(result.data)) {
        const processedRows = result.data.map((item) => {
          const profile = item.parseData?.data?.profile?.basics || {};
          return {
            id: item.id,
            first_name: item.fullName,
            skills: profile.skills ? profile.skills.join(", ") : "N/A",
            experience: profile.total_experience_in_years || "N/A",
          };
        });
        setRows(processedRows);
        console.log("🚀 ~ fetchData ~ result.totalItems:",result.data[0].parseData);
        setTotalItems(result.totalItems);
        setError("");
      }
    } catch (error) {
      setError("No Result Found: ");
      console.log("Error fetchin data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page, rowsPerPage);
  }, [page, rowsPerPage]);

 

  const handleChangePage = (evenr, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDetailsClick = () => {
    navigate("/details");
  };

  return (
    <>
      <h1>Records</h1>
      
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 840 }}>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                <TableCell style={{ minWidth: 170 }}>NAME</TableCell>
                <TableCell style={{ minWidth: 50 }}>SKILLS</TableCell>
                <TableCell style={{ minWidth: 80 }}>
                  YEARS OF EXPERIENCE
                </TableCell>
                <TableCell style={{ minWidth: 150 }}>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.skills}</TableCell>
                    <TableCell>{row.experience}</TableCell>
                    <TableCell>
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={handleDetailsClick}
                      >
                        DETAILS
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        {error && <h3 style={{ color: 'black', textAlign: 'center' }}>{error}</h3>}
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component='div'
          count={totalItems}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
export default Data;
