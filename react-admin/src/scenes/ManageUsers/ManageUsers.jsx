import { Box, IconButton, Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { userData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import "./ManageUsers.css";
import * as React from "react";
import ToggleCreate from './ToggleCreate'
import ToggleUpdate from './ToggleUpdate'
import ToggleDelete from './ToggleDelete'
const ManageUsers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID",align: "center", headerAlign: "center", flex: 0.25 },
      
    { field: "username", headerName: "Tên người dùng", align: "center",headerAlign: "center", flex: 1.5 },
    {
      field: "password",
      headerName: "Mật khẩu",
      headerAlign: "center",
      align: "center",
      flex: 0.8,
      cellClassName: "name-column--cell",
    },
    {
      field: "full_name",
      headerName: "Họ và tên",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "phone_number",
      headerName: "Số điện thoại",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },
    {
      field: "avatar",
      headerName: "Ảnh đại diện",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.image === "" &&  
            <img src={`https://genk.mediacdn.vn/thumb_w/640/2016/4-success-kid-3596018b-1458201719100-1458267903230.jpg`} width="100%" height="100%"/>}
          </div>
        );
      },
    },
    {
      field: "role",
      headerName: "Vai trò",
      headerAlign: "center",
      flex: 0.8,
      align: "center",
    },

    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      flex: 1,
      align: "center",

      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <ToggleUpdate values={params}/>
            <ToggleDelete  values={params}/>
          </>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <Header
          title="Quản lí người dùng"
          subtitle="Danh sách người dùng được quản lí"
        />
        <ToggleCreate/>
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
          rows={userData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowHeight={() => "100px"}
        />
      </Box>
    </Box>
  );
};
export default ManageUsers;
