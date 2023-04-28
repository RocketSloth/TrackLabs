var options1 = {
    chart: {
      type: 'bar',
      height: 350
    },
    series: [{
      name: 'sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    yaxis: {
      title: {
        text: 'Sales (in USD)'
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Monthly Sales',
      align: 'center'
    },
    tooltip: {
      theme: 'dark'
    }
  }
  
  var options2 = {
    chart: {
      type: 'line',
      height: 350
    },
    series: [{
      name: 'visitors',
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90]
    }],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    yaxis: {
      title: {
        text: 'Visitors'
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Monthly Visitors',
      align: 'center'
    },
    tooltip: {
      theme: 'dark'
    }
  }
  
  var chart1 = new ApexCharts(document.querySelector('#chart1'), options1);
  chart1.render();
  
  var chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
  chart2.render();
  
  var notifications = document.querySelector('#notifications');
  notifications.innerHTML = '<p>You have 3 new notifications.</p>';
  