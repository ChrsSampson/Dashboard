
//Draw Graph
function createGraph(graph){
    var ctx = document.getElementById(graph.target).getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart
        type: graph.type,

        // The dataset
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function createSocialData(){
    const twitter = document.getElementById('twitter-data');
    const facebook = document.getElementById('facebook-data');
    const google = document.getElementById('google-data');
    const target = [twitter,facebook,google];

    for(let i = 0; i < target.length; i++){
        let data = Math.floor(Math.random() * 10000);
        target[i].innerHTML = numberWithCommas(data);   
    }
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

//user objects
const member1={ img:'images/member-1.jpg',
                email:'victoria.chambers@example.com',
                name:'Victoria Chambers',
                date:'10/15/21',
                activity:'commented on this Apps SEO Tips',
                hour:'4 Hours Ago'}
    
const member2={ img:'images/member-2.jpg',
                email:'dayle.byrd@example.com',
                name:'Dale Byrd',
                date:'10/15/21',
                activity:'commented on this Apps SEO Tips',
                hour:'4 Hours Ago'}
                
const member3={ img:'images/member-3.jpg',
                email:'dawn.wood@example.com',
                name:'Dawn Wood',
                date:'10/15/21',
                activity:'commented on this Apps SEO Tips',
                hour:'4 Hours Ago'}

const member4={ img:'images/member-4.jpg',
                email:'dan.oliver@example.com',
                name:'Dan Oliver',
                date:'10/15/21',
                activity:'posted this Apps SEO Tips',
                hour:'6 Hours Ago'}

// Function accepts Type string of 'members' or 'activity'
function createListItems(type){
    if(type == 'member'){
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
    else if (type == 'activity'){
        const list = document.getElementById('activity-ul');
        const users = [member1, member2, member3, member4]
        for(let i = 0; i < users.length; i++){
            let listItem = document.createElement("li");
            listItem.className = "activity-listItem"
            listItem.innerHTML = `  <img class="user-img" src="${users[i].img}">
                                    <h5>${users[i].name} ${users[i].activity}</h5>
                                    <p>${users[i].hour}</p>
                                    <i class="fas fa-chevron-right"></i>
                                `;
            list.appendChild(listItem);
        }

    }

}


//Initialize Elements on Page load
window.addEventListener('DOMContentLoaded', (e)=>{
    createGraph(lineGraph);
    createGraph(barGraph);
    createGraph(pieGraph);

    createSocialData();

    createListItems('member');
    createListItems('activity');
    
});