import { faker } from "@faker-js/faker";

const months = ["January", "February", "March", "April", "May", "June", "July"];
const userTypes = ["Candidates", "Admins", "Super Admins", "Guests"];
export const barChartDataset = {
  labels: months,
  datasets: [
    {
      label: "Candidates",
      data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Guests",
      data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const pieChartDataset = {
  labels: userTypes,
  datasets: [
    {
      label: "# of users by role",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
