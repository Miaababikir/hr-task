import { format } from "date-fns";

export const formatDatetime = (date: Date) => {
  return format(date, "yyyy-MM-dd HH:mm");
};

export const resolveObject = (object: any, path: string) => {
  return path.split(".").reduce((object, name) => {
    return object?.[name];
  }, object);
};
