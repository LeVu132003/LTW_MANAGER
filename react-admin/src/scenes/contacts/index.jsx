import { Box, IconButton, Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/Close";
import "./style.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
// import TextField from '@mui/material/TextField';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.25 },
    { field: "title", headerName: "Tên sản phẩm", flex: 1.5 },
    {
      field: "color",
      headerName: "Màu sắc",
      flex: 0.8,
      cellClassName: "name-column--cell",
    },
    {
      field: "rom",
      headerName: "ROM",
      headerAlign: "left",
      flex: 0.8,
      align: "center",
    },
    {
      field: "summary",
      headerName: "Tổng quát",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Giá thành",
      flex: 1,
    },
    {
      field: "thumbnail",
      headerName: "Ảnh chính",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="userItem">
            <img src={params.row.thumbnail} width="100%" height="100%" />
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Mô tả",
      flex: 2,
    },
    {
      field: "remain_amount",
      headerName: "Số lượng",
      flex: 1,
    },
    {
      field: "discount_id",
      headerName: "Giảm giá",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            {HandleView(params)}
            <HandleEdit />
            <IconButton className="userListDelete">
              <DeleteForeverIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Quản lí sản phẩm"
        subtitle="Danh sách điện thoại được quản lí"
      />
      <Box
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-row .Mui-selected": {
            height: " 200px", // Adjust the value to your desired row height
          },
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowHeight={() => "100px"}
        />
      </Box>
    </Box>
  );
};

export default Contacts;

function HandleEdit() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton className="userListEdit" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>EDIT PRODUCTS</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value="hahahaah"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const HandleView = (params) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton className="userListView" onClick={handleClickOpen}>
        <VisibilityIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle padding="0">
          <h3>{params.row.title}</h3>
        </DialogTitle>
        <DialogTitle>
          <h3>{params.row.price}</h3>
        </DialogTitle>
        <DialogContent display="flex" overflowy="auto">
          <DialogContentText>
            <h5>{params.row.description}</h5>
          </DialogContentText>
          <img
            src={params.row.thumbnail}
            width="80%"
            height="80%"
            alt="Image"
            align="center"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
