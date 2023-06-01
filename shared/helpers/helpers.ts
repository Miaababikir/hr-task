import { format } from "date-fns";

export const formatDatetime = (date: Date) => {
  return format(date, "yyyy-MM-dd HH:mm");
};
