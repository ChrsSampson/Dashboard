
//Draw Graph
function createGraph(graph){
    var ctx = document.getElementById(graph.target).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: graph.type,

        // The data for our dataset
        data: {
            labels: graph.labels,
            datasets: [{
                label: '',
                backgroundColor: graph.bgColor,
                borderColor: graph.borderColor,
                data: graph.data,
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            
        }
    });
}

//Generate Random Chart Data
function randomData(sets){
    let data = [];
    for(let i = 0; i < sets; i++){
      data[i] = Math.floor(Math.random() * 1000);   
    }
    return data;
}

//Graph Properties
let lineGraph = {
    target:'line-chart', 
    type:'line',
    labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    bgColor:'rgb(255, 99, 132)',
    borderColor:'rgb(255, 99, 132)',
    data:randomData(7)
}

let barGraph = {
    target:'bar-chart', 
    type:'bar',
    labels:['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    bgColor:'rgb(255, 99, 132)',
    borderColor:'rgb(255, 99, 132)',
    data:randomData(7)
}

let pieGraph = {
    target:'pie-chart', 
    type:'doughnut',
    labels:['Phone', 'Tablet', 'Desktop'],
    bgColor:'rgb(255, 99, 132)',
    borderColor:'rgb(255, 99, 132)',
    data:randomData(3)
}

//Initialize Graphs on Page load
window.addEventListener('DOMContentLoaded', (e)=>{
    createGraph(lineGraph);
    createGraph(barGraph);
    createGraph(pieGraph);
    
});