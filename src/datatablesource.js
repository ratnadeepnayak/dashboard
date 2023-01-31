export const columnData = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "Company",
    headerName: "Company",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.title}</div>;
    },
  },
  {
    field: "environment",
    headerName: "Environment",
    width: 100,
  },
  {
    field: "social",
    headerName: "Social",
    width: 100,
  },
  {
    field: "governance",
    headerName: "Governance",
    width: 100,
  },
  {
    field: "cis",
    headerName: "CIS",
    width: 100,
  },
  {
    field: "profile",
    headerName: "Profile",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 200,
  },
];
