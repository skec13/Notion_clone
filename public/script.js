async function getRequest() {
    const response = await fetch("http://localhost:3001/API");
    const resData = await response.json();
    return resData;
}

function postRequest(){
    fetch("http://localhost:3001/API",{
      method: "POST",
      // Format of the body must match the Content-Type
      headers: {"Content-Type": "application/json"},
      body: {
        "date": "",
        "title": "",
        "time": "",
        "description": "",
        "done": true
      }
    });
}

getRequest()
    .then((resData) => {
            dateElManagment(resData);
    });
    

/*############################ date stuff #################################*/
const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");

function startTime(){
    
    var date =  new Date();
    
/*################### clock ######################*/
    var hour = checkTime(date.getHours());
    var minutes = checkTime(date.getMinutes());

    hourEL.innerHTML = `${hour}`;
    minuteEL.innerHTML = `${minutes}`;
/*################################################*/
    
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();

/*####################################################*/








