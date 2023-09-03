import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
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
      field: "Avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.image || "/noavator.png"} alt="Coffee" />;
      },
    },
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
          "& .MuiDataGrid-toolbarContainer": {
            background: `${colors.primary[400]} !important`,
            padding: "5px",
            marginBottom: "3px",
            flexDirection: "row-reverse",
          },
        }}
      >
        <DataGrid
          rows={mockDataCoffee}
          columns={columns}
          getRowHeight={() => "auto"}
          getEstimatedRowHeight={() => 150}
          autoHeight={true}
          // sx={{
          //   [`& .${gridClasses.cell}`]: {
          //     py: 1,
          //   },
          // }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 1000 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableDensitySelector
          disableColumnMenu
          disableColumnSelector
        />
      </Box>
    </Box>
  );
};

export default Catalogue;
