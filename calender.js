function settingDate(date,day){
    date = new Date(date);
    date.setDate(day);
    date.setHours(22);
    return date;
}

function getDatesBetweentwo(date1,date2){
    let range1 = new Date(date1);
    let range2 = new Date(date2);
    //pass date & day
    date1 = settingDate(date1,31); 
    date2 = settingDate(date2,31);
    // console.log(range1 +'_'+range2);

    // ! Get Last Date of Each Month Between Two Dates
    let temp;
    let dates = [];

    while(date1<=date2){
        if(date1.getDate() != 31){
            // date is not full 31
            temp = settingDate(date1,0);
            if(temp >= range1 && temp <=range2){
                dates.push(temp);
            }
            date1 = settingDate(date1,31);
        }else{
            temp = new Date(date1);
            if(temp >= range1 && temp <=range2){
                dates.push(temp);
            }
            date1.setMonth(date1.getMonth()+1);
        }
    }
    console.log(dates);

    // ! Get and show Month and Year with dom
    let lastDate,firstDate;
    let content = "";
    let Days = [
        {
            shortDay: "Mon", fullDay: "Monday"
        },
        {
            shortDay: "Tue", fullDay: "Tuesday"
        },
        {
            shortDay: "Wed", fullDay: "Wednesday"
        },
        {
            shortDay: "Thu", fullDay: "Thursday"
        },
        {
            shortDay: "Fri", fullDay: "Friday"
        },
        {
            shortDay: "Sat", fullDay: "Saturday"
        },
        {
            shortDay: "Sun", fullDay: "Sunday"
        }
    ];
    content += "<div style='text-align:center;'><button id='calPrev' disable>Previous</button> | <button id='calNext'>Next</button></div>";
    for(let i=0; i<dates.length; i++){
        lastDate = dates[i];
        console.log(lastDate.getDate());
        firstDate = new Date( dates[i].getFullYear(), dates[i].getMonth(), 1);
        content += "<div class='hd-ttl calendar-"+i+ "'><h2>";
        content += firstDate.toString().split(" ")[1];
        content += "-"+dates[i].getFullYear();
        content += "</h2>";
        content += "<table>";
        content += "<thead>";
        Days.map(item=>{
            content += "<th>"+ item.fullDay + "</th>";
        });
        content += "<tbody>";
        let j = 1;
        let num;
        while(j <= lastDate.getDate()){
            content += "<tr>";
            for(let t = 0; t<7; t++){
                num = j < 10 ? "0"+j : j;
                if(j == 1){
                    if(firstDate.toString().split(" ")[0] == Days[t].shortDay){
                        content += "<td>"+num+"</td>";
                        j++;
                    }else{
                        content += "<td></td>";
                    }
                }else if(j> lastDate.getDate()){
                    content += "<td></td>";
                }else{
                    content += "<td>"+num+"</td>";
                        j++;
                }
            }
            content += "</tr>";
        }
        content += "</tbody>";
        content += "</thead>";
        content += "</table>";
        content += "</div>";
    }
    return content;
}

function calNext(){
    
}

let items = getDatesBetweentwo("2020/01/01","2021/01/01");
document.getElementById('calender').innerHTML = items;