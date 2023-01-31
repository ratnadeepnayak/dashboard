import "./DataTable.scss";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { columnData } from "../../datatablesource";
import { useState } from "react";
import {
  useGetTableDataQuery,
  useDeleteTableDataMutation,
  useAddTableDataMutation,
} from "../../api/apiSlice";

export const Datatable = () => {
  const [newTermValue, setNewTermValue] = useState("");
  const { data: todos, isLoading, isSuccess, isError } = useGetTableDataQuery();
  const [deleteTodo] = useDeleteTableDataMutation();
  const [addTodo] = useAddTableDataMutation();

  const handleDelete = (id) => {
    deleteTodo({ id });
  };

  const handleChange = (event) => {
    setNewTermValue(event.target.value);
  };

  const handleClick = () => {
    addTodo({
      id: todos[todos.length - 1].id + 1,
      title: newTermValue,
      environment: Math.ceil(Math.random()),
      social: Math.ceil(Math.random()),
      governance: Math.ceil(Math.random()),
      date: "2021-10-21",
      company: "tesla",
      completed: false,
    });

    setNewTermValue("");
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  if (isLoading) {
    return <h1>Loading.....</h1>;
  } else if (isSuccess) {
    return (
      <div className="datatable">
        <div className="datatableTitle">
          <div>
            <input
              type="text"
              value={newTermValue}
              onChange={handleChange}
              className="inputholder"
              placeholder="Enter comapny name"
            />
            <button disabled={newTermValue.length === 0} onClick={handleClick}>
              Add New
            </button>
          </div>
        </div>
        <DataGrid
          className="datagrid"
          rows={todos}
          columns={columnData.concat(actionColumn)}
          rowsPerPageOptions={[]}
          components={{ Toolbar: CustomToolbar }}
        />
      </div>
    );
  } else if (isError) {
    return <h1>Something went wrong.....</h1>;
  }
};
