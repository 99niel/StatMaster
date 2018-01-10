const Chart1 = document.getElementById('firstChart').getContext('2d');
const firstChart = new Chart(Chart1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '# Hired',
            data: [20, 15, 4, 25, 4, 20, 9, 9, 10, 9, 13, 10],
            backgroundColor: 'rgba(91, 185, 211,0.4)',
            borderWidth: 1
        },
        {
        	label: '# Short listed',
        	data: [23, 20, 7, 30, 6, 25, 9, 10, 14, 10, 19, 20],
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

const Chart2 = document.getElementById('secondChart').getContext('2d');
const secondChart = new Chart(Chart2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '# Hired into Application Development',
            data: [10, 6, 0, 1, 0, 15, 1, 2, 3, 4, 2, 20],
            backgroundColor: 'rgba(91, 185, 211,0.6)',
            borderWidth: 1
        },
        {
        	label: '# Hired into Application Outsourcing',
        	data: [3, 2, 0, 0, 2, 20, 1, 0, 4, 1, 2, 14],
        	backgroundColor: 'rgba(0, 0, 0,0.4)',
        	borderWidth: 1
        }]
    },
    options: {
    	title: {
            display: true,
            text: 'Employee Hiering statistics: AD Vs. AO'
        }
    }
});