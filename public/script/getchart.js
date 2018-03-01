//var ChartData;




var chartDemo = () => {

    $.ajax({

        url: 'http://localhost:3000/home',
        type: 'GET',
        
        success: (data) => {
            //ChartData = data;
            console.log(data);
            var chartDataMonth = data.categories;
            console.log(chartDataMonth);
            console.log(data['empShort']);
            console.log(data['empSelect']);

            var template = Handlebars.compile($('#tabular-template').html());
            $("#table-location").html(template(data));

            var ctx = document.getElementById("chart-location").getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data['categories'],
                    datasets: [{
                        label: 'Testing - 1(Short listed)',
                        data: [12, 19, 3, 5, 2, 3, 4, 7, 17, 23],
                        borderColor: [
                            'rgba(0,0,255,1)',
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'Testing - 2(Hired)',
                        data: [10, 16, 3, 4, 2, 1, 3, 5, 16, 22],
                        borderColor: [
                            'rgba(255,99,132,1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

        }
    });

}




// function chartDemo() {

//     var ctx = document.getElementById("chart-location").getContext('2d');
//     var myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//             datasets: [{
//                 label: '# of Votes',
//                 data: [12, 19, 3, 5, 2, 3],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.2)',
//                     'rgba(54, 162, 235, 0.2)',
//                     'rgba(255, 206, 86, 0.2)',
//                     'rgba(75, 192, 192, 0.2)',
//                     'rgba(153, 102, 255, 0.2)',
//                     'rgba(255, 159, 64, 0.2)'
//                 ],
//                 borderColor: [
//                     'rgba(255,99,132,1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }
//         }
//     });

// }



