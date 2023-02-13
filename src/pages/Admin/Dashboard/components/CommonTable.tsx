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

interface EventColumn {
  id: "name" | "mode" | "start_date" | "venue" | "status" | "entry_fees";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface UserColumn {
  id:
    | "name"
    | "email"
    | "contact"
    | "role"
    | "status"
    | "created_at"
    | "is_active";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const userColumns: readonly UserColumn[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email Id", minWidth: 100 },
  {
    id: "contact",
    label: "Contact No",
    minWidth: 170,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
  },
  {
    id: "created_at",
    label: "Created At",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "is_active",
    label: "Is Active",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

const eventColumns: readonly EventColumn[] = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "mode", label: "Mode", minWidth: 100 },
  {
    id: "start_date",
    label: "Start Date",
    minWidth: 170,
    align: "right",
  },
  {
    id: "venue",
    label: "Venue",
    minWidth: 170,
    align: "right",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "entry_fees",
    label: "Entry Fees",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface EventData {
  id: string;
  name: string;
  mode: string;
  start_date: string;
  venue: string;
  status: string;
  entry_fees: string;
}

interface UserData {
  first_name: string;
  last_name: string;
  email: string;
  contact_no: string;
  created_at: string;
  role: string;
  status: string;
}

function createEventData(
  id: string,
  name: string,
  mode: string,
  start_date: string,
  venue: string,
  status: string,
  entry_fees: string
): EventData {
  return { id, name, mode, start_date, venue, status, entry_fees };
}

export default function CommonTable(props: any) {
  const { events } = props;
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const eventRows = events.map((event: any) =>
    createEventData(
      event.id,
      event.name,
      event.mode,
      event.start_date,
      event.venue,
      event.status,
      event.entry_fees
    )
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event);
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
              {eventColumns.map((column) => (
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
            {eventRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {eventColumns.map((column: EventColumn) => {
                      const value = row[column.id];
                      console.log(value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <div
                            onClick={() => navigate(`/display-event/${row.id}`)}
                          >
                            {value}
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
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
