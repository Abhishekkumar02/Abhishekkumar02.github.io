new Chart(document.getElementById("radar-chart1"), {
    type: 'radar',
    data: {

      labels: ["Python", "Java", "C/C++", "DS & algo", "Android"],
      datasets: [
        {
          label: "Programming Languages",
          fill: true,
          backgroundColor: "rgba(133, 193, 233,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#0e76a8",
          data: [95,90,85,75,80]
        }
      ]
    },
    options: {
      
      responsive: true,
      maintainAspectRatio: true,
      scale: {
        angleLines: {
            display: true
        },
        ticks: {
            beginAtZero: true,
            min: 20,
            max: 100,
            stepSize: 20
        }
    }
  }
});

new Chart(document.getElementById("radar-chart2"), {
    type: 'radar',
    data: {
      labels: ["HTML", "CSS", "Javascript", "Reactjs", "CSS Frameworks"],
      datasets: [
        {
          label: "Web development",
          fill: true,
          backgroundColor: "rgba(133, 193, 233,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#1b3044",
          data: [95,90.61,75,75,80]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scale: {
        angleLines: {
            display: true
        },
        ticks: {
            min: 20,
            max: 100,
            stepSize: 20
        }
    }
    }
});
new Chart(document.getElementById("radar-chart3"), {
    type: 'radar',
    data: {
      labels: ["Django", "Android", "Github", "Jira", "Illustrator"],
      datasets: [
        {
          label: "Frameworks And Tools",
          fill: true,
          backgroundColor: "rgba(133, 193, 233,0.2)",
          borderColor: "#0e76a8",
          pointBorderColor: "#fff",
          pointBackgroundColor: "#1b3044",
          data: [85,85,85,90,80]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scale: {
        angleLines: {
            display: true
        },
        ticks: {
            min: 20,
            max: 100,
            stepSize: 20
        }
    }
    }
});
