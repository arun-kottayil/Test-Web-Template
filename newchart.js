// Line Chart
var lineChart=document.getElementById('myChart1');
new Chart(lineChart, {
  type: "line",
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun'],
    datasets: [
    { 
      label: "Total views",
      backgroundColor: "rgba(176, 234, 255, 0.5)",
      data: [19, 7.5, 16.5, 12.5, 17, 10],
      borderColor: "#B0EAFF",
      fill: true,
      pointBackgroundColor: "#B0EAFF",
      },
    { 
      label: "Products sold",
      backgroundColor: "rgba(181, 179, 251, 0.5)",
      data: [15, 10, 15, 18, 15.5, 24],
      borderColor: "#B5B3FB",
      fill: true,
      pointBackgroundColor: "#B5B3FB",

    }
]
  },
  options: {
    responsve : true,
    plugins: {
        legend: {
            position: 'bottom',
            display: true,
            padding : 30,
            labels: {
                usePointStyle: true,
                boxHeight: 8,
                boxWidth: 10,
                pointStyle: 'circle',
                padding: 40
            }
        }, 
    },

        tension:0.3,
    	scales:{
    		y: {
        		ticks: {
                    padding: 10,
            		    maxTicksLimit: 5,
            		    callback: function(value, index) {
                		return '$' + value + 'k';
                	}
            	}
        	},
            x: {
        		ticks: {
                    padding: 15
            	}
        	}
    	},
    
    	legend: { display: true
      },
  },
});


// Donut Chart
var xVal_Donut = ["France", "Italy", "Japan", "Canada"];
var yVal_Donut = [4260, 3970, 4260, 3970];
var barColors = [
  "#80E2FF",
  "#F49FA8",
  "#FFDF94",
  "#B5B3FB"
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xVal_Donut,
    datasets: [{
      backgroundColor: barColors,
      data: yVal_Donut,
      rotation: 340,
      borderWidth: 0
    }]
  },

options: {
    responsve: true,
    cutout: 55,
    plugins: {
        legend: {
            position: 'bottom',
            display: false,
            labels: {
                usePointStyle: true,
                boxHeight: 8,
                boxWidth: 10,
                pointStyle: 'circle'
            }
        },    
    },
    aspectRatio: 2,
    },
    plugins: [{
        id: 'text',
        beforeDraw: function(chart, a, b) {
          var width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
    
          ctx.restore();
          var fontSize = (height / 200).toFixed(2);
          ctx.font = fontSize + "em Source Sans Pro";
          ctx.fillStyle = "#4D4F5C";
          ctx.textBaseline = "middle";
    
          var text = "230,900",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2 - 10;
          ctx.fillText(text, textX, textY);
          ctx.save();

          var text = "Sales",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2 + 10;
          ctx.fillText(text, textX, textY);
          ctx.save();

          

        }
      }]

});