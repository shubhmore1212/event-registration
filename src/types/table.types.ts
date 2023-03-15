export interface EventColumn {
  id: "name" | "mode" | "start_date" | "venue" | "status" | "entry_fees";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export interface UserColumn {
  id:
    | "first_name"
    | "email"
    | "contact_no"
    | "role_id"
    | "created_at"
    | "is_active";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

export const userColumns: readonly UserColumn[] = [
  { id: "first_name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email Id", minWidth: 100 },
  {
    id: "contact_no",
    label: "Contact No",
    minWidth: 170,
    align: "right",
  },
  {
    id: "role_id",
    label: "Role",
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

export const eventColumns: readonly EventColumn[] = [
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

export interface EventData {
  id: string;
  name: string;
  mode: string;
  start_date: string;
  venue: string;
  status: string;
  entry_fees: string;
}

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  contact_no: string;
  created_at: string;
  role_id: string;
  is_active: string;
}

export function createEventData(
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

export function createUserData(
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  contact_no: string,
  created_at: string,
  role_id: string,
  is_active: string
): UserData {
  return {
    id,
    first_name,
    last_name,
    email,
    contact_no,
    created_at,
    role_id,
    is_active,
  };
}
