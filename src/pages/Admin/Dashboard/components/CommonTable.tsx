import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";

import {
  createEventData,
  createUserData,
  EventColumn,
  eventColumns,
  UserColumn,
  userColumns,
} from "types/table.types";
import { getDate } from "utils/FormatDate";
import { ROUTES } from "../../../../constants";

export default function CommonTable(props: any) {
  const { events, users, state } = props;
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const eventRows = state
    ? events?.map((event: any) =>
        createEventData(
          event.id,
          event.name,
          event.mode,
          event.start_date,
          event.venue,
          event.status,
          event.entry_fees
        )
      )
    : users?.map((user: any) =>
        createUserData(
          user.id,
          user.first_name,
          user.last_name,
          user.email,
          user.contact_no,
          getDate(user.created_at),
          user.role_id === 2 ? "Organizer" : "Registrant",
          user.is_active
        )
      );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {state
                ? eventColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <b>{column.label}</b>
                    </TableCell>
                  ))
                : userColumns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <b>{column.label}</b>
                    </TableCell>
                  ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {state
              ? eventRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {eventColumns.map((column: EventColumn) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div
                              onClick={() =>
                                navigate(ROUTES.DISPLAY_EVENT.replace(":event_id",JSON.stringify(row.id)))
                              }
                            >
                              {value}
                            </div>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))
              : eventRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: any) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {userColumns.map((column: UserColumn) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <div>{value}</div>
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={eventRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
