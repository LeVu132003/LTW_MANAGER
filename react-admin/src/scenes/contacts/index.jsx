import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex:0.25},
    { field: "title", headerName: "Tên sản phẩm" },
    {
      field: "color",
      headerName: "Màu sắc",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "rom",
      headerName: "ROM",
      headerAlign: "left",
      align: "left",
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
      flex: 1,
    },
    {
      field: "description",
      headerName: "Mô tả",
      flex: 1,
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
  ];

  return (
    <Box m="20px">
      <Header
        title="Quản lí sản phẩm"
        subtitle="Danh sách điện thoại được quản lí"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
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
        />
      </Box>
    </Box>
  );
};

export default Contacts;
