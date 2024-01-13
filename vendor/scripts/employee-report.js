// Employee Time
var ctx = document.getElementById("employeeTime").getContext("2d");
var employeeTimesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Employee Time",
        data: [8, 7, 10, 11],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#2ADEF5",
        borderWidth: 4,
        lineTension: 0.3,
        showLine: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Employee Time",
      fontColor: "black",
      fontSize: 20,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "transparent",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});

//Break Times
var ctx = document.getElementById("breakTime").getContext("2d");
var breakTimeChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Break Time",
        data: [8, 7, 10, 11],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#21357C",
        borderWidth: 4,
        lineTension: 0.3,
        showLine: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Break Time",
      fontColor: "black",
      fontSize: 20,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "transparent",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});

//Total Employees

var ctx = document.getElementById("totalEmployees").getContext("2d");
var totalEmployeesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Total Employees",
        data: [8, 7, 10, 11],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#F29A2E",
        borderWidth: 4,
        lineTension: 0.3,
        showLine: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Total Employees",
      fontColor: "black",
      fontSize: 20,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "transparent",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});

//Employee Attendace
const employeeAttendaceCTX = document
  .getElementById("employeeAttendace")
  .getContext("2d");
const employeeAttendaceChart = new Chart(employeeAttendaceCTX, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Present",
        data: [90, 75, 80, 65, 75, 50, 80, 75, 90],
        backgroundColor: "#21357C",
      },
      {
        label: "Late",
        data: [60, 55, 25, 80, 55, 25, 50, 40, 60],
        backgroundColor: "#2ADEF5",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
    elements: {
      line: {
        borderColor: "transparent",
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 60,
        bottom: 60,
      },
    },
  },
});

//Sales by Traffic Source
var salesByTrafficSourceCTX = document
  .getElementById("salesByTrafficSource")
  .getContext("2d");
var salesByTrafficSourceChart = new Chart(salesByTrafficSourceCTX, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Sales By Traffic Source",
        data: ["0", "03", "02", "04", "02", "05", "03", "06", "02", "07", "03"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#21357C",
        borderWidth: 4,
        lineTension: 0.3,
        showLine: true,
        pointRadius: 0,
      },
      {
        type: "bar",
        label: "Sales By Traffic Source (Line)",
        data: ["0", "00", "00", "05", "00", "00", "00", "00", "00", "00", "00"],
        borderColor: "#D5F8FD",
        backgroundColor: "#D5F8FD",
        borderWidth: 2,
      },
    ],
  },

  options: {
    title: {
      display: true,
      text: "Total Employees",
      fontColor: "black",
      fontSize: 20,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "transparent",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 30,
        bottom: 0,
      },
    },
  },
});

//Session by social media
var ctx = document.getElementById("sessionBySocialMedia").getContext("2d");
var sessionBySocialMediaChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Session by social media",
        data: ["0", "03", "02", "04", "02", "05"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#21357C",
        borderWidth: 4,
        lineTension: 0.3,
        showLine: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Session by social media",
      fontColor: "black",
      fontSize: 20,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "transparent",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});

//Devic Type
var ctx = document.getElementById("devicType").getContext("2d");
var devicTypeChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Devic Type",
        data: ["06", "03", "05", "06", "01", "00"],
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderColor: "#21357C",
        borderWidth: 4,
        lineTension: 0.3,
        showLine: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Devic Type",
      fontColor: "black",
      fontSize: 20,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      line: {
        borderColor: "transparent",
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  },
});



var ctx = document.getElementById("employeeActiveTime").getContext("2d");
var employeeActiveTimeChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Label 1",
      "Label 2",
      "Label 3",
      "Label 4",
      "Label 5",
      "Label 6",
      "Label 7",
    ],
    datasets: [
      {
        label: "Employee ActiveTime",
        data: [200, 300, 400, 300, 200, 100, 50],
        backgroundColor: [
          "#E6EEF5",
          "#E6EEF5",
          "#E6EEF5",
          "#E6EEF5",
          "#2ADEF5",
          "#E6EEF5",
          "#E6EEF5",
        ],
        borderRadius: ["15"],
        borderColor: [
          "#E6EEF5",
          "#E6EEF5",
          "#E6EEF5",
          "#E6EEF5",
          "#2ADEF5",
          "#E6EEF5",
          "#E6EEF5",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          stepSize: 100,
          max: 500,
          min: 0,
          padding: 10,
          callback: function(value) {
            return value; 
          },
        },
      },
    },
    plugins: {
      legend: false,
    },
  },
});
