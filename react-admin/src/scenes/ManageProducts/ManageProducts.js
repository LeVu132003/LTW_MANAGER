import { Box, IconButton, Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { productData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import "./ManageProducts.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogDefault from './ToggleCreate'
import DialogUpdate from './ToggleUpdate'
import DialogDelete from './ToggleDelete'
const ManageProducts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID",headerAlign: "center",align: "center", flex: 0.25 },
    { field: "title", headerName: "Tên sản phẩm",headerAlign: "center", align: "center",flex: 1.5 },
    {
      field: "color",
      headerName: "Màu sắc",
      headerAlign: "center",
      flex: 0.8,
      cellClassName: "name-column--cell",
      align: "center",

    },
    {
      field: "rom",
      headerName: "ROM",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "price",
      headerName: "Giá thành",
      headerAlign: "center",
      flex: 1,
      align: "center",

    },
    {
      field: "remain_amount",
      headerName: "Số lượng",
      headerAlign: "center",
      flex: 1,
      align: "center",

    },
    {
      field: "thumbnail",
      headerName: "Ảnh chính",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="userItem">
            <img src={params.row.thumbnail} height="100%" />
          </div>
        );
      },
    },
    {
      field: "description",
      headerName: "Mô tả",
      headerAlign: "center",
      flex: 2,
      align: "center",

    },

    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      flex: 1,
      align: "center",
      renderCell: (params) => {
        return (
          <>
            {HandleView(params)}
            <DialogUpdate values = {params}/>
            <DialogDelete values = {params}/>
          </>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <Header
          title="Quản lí sản phẩm"
          subtitle="Danh sách điện thoại được quản lí"
        />
        <DialogDefault/>
      </div>
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
          rows={productData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowHeight={() => "100px"}
        />
      </Box>
    </Box>
  );
};

export default ManageProducts;



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
