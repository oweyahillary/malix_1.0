import { Box } from "@mui/material";

import Headers from "../../components/header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex">
        <Headers title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
