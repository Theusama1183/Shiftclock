Chart.defaults.global.defaultFontFamily = 'Poppins, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("myAreaChart");
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Requests",
      data: [500, 200, 250, 200, 250, 200, 100, 150, 200, 150, 180, 130],
      backgroundColor: 'rgba(58, 189, 111, 0.2)', // Line 1 color
      borderColor: 'rgba(58, 189, 111, 0.6)' // Line 1 border color
    }, {
      label: "Requests",
      data: [200, 250, 200, 350, 350, 400, 450, 480, 300, 350, 210, 280, 300],
      backgroundColor: 'rgba(42, 222, 245, 0.1)', // Line 2 color
      borderColor: 'rgba(42, 222, 245, 0.6)' // Line 2 border color
    }]
  },
  options: {
    tooltips: {
      mode: 'index'
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 100,
          max: 500,
          min: 0,
          padding: 10,
        },
      }]
    }
  },
  legend: {
    display: false,
  },
});
