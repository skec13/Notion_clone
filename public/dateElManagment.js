function dateElManagment(data){
    var resData = data;
    /*################### DOM elements definitions ######################*/
    const monEl = document.getElementById("mon-num");
    const tueEl = document.getElementById("tue-num");
    const wedEl = document.getElementById("wed-num");
    const thuEl = document.getElementById("thu-num");
    const friEl = document.getElementById("fri-num");
    const satEl = document.getElementById("sat-num");
    const sunEl = document.getElementById("sun-num");

    const monNameEl = document.getElementById("mon-name");
    const tueNameEl = document.getElementById("tue-name");
    const wedNameEl = document.getElementById("wed-name");
    const thuNameEl = document.getElementById("thu-name");
    const friNameEl = document.getElementById("fri-name");
    const satNameEl = document.getElementById("sat-name");
    const sunNameEl = document.getElementById("sun-name");
    const dateEl = document.getElementById("date");

    const mondayTasksDiv = document.getElementById("monday-tasks-div");
    const tuesdayTasksDiv = document.getElementById("tuesday-tasks-div");
    const wednesdayTasksDiv = document.getElementById("wednesday-tasks-div");
    const thursdayTasksDiv = document.getElementById("thursday-tasks-div");
    const fridayTasksDiv = document.getElementById("friday-tasks-div");
    const saturdayTasksDiv = document.getElementById("saturday-tasks-div");
    const sundayTasksDiv = document.getElementById("sunday-tasks-div");

    const prevWeekEl = document.getElementById("prev-week");
    const nextWeekEl = document.getElementById("next-week");
    /*####################################################################*/


    /*########################### date stuff #############################*/
    var date = new Date(); 


    const monthArr = ["January", "February", "Match", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    dateEl.innerHTML = `${monthArr[date.getMonth()]} ${date.getFullYear()}`;
    // console.log(dateEl);
    var mondayDate = new Date();
    //console.log(mondayDate.getDay());
    mondayDate.setDate(date.getDate() - date.getDay() + 1);

    var tuesdayDate = new Date();
    tuesdayDate.setDate(mondayDate.getDate() + 1);  
    var wednesdayDate = new Date();
    wednesdayDate.setDate(mondayDate.getDate() + 2);
    var thursdayDate = new Date();
    thursdayDate.setDate(mondayDate.getDate() + 3);
    var fridayDate = new Date();
    fridayDate.setDate(mondayDate.getDate() + 4);
    var saturdayDate = new Date();
    saturdayDate.setDate(mondayDate.getDate() + 5);
    var sundayDate = new Date();
    sundayDate.setDate(mondayDate.getDate() + 6);


    function addBoldClass(){
        if(mondayDate.toDateString() == date.toDateString()){
            monEl.classList.add("bold");
            monNameEl.classList.add("bold");
        } else {
            monEl.classList.remove("bold");
            monNameEl.classList.remove("bold");
        }
        if(tuesdayDate.toDateString() == date.toDateString()){
            tueEl.classList.add("bold");
            tueNameEl.classList.add("bold");
        } else {
            tueEl.classList.remove("bold");
            tueNameEl.classList.remove("bold");
        }
        if(wednesdayDate.toDateString() == date.toDateString()){
            wedEl.classList.add("bold");
            wedNameEl.classList.add("bold");
        } else {
            wedEl.classList.remove("bold");
            wedNameEl.classList.remove("bold");
        }
        if(thursdayDate.toDateString() == date.toDateString()){
            thuEl.classList.add("bold");
            thuNameEl.classList.add("bold");
        } else {
            thuEl.classList.remove("bold");
            thuNameEl.classList.remove("bold");
        }
        if(fridayDate.toDateString() == date.toDateString()){
            friEl.classList.add("bold");
            friNameEl.classList.add("bold");
        } else {
            friEl.classList.remove("bold");
            friNameEl.classList.remove("bold");
        }
        if(saturdayDate.toDateString() == date.toDateString()){
            satEl.classList.add("bold");
            satNameEl.classList.add("bold");
        } else {
            satEl.classList.remove("bold");
            satNameEl.classList.remove("bold");
        }
        if(sundayDate.toDateString() == date.toDateString()){
            sunEl.classList.add("bold");
            sunNameEl.classList.add("bold");
        } else {
            sunEl.classList.remove("bold");
            sunNameEl.classList.remove("bold");
        }
    }
    addBoldClass();

    monEl.innerHTML = mondayDate.getDate();
    tueEl.innerHTML = tuesdayDate.getDate();
    wedEl.innerHTML = wednesdayDate.getDate();
    thuEl.innerHTML = thursdayDate.getDate();
    friEl.innerHTML = fridayDate.getDate();
    satEl.innerHTML = saturdayDate.getDate();
    sunEl.innerHTML = sundayDate.getDate();
    /*#######################################################################*/

    var formatedMondayDate = `${mondayDate.getFullYear()}-${mondayDate.getMonth() + 1}-${mondayDate.getDate()}`;
    var formatedTuesdayDate = `${tuesdayDate.getFullYear()}-${tuesdayDate.getMonth() + 1}-${tuesdayDate.getDate()}`;
    var formatedWednesdayDate = `${wednesdayDate.getFullYear()}-${wednesdayDate.getMonth() + 1}-${wednesdayDate.getDate()}`;
    var formatedThursdayDate = `${thursdayDate.getFullYear()}-${thursdayDate.getMonth() + 1}-${thursdayDate.getDate()}`;
    var formatedFridayDate = `${fridayDate.getFullYear()}-${fridayDate.getMonth() + 1}-${fridayDate.getDate()}`;
    var formatedSaturdayDate = `${saturdayDate.getFullYear()}-${saturdayDate.getMonth() + 1}-${saturdayDate.getDate()}`;
    var formatedSundayDate = `${sundayDate.getFullYear()}-${sundayDate.getMonth() + 1}-${sundayDate.getDate()}`;


    /*############################## adding tasks ###########################*/
    //Looping through data and adding tasks
    resData.forEach(task => {
        if(task["date"] == formatedMondayDate){
            mondayTasksDiv.innerHTML += `
                <div class="task ${task["done"]}" data-date="${formatedMondayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                    <div class="task-name">
                        <div class="task-name-title">${task["title"]}</div>
                        <div class="task-name-time">${task["time"]}</div>
                    </div>
                    <div class="task-description">${task["description"]}</div>
                </div>
            `;
        }
        if(task["date"] == formatedTuesdayDate){
            tuesdayTasksDiv.innerHTML += `
                <div class="task ${task["done"]}" data-date="${formatedTuesdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                    <div class="task-name">
                        <div class="task-name-title">${task["title"]}</div>
                        <div class="task-name-time">${task["time"]}</div>
                    </div>
                    <div class="task-description">${task["description"]}</div>
                </div>
            `;
        }
        if(task["date"] == formatedWednesdayDate){
            wednesdayTasksDiv.innerHTML += `
                <div class="task ${task["done"]}" data-date="${formatedWednesdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                    <div class="task-name">
                        <div class="task-name-title">${task["title"]}</div>
                        <div class="task-name-time">${task["time"]}</div>
                    </div>
                    <div class="task-description">${task["description"]}</div>
                </div>
            `;
        }
        if(task["date"] == formatedThursdayDate){
            thursdayTasksDiv.innerHTML += `
                <div class="task ${task["done"]}" data-date="${formatedThursdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                    <div class="task-name">
                        <div class="task-name-title">${task["title"]}</div>
                        <div class="task-name-time">${task["time"]}</div>
                    </div>
                    <div class="task-description">${task["description"]}</div>
                </div>
            `;
        }
        if(task["date"] == formatedFridayDate){
            fridayTasksDiv.innerHTML += `
                <div class="task ${task["done"]}" data-date="${formatedFridayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                    <div class="task-name">
                        <div class="task-name-title">${task["title"]}</div>
                        <div class="task-name-time">${task["time"]}</div>
                    </div>
                    <div class="task-description">${task["description"]}</div>
                </div>
            `;
        }
        if(task["date"] == formatedSaturdayDate){
            saturdayTasksDiv.innerHTML += `
                <div class="task ${task["done"]}" data-date="${formatedSaturdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                    <div class="task-name">
                        <div class="task-name-title">${task["title"]}</div>
                        <div class="task-name-time">${task["time"]}</div>
                    </div>
                    <div class="task-description">${task["description"]}</div>
                </div>
            `;
        }
        if(task["date"] == formatedSundayDate){
            sundayTasksDiv.innerHTML += `
                <div class="task ${task["done"]}" data-date="${formatedSundayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                    <div class="task-name">
                        <div class="task-name-title">${task["title"]}</div>
                        <div class="task-name-time">${task["time"]}</div>
                    </div>
                    <div class="task-description">${task["description"]}</div>
                </div>
            `;
        }
        
    });
   

    //Adding add buttons to each day
    function addButton(taskDiv, day) {
        taskDiv.innerHTML += `
            <div class="task-button" id="${day}-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="currentColor" d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </div>
        `;

    }

    addButton(mondayTasksDiv, "monday");
    addButton(tuesdayTasksDiv, "tuesday");
    addButton(wednesdayTasksDiv, "wednesday");
    addButton(thursdayTasksDiv, "thursday");
    addButton(fridayTasksDiv, "friday");
    addButton(saturdayTasksDiv, "saturday");
    addButton(sundayTasksDiv, "sunday");
    
    /*################################################*/

    /*#################### buttons ###################*/
    const mondayButton = document.getElementById("monday-button");
    const tuesdayButton = document.getElementById("tuesday-button");
    const wednesdayButton = document.getElementById("wednesday-button");
    const thursdayButton = document.getElementById("thursday-button");
    const fridayButton = document.getElementById("friday-button");
    const saturdayButton = document.getElementById("saturday-button");
    const sundayButton = document.getElementById("sunday-button");

    /*############## prev week button ################*/
    prevWeekEl.addEventListener("click", () => {
        async function getRequest() {
            const response = await fetch("http://localhost:3001/API");
            const data = await response.json();
            resData = data;
            return resData;
        }
        getRequest().then((resData) => {
            mondayDate.setDate(mondayDate.getDate() - 7);
            tuesdayDate.setDate(tuesdayDate.getDate() - 7);
            wednesdayDate.setDate(wednesdayDate.getDate() - 7);
            thursdayDate.setDate(thursdayDate.getDate() - 7);
            fridayDate.setDate(fridayDate.getDate() - 7);
            saturdayDate.setDate(saturdayDate.getDate() - 7);
            sundayDate.setDate(sundayDate.getDate() - 7);
            
            monEl.innerHTML = mondayDate.getDate();
            tueEl.innerHTML = tuesdayDate.getDate();
            wedEl.innerHTML = wednesdayDate.getDate();
            thuEl.innerHTML = thursdayDate.getDate();
            friEl.innerHTML = fridayDate.getDate();
            satEl.innerHTML = saturdayDate.getDate();
            sunEl.innerHTML = sundayDate.getDate();

            dateEl.innerHTML = `${monthArr[mondayDate.getMonth()]} ${mondayDate.getFullYear()}`;

            addBoldClass();

            //remove all content from tasks div
            function removeElementsByClass(className){
                const elements = document.getElementsByClassName(className);
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0]);
                }
            }
            removeElementsByClass("task");
            /*
            mondayTasksDiv.innerHTML = "";
            tuesdayTasksDiv.innerHTML = "";
            wednesdayTasksDiv.innerHTML = "";
            thursdayTasksDiv.innerHTML = "";
            fridayTasksDiv.innerHTML = "";
            saturdayTasksDiv.innerHTML = "";
            sundayTasksDiv.innerHTML = "";
            */

            formatedMondayDate = `${mondayDate.getFullYear()}-${mondayDate.getMonth() + 1}-${mondayDate.getDate()}`;
            formatedTuesdayDate = `${tuesdayDate.getFullYear()}-${tuesdayDate.getMonth() + 1}-${tuesdayDate.getDate()}`;
            formatedWednesdayDate = `${wednesdayDate.getFullYear()}-${wednesdayDate.getMonth() + 1}-${wednesdayDate.getDate()}`;
            formatedThursdayDate = `${thursdayDate.getFullYear()}-${thursdayDate.getMonth() + 1}-${thursdayDate.getDate()}`;
            formatedFridayDate = `${fridayDate.getFullYear()}-${fridayDate.getMonth() + 1}-${fridayDate.getDate()}`;
            formatedSaturdayDate = `${saturdayDate.getFullYear()}-${saturdayDate.getMonth() + 1}-${saturdayDate.getDate()}`;
            formatedSundayDate = `${sundayDate.getFullYear()}-${sundayDate.getMonth() + 1}-${sundayDate.getDate()}`;

            //adding tasks
            resData.forEach(task => {
                if(task["date"] == formatedMondayDate){
                    mondayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedMondayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedTuesdayDate){
                    tuesdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedTuesdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedWednesdayDate){
                    wednesdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedWednesdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedThursdayDate){
                    thursdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedThursdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedFridayDate){
                    fridayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedFridayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedSaturdayDate){
                    saturdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedSaturdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedSundayDate){
                    sundayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedSundayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                
            });

            
            addDone();
            deleteTask();   
        });
    });
    /*################################################*/

    /*############## next week button ################*/
    nextWeekEl.addEventListener("click", () => {
        async function getRequest() {
            const response = await fetch("http://localhost:3001/API");
            const data = await response.json();
            resData = data;
            return resData;
        }
        getRequest().then((resData) => {
            mondayDate.setDate(mondayDate.getDate() + 7);
            tuesdayDate.setDate(tuesdayDate.getDate() + 7);
            wednesdayDate.setDate(wednesdayDate.getDate() + 7);
            thursdayDate.setDate(thursdayDate.getDate() + 7);
            fridayDate.setDate(fridayDate.getDate() + 7);
            saturdayDate.setDate(saturdayDate.getDate() + 7);
            sundayDate.setDate(sundayDate.getDate() + 7);
            
            monEl.innerHTML = mondayDate.getDate();
            tueEl.innerHTML = tuesdayDate.getDate();
            wedEl.innerHTML = wednesdayDate.getDate();
            thuEl.innerHTML = thursdayDate.getDate();
            friEl.innerHTML = fridayDate.getDate();
            satEl.innerHTML = saturdayDate.getDate();
            sunEl.innerHTML = sundayDate.getDate();

            dateEl.innerHTML = `${monthArr[mondayDate.getMonth()]} ${mondayDate.getFullYear()}`;

            addBoldClass();

            //remove all content from tasks div
            function removeElementsByClass(className){
                const elements = document.getElementsByClassName(className);
                while(elements.length > 0){
                    elements[0].parentNode.removeChild(elements[0]);
                }
            }
            removeElementsByClass("task");
            /*
            mondayTasksDiv.innerHTML = "";
            tuesdayTasksDiv.innerHTML = "";
            wednesdayTasksDiv.innerHTML = "";
            thursdayTasksDiv.innerHTML = "";
            fridayTasksDiv.innerHTML = "";
            saturdayTasksDiv.innerHTML = "";
            sundayTasksDiv.innerHTML = "";
            */
            formatedMondayDate = `${mondayDate.getFullYear()}-${mondayDate.getMonth() + 1}-${mondayDate.getDate()}`;
            formatedTuesdayDate = `${tuesdayDate.getFullYear()}-${tuesdayDate.getMonth() + 1}-${tuesdayDate.getDate()}`;
            formatedWednesdayDate = `${wednesdayDate.getFullYear()}-${wednesdayDate.getMonth() + 1}-${wednesdayDate.getDate()}`;
            formatedThursdayDate = `${thursdayDate.getFullYear()}-${thursdayDate.getMonth() + 1}-${thursdayDate.getDate()}`;
            formatedFridayDate = `${fridayDate.getFullYear()}-${fridayDate.getMonth() + 1}-${fridayDate.getDate()}`;
            formatedSaturdayDate = `${saturdayDate.getFullYear()}-${saturdayDate.getMonth() + 1}-${saturdayDate.getDate()}`;
            formatedSundayDate = `${sundayDate.getFullYear()}-${sundayDate.getMonth() + 1}-${sundayDate.getDate()}`;

            //adding tasks
            resData.forEach(task => {
                if(task["date"] == formatedMondayDate){
                    mondayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedMondayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedTuesdayDate){
                    tuesdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedTuesdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedWednesdayDate){
                    wednesdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedWednesdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedThursdayDate){
                    thursdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedThursdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedFridayDate){
                    fridayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedFridayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedSaturdayDate){
                    saturdayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedSaturdayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                if(task["date"] == formatedSundayDate){
                    sundayButton.insertAdjacentHTML("beforeBegin", `
                        <div class="task ${task["done"]}" data-date="${formatedSundayDate}" data-title="${task["title"]}" data-time="${task["time"]}" data-description="${task["description"]}" data-isLeft="${task["isLeft"]}">
                            <div class="task-name">
                                <div class="task-name-title">${task["title"]}</div>
                                <div class="task-name-time">${task["time"]}</div>
                            </div>
                            <div class="task-description">${task["description"]}</div>
                        </div>
                    `);
                }
                
            });
            

            addDone();
            deleteTask();   
        });
       
    });

    /*################################################*/

    /*############## add new task ################*/
    function addNewTask(button, dateEl){
        button.addEventListener("click", () => {
            let date = `${dateEl.getFullYear()}-${dateEl.getMonth() + 1}-${dateEl.getDate()}`;
            //console.log(date);
            let title;
            let time;
            let description;
            let done = false;
            let isLeft;
            while(!title){
                title = prompt("Enter title: ");
            }
            while(!time){
                time = prompt("Enter time: ");
            }
            while(!description){
                description = prompt("Enter description: ");
            }
            while(isLeft != "study" && isLeft != "programming" && isLeft != "projects"){
                isLeft = prompt("To which progress? (study, programming or projects)");
            }
            
            button.insertAdjacentHTML("beforeBegin", `
                <div class="task" data-date="${date}" data-title="${title}" data-time="${time}" data-description="${description}" data-isLeft="${isLeft}">
                    <div class="task-name">
                        <div class="task-name-title">${title}</div>
                        <div class="task-name-time">${time}</div>
                    </div>
                    <div class="task-description">${description}</div>
                </div>
            `);

            const currentTask = document.querySelector(`[data-date="${date}"][data-time="${time}"][data-description="${description}"][data-isLeft="${isLeft}"]`);
            //console.log(currentTask);
            currentTask.addEventListener("click", () => {
                var done = currentTask.classList.toggle("true"); 
                const body = JSON.stringify({
                    "date": currentTask.dataset.date,
                    "title": currentTask.dataset.title,
                    "time": currentTask.dataset.time,
                    "description": currentTask.dataset.description,
                    "done": done,
                    "isLeft": currentTask.dataset.isleft
                });
                //console.log("Body of patch request" + body);
                async function patchRequest() {
                    const response = await fetch("http://localhost:3001/API",{
                        method: "PATCH",
                        // Format of the body must match the Content-Type
                        headers: {"Content-Type": "application/json"},
                        body: body
                    });
                    const responseData = await response.json();
                    return responseData;
                }

                patchRequest().then((responseData) => {
                    console.log("patch request");
                    addProgress(responseData);  
                });
            });
            currentTask.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                var done = currentTask.classList.toggle("true");
                currentTask.style.display = "none";
                const body = JSON.stringify({
                    "date": currentTask.dataset.date,
                    "title": currentTask.dataset.title,
                    "time": currentTask.dataset.time,
                    "description": currentTask.dataset.description,
                    "done": done,
                    "isLeft": currentTask.dataset.isleft
                });
                async function deleteRequest() {
                    const response = await fetch("http://localhost:3001/API",{
                        method: "DELETE",
                    // Format of the body must match the Content-Type
                        headers: {"Content-Type": "application/json"},
                        body: body
                    });
                    const responseData = await response.json();
                    return responseData;
                }

                deleteRequest().then((responseData) => {
                    console.log("delete request");
                    addProgress(responseData);  
                });
            });

            const body = JSON.stringify({
                "date": date,
                "title": title,
                "time": time,
                "description": description,
                "done": done,
                "isLeft": isLeft
            });

            async function postRequest() {
                const response = await fetch("http://localhost:3001/API",{
                    method: "POST",
                    // Format of the body must match the Content-Type
                    headers: {"Content-Type": "application/json"},
                    body: body
                });
                const responseData = await response.json();
                return responseData;
            }

            postRequest().then((responseData) => {
                console.log("post request");
                //addDone();
                addProgress(responseData);  
            });


  
            
        });

    }

    addNewTask(mondayButton, mondayDate);
    addNewTask(tuesdayButton, tuesdayDate);
    addNewTask(wednesdayButton, wednesdayDate);
    addNewTask(thursdayButton, thursdayDate);
    addNewTask(fridayButton, fridayDate);
    addNewTask(saturdayButton, saturdayDate);
    addNewTask(sundayButton, sundayDate);
    /*############################################*/

    /*############## update task ################*/
    function addDone(){ 
        var allTasks = document.querySelectorAll(".task");
        allTasks.forEach((el) => {
            //el.removeEventListener("click",patch);
            el.addEventListener("click", () => {
                //console.log("El dataset: ");
                //console.log(el.dataset);
                var done = el.classList.toggle("true"); 
                const body = JSON.stringify({
                    "date": el.dataset.date,
                    "title": el.dataset.title,
                    "time": el.dataset.time,
                    "description": el.dataset.description,
                    "done": done,
                    "isLeft": el.dataset.isleft
                });
                //console.log("Body of patch request" + body);
                async function patchRequest() {
                    const response = await fetch("http://localhost:3001/API",{
                        method: "PATCH",
                        // Format of the body must match the Content-Type
                        headers: {"Content-Type": "application/json"},
                        body: body
                    });
                    const responseData = await response.json();
                    return responseData;
                }

                patchRequest().then((responseData) => {
                    console.log("patch request");
                    addProgress(responseData);  
                });


            
            });
            
        });
    }

    addDone();
    /*############################################*/

    /*#################### delete task ####################*/
    
    function deleteTask(){
        var allTasks = document.querySelectorAll(".task");
        allTasks.forEach((el) => {
            el.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                var done = el.classList.toggle("true");
                el.style.display = "none";
                const body = JSON.stringify({
                    "date": el.dataset.date,
                    "title": el.dataset.title,
                    "time": el.dataset.time,
                    "description": el.dataset.description,
                    "done": done,
                    "isLeft": el.dataset.isleft
                });
                async function deleteRequest() {
                    const response = await fetch("http://localhost:3001/API",{
                        method: "DELETE",
                    // Format of the body must match the Content-Type
                        headers: {"Content-Type": "application/json"},
                        body: body
                    });
                    const responseData = await response.json();
                    return responseData;
                }

                deleteRequest().then((responseData) => {
                    console.log("delete request");
                    addProgress(responseData);  
                });
           }); 
        });
    }

    deleteTask();
    
    /*#####################################################*/
    const bottomDivLeftEl = document.getElementById("bottom-div-left");
    const bottomDivMiddleEl = document.getElementById("bottom-div-middle");
    const bottomDivRightEl = document.getElementById("bottom-div-right");

    /*############## progress ################*/
    function addProgress(data) {
        const progressJson = {};
        bottomDivLeftEl.innerHTML = "";
        bottomDivMiddleEl.innerHTML = "";
        bottomDivRightEl.innerHTML = "";
        data.forEach(task => {
            if(progressJson[task.title] != null){
                if(task.done === true){
                    progressJson[task.title]["done"]++;
                    progressJson[task.title]["all"]++;
                } else {
                    progressJson[task.title]["all"]++;
                }
            } else {
                if(task.done === true){
                    progressJson[task.title] = {"done": 1, "all": 1, "isLeft": task.isLeft};

                } else {
                    progressJson[task.title] = {"done": 0, "all": 1, "isLeft": task.isLeft};

                }
            }
        });

        for(let key in progressJson){
            if(progressJson[key]["done"] !== progressJson[key]["all"]){

                if(progressJson[key]["isLeft"] === "study"){
                    bottomDivLeftEl.innerHTML += `
                        <div class="cards">
                            <p class="cards-title">${key}</p>
                            <p class="cards-progress">${progressJson[key]["done"]}/${progressJson[key]["all"]}</p>
                            <div class="cards-progressBar" style="background:linear-gradient(90deg, rgba(200, 200, 200, 0.5) ${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%, white ${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%);">${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%</div>
                        </div>
                    `;
                } else if(progressJson[key]["isLeft"] === "programming"){
                    bottomDivMiddleEl.innerHTML += ` 
                    <div class="cards">
                        <p class="cards-title">${key}</p>
                        <p class="cards-progress">${progressJson[key]["done"]}/${progressJson[key]["all"]}</p>
                        <div class="cards-progressBar" style="background:linear-gradient(90deg, rgba(200, 200, 200, 0.5) ${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%, white ${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%);">${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%</div>
                    </div>
                `;
                } else if(progressJson[key]["isLeft"] === "projects"){
                    bottomDivRightEl.innerHTML += ` 
                    <div class="cards">
                        <p class="cards-title">${key}</p>
                        <p class="cards-progress">${progressJson[key]["done"]}/${progressJson[key]["all"]}</p>
                        <div class="cards-progressBar" style="background:linear-gradient(90deg, rgba(200, 200, 200, 0.5) ${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%, white ${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%);">${Math.floor(progressJson[key]["done"]/progressJson[key]["all"]*100)}%</div>
                    </div>
                `;
                }
            }
        }

        
    }

    addProgress(resData);
    /*########################################*/

}


