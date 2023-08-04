import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCoffee } from "../../data/mockData";
import Headers from "../../components/header";

const Catalogue = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // {
    //   field: "id,",
    //   headerName: "ID",
    // },
    {
      field: "name",
      headerName: "Coffee Name",
      flex: 1,
    },
    {
      field: "Desc",
      headerName: "Description",
      flex: 2,
    },
    {
      field: "QTY",
      headerName: "Quantity in Stock (KG)",
      type: "number",
      headerAlign: "left",
      flex: 1,
      align: "left",
    },
    {
      field: "Price",
      headerName: "Price/KG",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  return (
    <Box m="20px">
      <Headers
        title="CATALOGUE"
        subtitle="Inventory of all products in store"
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
        }}
      >
        <DataGrid
          rows={mockDataCoffee}
          columns={columns}
          getRowHeight={() => "auto"}
          getEstimatedRowHeight={() => 150}
          autoHeight={true}
          sx={{
            [`& .${gridClasses.cell}`]: {
              py: 1,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Catalogue;
