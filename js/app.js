
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
                borderWidth: graph.borderWidth,
                data: graph.data,
                lineTension: graph.lineTension,
                pointRadius: graph.pointRadius,
                pointBorderColor: graph.pointBorderColor,
                pointBackgroundColor: graph.pointBackgroundColor
            }]
        },

        // Configuration options go here
        options: graph.options,
       
    });
}

//Generate Random Chart Data
function randomData(sets, max){
    let data = [];
    for(let i = 0; i < sets; i++){
      data[i] = Math.floor(Math.random() * max);   
    }
    return data;
}

//Graph Objects
let lineGraph = {
    target:'line-chart', 
    type:'line',
    labels:['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    bgColor:'rgba(38, 125, 217, .3)',
    borderColor:'rgb(242, 82, 28)',
    borderWidth: 1,
    data:randomData(11, 1000),
    lineTension:0,
    pointRadius:4,
    pointBorderColor:'rgb(232, 105, 59)',
    pointBackgroundColor:'rgba(255, 255, 255, 1)',
    options:{
                responsive: true,
                legend:{
                    display:false,
                    labels:{
                        fontColor: '#737373',
                        defaultFontFamily: 'Arial',
                    },
                },
                scales:{
                    yAxes:[{
                        ticks:{
                            min:0,
                            stepSize: 250,
                        }                      
                    }],
                },
            }
}

let barGraph = {
    target:'bar-chart', 
    type:'bar',
    labels:['S','M','T','W','T','F','S'],
    bgColor:'rgb(232, 105, 59)',
    borderColor:'rgb(255, 99, 132)',
    data:randomData(7, 300),
    options:{
        responsive: true,
        legend:{
            display:false,
            labels:{
                fontColor: '#737373',
                defaultFontFamily: 'Arial',
            },
        },
        scales:{
            yAxes:[{
                ticks:{
                    min:50,
                    max:300,
                }                      
            }],
        },
    }
}

let pieGraph = {
    target:'pie-chart', 
    type:'doughnut',
    labels:['Phone', 'Tablet', 'Desktop'],
    bgColor:['rgb(232, 105, 59)','rgb(38, 125, 217)','#737373'],
    borderColor:'#ffffff',
    borderWidth: 0,
    data:randomData(3, 1000),
    options:{
        responsive: true,
        legend:{
            display:false,
            labels:{
                fontColor: '#737373',
                defaultFontFamily: 'Arial',
            },
        },
    }
}

//Initialize Graphs on Page load
window.addEventListener('DOMContentLoaded', (e)=>{
    createGraph(lineGraph);
    createGraph(barGraph);
    createGraph(pieGraph);

    createList()
    
});


//user objects
const member1={ img:'images/member-1.jpg',
                email:'victoria.chambers@example.com',
                name:'Victoria Chambers',
                date:'10/15/21'}
    
const member2={ img:'images/member-2.jpg',
                email:'dayle.byrd@example.com',
                name:'Dale Byrd',
                date:'10/15/21'}
                
const member3={ img:'images/member-3.jpg',
                email:'dawn.wood@example.com',
                name:'Dawn Wood',
                date:'10/15/21'}

const member4={ img:'images/member-4.jpg',
                email:'dan.oliver@example.com',
                name:'Dan Oliver',
                date:'10/15/21'}

function createList(){
    const list = document.getElementById('member-ul');
    const users = [member1, member2, member3, member4]
    for(let i = 0; i < users.length; i++){
        let listItem = document.createElement("li");
        listItem.className = "member-listItem"
        listItem.innerHTML = `  <img class="user-img" src="${users[i].img}">
                                <h5>${users[i].name}</h5>
                                <p>${users[i].email}</p>
                                <label>${users[i].date}</label>
                            `;
        list.appendChild(listItem);
    }

}