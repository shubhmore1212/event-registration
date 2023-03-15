export const callback = (
  id: string,
  phase: "mount" | "update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions?: Set<any>
) => {
  console.log(`${id} (${phase}) took ${actualDuration} ms`);
};
