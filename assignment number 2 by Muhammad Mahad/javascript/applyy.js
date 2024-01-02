//implementing hide/show on headings



document.addEventListener("DOMContentLoaded", function(){
    window.onload = f11;
    var initialempty = document.querySelector("table").innerHTML;
    const h1 = document.querySelector(".coe");
    const h2 = document.querySelector(".cos");
    const h3 = document.querySelector(".ids");
    const f3 = document.querySelector(".College-of-Interdisciplinary-Studies");
    const f2 = document.querySelector(".College-of-Science");
    const f1 = document.querySelector(".College-of-Engineering");

    h1.onclick = f11;
    function f11(){
        f1.setAttribute("style", "display: inline-block");
        f2.setAttribute("style", "display: none");
        f3.setAttribute("style", "display: none");
        h1.setAttribute("style", "background-color:white");
        h2.setAttribute("style", "background-color:gray");
        h3.setAttribute("style", "background-color:gray");
    }
    
    h2.onclick = f22;
    function f22(){
        f2.setAttribute("style", "display: inline-block");
        f1.setAttribute("style", "display: none");
        f3.setAttribute("style", "display: none");
        h2.setAttribute("style", "background-color:white");
        h1.setAttribute("style", "background-color:gray");
        h3.setAttribute("style", "background-color:gray");
    }
    
    h3.onclick = f33;
    function f33(){
        f3.setAttribute("style", "display: inline-block");
        f2.setAttribute("style", "display: none");
        f1.setAttribute("style", "display: none");
        h3.setAttribute("style", "background-color:white");
        h2.setAttribute("style", "background-color:gray");
        h1.setAttribute("style", "background-color:gray");
    }

    var forms = document.querySelectorAll("form");
    for (let i=0; i<forms.length;i++){
        forms[i].addEventListener("mouseover" , hover);
        forms[i].addEventListener("mouseleave" , unhover);
    }
    function hover(){
        this.setAttribute("style" , "background-color:gray");
    }
    function unhover() {
        this.setAttribute("style" , "background-color:white");
    }

//implementing now table

//selecting all buttons and then giving them onclick event
        allbtns= document.querySelectorAll("button");
        for (let i =0; i<allbtns.length;i++){
            allbtns[i].onclick = f;
        }


        var COE_array= ["BSc-in-Computer-Science-and-Technology","BEng-in-Electronic-Information","BEng-in-Materials-Science-and-Engineering","BEng-in-Materials-and-Chemicals","BSc-in-Electronic-Science-and-Technology"];
        var COS_array= ["BSc-in-Physics","BSc-in-Chemistry","BSc-in-Biology"];
        var IDS_array= ["BSc-in-Cognitive-Science","BEng-in-Biomedical-Engineering","BSc-in-Biology-and-Medicine"];
        var ranks = Array(10);
        var max_rank = 0;
        var majors = [];
        var noofmajors=0;

        function f(){
            var major = this.id;
            major = major.replace(/-/g, " ")
            var rank = this.previousElementSibling.value;
            this.parentNode.reset(); // to reset the input value so that it doesnt stay
            if(rank.length<=0 ||rank % 1 != 0){
                event.preventDefault();
                alert("Please enter the rank of chosen major");
                return;
            }
            else if(rank<1 || rank>10){
                event.preventDefault();
                alert("Please enter the rank of chosen between 1 and 10");
                return;
            }
            else if (majors.indexOf(major)!=-1){
                event.preventDefault();
                alert("you have already chosen this major");
                return;
            }
            else if (ranks.indexOf(rank)!=-1){
                event.preventDefault();
                alert("You have already chosen this rank");
                return;
            }
            if (Number(rank) > Number(max_rank)){
                max_rank = rank;
            } 

            if (COE_array.indexOf(this.id) != -1){
                event.preventDefault();
                var college = "College of Engineering";
                ranks[rank] = rank;
                majors.push(major);
                x = document.getElementById([rank]);
                updateTable();
                x.innerHTML = "<td>" + college +"</td>" + "<td>" + major +"</td>" + "<td>" + rank +"</td>";
                }
            else if (COS_array.indexOf(this.id) !=-1){
                event.preventDefault();
                college = "College of Science";
                ranks[rank] = rank;
                majors.push(major);
                x = document.getElementById([rank]);
                updateTable();
                x.innerHTML = "<td>" + college +"</td>" + "<td>" + major +"</td>" + "<td>" + rank +"</td>";
                }
            
            else if (IDS_array.indexOf(this.id) !=-1){
                event.preventDefault();
                college = "College of Interdisciplinary Studies";
                ranks[rank] = rank;
                majors.push(major);
                x = document.getElementById([rank]);
                updateTable();
                x.innerHTML = "<td>" + college +"</td>" + "<td>" + major +"</td>" + "<td>" + rank +"</td>";
                }

            //alerting the msg about selection    
            switch (rank){
                case "1" :
                    msg = "You have chosen " + major + " as your "+ rank +"st "+ "chosen major in " + college + " successfully";
                    alert(msg);
                    break;
                
                case "2" :
                    msg = "You have chosen " + major + " as your "+ rank +"nd "+ "chosen major in " + college + " successfully";
                    alert(msg);
                    break;
                
                case "3" :
                    msg = "You have chosen " + major + " as your "+ rank +"rd "+ "chosen major in " + college + " successfully";
                    alert(msg);
                    break;

                default:
                    msg = "You have chosen " + major + " as your "+ rank +"th "+ "chosen major in " + college + " successfully";
                    alert(msg);
                    break;
                }

            }
            var totalno = document.getElementById("totalno");
            var time = document.querySelector(".time");
            function updateTable(){
                ansx = CurrentTime();
                time.innerHTML = "Last Change time: " + ansx;
                noofmajors = majors.length;
                totalno.innerHTML = "Total Number of Majors Applied: " + noofmajors;
            }
            function CurrentTime(){
                var date = new Date();
                var month = date.getMonth() + 1;

                var hour1 = date.getHours();
                if (hour1<10){
                    hour1 = "0"+ hour1;
                }
                var min = date.getMinutes();
                if (min<10){
                    min = "0"+ min;
                }
                var sec = date.getSeconds();
                if (sec<10){
                    sec = "0"+ sec;
                }
                ans = date.getFullYear() +"/"+ month +"/"+date.getDate() +  " " + hour1 +":"+ min + ":" + sec;
                return ans
            }

            var submit = document.getElementById("submit");
            submit.onclick = CheckTable;
            var ptag = document.getElementById("tberror")
            
            function CheckTable() {
                var tableMsg = "";
                event.preventDefault();
                ptag.innerHTML = "";
                gaps = CheckGap(ranks);

                if (noofmajors === 0) {
                    tableMsg = "You have not chosen any major.";
                }
            
                else if (gaps.length != 0){
                    switch (gaps[0]) {
                        case 1:
                            tableMsg = "You have not chosen your 1st chosen major, ";
                            break;
                        case 2:
                            tableMsg = "You have not chosen your 2nd chosen major, ";
                            break;
                        case 3:
                            tableMsg = "You have not chosen your 3rd chosen major, ";
                            break;
                        default:
                            tableMsg = "You have not chosen your " + gaps[0]+ "th chosen major, ";
                            break;
                    }
                    for (let index = 1; index < gaps.length; index++) {
                        switch (gaps[index]) {
                            case 2:
                                tableMsg = tableMsg + "and 2nd chosen major, ";
                                break;
                            case 3:
                                tableMsg = tableMsg + "and 3rd chosen major, ";
                                break;
                            default:
                                tableMsg = tableMsg + "and " + gaps[index ]+ "th chosen major, ";
                                break;
                        }
                    }
                    tableMsg = tableMsg + "you can not leave any gap between your majors";   
                }
                else{
                    tableMsg = "You have successfully submitted your application at time " + CurrentTime();
                }
                ptag.innerHTML = tableMsg; 
                }

            
            function CheckGap(array) {
                gapArray = Array();
                for (let index = 1; index < max_rank; index++) {
                    if (array[index] == undefined){
                        gapArray.push(index);
                    } 
                }
                return gapArray;
            }
            
            document.getElementById("clear").onclick = clearing;

            function clearing() {
                event.preventDefault();
                document.getElementById("tberror").innerHTML = "";
                max_rank = 0;
                ranks = Array(10);
                majors = Array();
                noofmajors = 0;
                document.querySelector("table").innerHTML = initialempty;
                totalno.innerHTML = "Total Number of Majors Applied: " + noofmajors;
                time.innerHTML = "Last Change Time: " + CurrentTime();
            }

})