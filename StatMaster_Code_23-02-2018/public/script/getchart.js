var ChartData;

$(() => {
    $.ajax({

        url: 'http://localhost/home',
        type: 'GET',
        success : (data) => {
            ChartData = data;
            var template = Handlebars.compile($('#tabular-template').html());
            $("#table-location").html(template(data));
            
            var Chart1 = document.getElementById("chart-location").getContext('2d');
            const firstChart = new Chart(Chart1, {
                type: 'line',
                data: {
                    labels: data["categories"],
                    datasets: [{
                        label: '# Hired',
                        data: data["empShortlisted"],
                        backgroundColor: 'rgba(91, 185, 211,0.4)',
                        borderWidth: 1
                    },
                    {
                        label: '# Short listed',
                        data: data["empSelected"],
                        backgroundColor: 'rgba(0, 0, 0,0.4)',
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