export function convertCalendarToISODate(calendarData: any) {
  const { year, month, day } = calendarData;
  const date = new Date(year, month - 1, day);
  return date.toISOString() || "";
}
