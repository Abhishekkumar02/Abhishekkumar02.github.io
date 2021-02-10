new Chart(document.getElementById("radar-chart1"), {
  type: 'radar',
  data: {
    labels: ["Python", "Java", "C", "C++", "DS & Algo"],
    datasets: [
      {
        label: "Programming language and DSA",
        fill: true,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "#0e76a8",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [90,85,90,85,75]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Programming language'
    }
  }
});

new Chart(document.getElementById("radar-chart2"), {
  type: 'radar',
  data: {
    labels: ["HTML", "CSS", "JavaScript", "Reactjs"],
    datasets: [
      {
        label: "Web development",
        fill: true,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "#0e76a8",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [90,85.61,77,70]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Web development'
    }
  }
});
new Chart(document.getElementById("radar-chart3"), {
  type: 'radar',
  data: {
    labels: ["Django", "Flask", "Android", "Github", "Jira"],
    datasets: [
      {
        label: "Framworks & Tools",
        fill: true,
        backgroundColor: "rgba(0,0,0,0.2)",
        borderColor: "#0e76a8",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(179,181,198,1)",
        data: [80.77,85.61,80,90,90.82]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Framworks & Tools'
    }
  }
});
