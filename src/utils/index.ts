export function daysBetween(date: any) {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(
    new Date(date).getTime() - new Date().getTime()
  );
  return Math.round(differenceMs / ONE_DAY);
}
