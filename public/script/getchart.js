var onElementReady = ($canvasElement) => {
    return new Promise((resolve) => {
      var waitForElement = () => {
        if ($canvasElement) {
          resolve($canvasElement);
        } else {
          window.requestAnimationFrame(waitForElement);
        }
      };
      waitForElement();
    })
  };
  
  var $someElement = document.querySelector('#chart-location');
  onElementReady($someElement)
    .then(() => {
      
        $.ajax({

            url: 'http://localhost:3000/home',
            type: 'GET',
            
            success: (data) => {
                //ChartData = data;
                //console.log(data);
               
                var template = Handlebars.compile($('#tabular-template').html());
                $("#table-location").html(template(data));
    
                var months = Object.values(data['categories']).map((data) => data.label);
                var ShortL = Object.values(data['empShort']).map((data) => data.value);
                var SelectL = Object.values(data['empSelect']).map((data) => data.value);
    
                var ctx = document.getElementById("chart-location").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: months,
                        datasets: [{
                            label: 'Short listed',
                            data: ShortL,
                            borderColor: [
                                'rgba(0,0,255,1)',
                            ],
                            borderWidth: 1
                        },
                        {
                            label: 'Hired',
                            data: SelectL,
                            borderColor: [
                                'rgba(255,99,132,1)',
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Employee Hiering statistics: TEKSystems'
                        }
                    }
                });
    
            }
        });

    });


// var chartDemo = () => {
//     $.ajax({

//         url: 'http://localhost:3000/home',
//         type: 'GET',
        
//         success: (data) => {
//             //ChartData = data;
//             //console.log(data);
           
//             var template = Handlebars.compile($('#tabular-template').html());
//             $("#table-location").html(template(data));

//             var months = Object.values(data['categories']).map((data) => data.label);
//             var ShortL = Object.values(data['empShort']).map((data) => data.value);
//             var SelectL = Object.values(data['empSelect']).map((data) => data.value);

//             var ctx = document.getElementById("chart-location").getContext('2d');
//             var myChart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: months,
//                     datasets: [{
//                         label: 'Short listed',
//                         data: ShortL,
//                         borderColor: [
//                             'rgba(0,0,255,1)',
//                         ],
//                         borderWidth: 1
//                     },
//                     {
//                         label: 'Hired',
//                         data: SelectL,
//                         borderColor: [
//                             'rgba(255,99,132,1)',
//                         ],
//                         borderWidth: 1
//                     }]
//                 },
//                 options: {
//                     title: {
//                         display: true,
//                         text: 'Employee Hiering statistics: TEKSystems'
//                     }
//                 }
//             });

//         }
//     });

// }
