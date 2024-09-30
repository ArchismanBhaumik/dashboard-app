import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar,
  TablePagination, IconButton, Typography, Chip, InputBase, TableFooter
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import c1 from "../assets/c1.svg";
import c2 from "../assets/c2.svg";
import c3 from "../assets/c3.svg";
import c4 from "../assets/c4.svg";
import c5 from "../assets/c5.svg";
import c6 from "../assets/c6.svg";

// Orders Data
const orders = [
  { id: '#CM9801', user: 'Natalie Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress', avatar: c1 },
  { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete', avatar: c2 },
  { id: '#CM9803', user: 'Drew Cono', project: 'Client Project', address: 'Bagwell Avenue Oslo', date: '1 hour ago', status: 'Pending', avatar: c3 },
  { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved', avatar: c4 },
  { id: '#CM9805', user: 'Antil Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected', avatar: c5 }
];

// Status Color Mapping
const statusColors = {
  'In Progress': 'primary',
  'Complete': 'success',
  'Pending': 'warning',
  'Approved': 'success',
  'Rejected': 'error'
};

// Styled Components for Search Container
const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  borderRadius: theme.shape?.borderRadius || '4px',
  backgroundColor: theme.palette?.common?.white || '#ffffff',
  padding: '0 10px',
  marginLeft: theme.spacing(1),
  marginBottom: theme.spacing(2),
  width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

// Main OrderList Component with Dark Mode Support
const OrderList = ({ darkMode }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Paper 
      sx={{ 
        backgroundColor: darkMode ? '#333' : '#fff', 
        color: darkMode ? '#fff' : '#000', 
        boxShadow: darkMode ? '0px 4px 10px rgba(0, 0, 0, 0.7)' : '0px 4px 10px rgba(0, 0, 0, 0.1)', 
        marginLeft:'5px',
        marginRight:'5px'
      }}
    >
      <div className="d-flex align-items-center m-2 justify-content-between">
        <span className="fs-4">Order List</span>
        <button onClick={handleBackClick} className="btn btn-secondary me-2">
          Back
        </button>
      </div>
      <SearchContainer 
        sx={{ 
          backgroundColor: darkMode ? '#444' : '#f5f5f5', 
          color: darkMode ? '#fff' : '#000' 
        }}
      >
        <SearchIcon sx={{ color: darkMode ? '#fff' : '#000' }} />
        <StyledInputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          sx={{ color: darkMode ? '#fff' : '#000' }}
        />
      </SearchContainer>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: darkMode ? '#ddd' : '#000' }}>Order ID</TableCell>
              <TableCell sx={{ color: darkMode ? '#ddd' : '#000' }}>User</TableCell>
              <TableCell sx={{ color: darkMode ? '#ddd' : '#000' }}>Project</TableCell>
              <TableCell sx={{ color: darkMode ? '#ddd' : '#000' }}>Address</TableCell>
              <TableCell sx={{ color: darkMode ? '#ddd' : '#000' }}>Date</TableCell>
              <TableCell sx={{ color: darkMode ? '#ddd' : '#000' }}>Status</TableCell>
              <TableCell sx={{ color: darkMode ? '#ddd' : '#000' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((order) => (
                <TableRow key={order.id} sx={{ backgroundColor: darkMode ? '#444' : '#fff' }}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar alt={order.user} src={order.avatar} />
                      <Typography style={{ marginLeft: 10, color: darkMode ? '#ddd' : '#000' }}>
                        {order.user}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell>{order.project}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={order.status}
                      color={statusColors[order.status]}
                      variant="outlined"
                      sx={{ color: darkMode ? '#ddd' : '#000' }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton>
                      <MoreVertIcon sx={{ color: darkMode ? '#ddd' : '#000' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                sx={{ color: darkMode ? '#ddd' : '#000' }}
                rowsPerPageOptions={[5, 10, 25]}
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default OrderList;
