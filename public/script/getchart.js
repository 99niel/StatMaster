//var ChartData;

$(() => {
    $.ajax({

        url: 'http://localhost:3000/home',
        type: 'GET',
        success : (data) => {
            //ChartData = data;
            var template = Handlebars.compile($('#tabular-template').html());
            $("#table-location").html(template(data));
            
            var Chart1 = document.getElementById('chart-location').getContext('2d');
            const firstChart = new Chart(Chart1, {
                type: 'line',
                labels: data['categories'],
                data: data['dataset'],
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