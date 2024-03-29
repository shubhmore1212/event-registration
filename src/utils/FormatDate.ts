// export function formatDate(newDate: any) {
//   const months: any = {
//     0: "January",
//     1: "February",
//     2: "March",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "August",
//     8: "September",
//     9: "October",
//     10: "November",
//     11: "December",
//   };
//   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const d = newDate;
//   const year = d.getFullYear();
//   const date = d.getDate();
//   const monthIndex: any = d.getMonth();
//   const monthName: any = months[monthIndex];
//   const dayName = days[d.getDay()]; // Thu
//   const formatted = `${dayName}, ${date} ${monthName} ${year}`;
//   return formatted.toString();
// }

export const getDate = (date: any) => {
  return new Date(date).toDateString().split(" ").join(",");
};

export const getTime = (time: any) => {
  return new Date(time).toLocaleTimeString();
};
