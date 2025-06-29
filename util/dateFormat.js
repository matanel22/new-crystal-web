import { format, parseISO } from "date-fns";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return format(parseISO(dateStr), "dd/MM/yyyy");
};

export{
  formatDate,
}