export const formatDateWithLeadingZeros  = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  export const formatDateWithMonthName = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month =
      date
        .toLocaleString("default", { month: "short" })
        .charAt(0)
        .toUpperCase() +
      date.toLocaleString("default", { month: "short" }).slice(1);
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };