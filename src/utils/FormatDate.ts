export const getDate = (date: any) => {
  return new Date(date).toDateString().split(" ").join(",");
};

export const getTime = (time: any) => {
  return new Date(time).toLocaleTimeString();
};
