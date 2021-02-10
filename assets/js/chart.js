new Chart(document.getElementById("radar-chart1"), {
    type: 'radar',
    data: {
      labels: ["Python", "Java", "C/C++", "DS & algo", "Android"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [90,90,90,90,90]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});

new Chart(document.getElementById("radar-chart2"), {
    type: 'radar',
    data: {
      labels: ["Python", "Java", "C/C++", "DS & algo", "Android"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});
new Chart(document.getElementById("radar-chart3"), {
    type: 'radar',
    data: {
      labels: ["Python", "Java", "C/C++", "DS & algo", "Android"],
      datasets: [
        {
          label: "1950",
          fill: true,
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [8.77,55.61,21.69,6.62,6.82]
        }, {
          label: "2050",
          fill: true,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,99,132,1)",
          pointBorderColor: "#fff",
          data: [25.48,54.16,7.61,8.06,4.45]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});
