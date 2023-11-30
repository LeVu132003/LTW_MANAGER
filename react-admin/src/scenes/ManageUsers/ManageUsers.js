import { Box,} from "@mui/material";
import { tokens } from "../../theme";
import { userData } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import * as React from "react";
import ToggleCreate from './ToggleCreate'
import ToggleUpdate from './ToggleUpdate'
import ToggleDelete from './ToggleDelete'
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
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
          title="Quản lí sản phẩm"
          subtitle="Danh sách điện thoại được quản lí"
        />
        <ToggleCreate/>
      </div>
      <Box
        m="40px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.dark,
            color: colors.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.dark,
            color: colors.light,
          },
        }}
      >
        <DataGrid
          pagination
          slots={{
            pagination: CustomPagination,
          }}
          rows={userData}
          columns={columns}
          rowHeight={100}
          initialState={{
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        />
      </Box>
    </Box>
  );
};
function Pagination({ page, onPageChange, className }) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event, newPage - 1);
      }}
    />
  );
}

function CustomPagination(props) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}
export default ManageUsers;