
 var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://localhost:3000/monthsy')
    ourRequest.onload = function () {
        var ourdata = JSON.parse(ourRequest.responseText)
        //console.log(ourdata.Jan)
        renderHTML(ourdata);
       

    };
    ourRequest.send();
   

    function renderHTML(data){
        
        var test = [data.Jan, data.Feb, data.Mar, data.Apr, data.May, data.Jun, data.Jul, data.Aug, data.Sep, data.Oct, data.Nov, data.Dec]; 
        console.log(test)
const Chart1 = document.getElementById('firstChart').getContext('2d');

const firstChart = new Chart(Chart1, {

    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '# Hired',
            data: test,
            backgroundColor: 'rgba(91, 185, 211,0.4)',
            borderWidth: 1
        },
        {
        	label: '# Short listed',
        	data: [50, 20, 7, 30, 6, 25, 9, 10, 14, 10, 19, 20],
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