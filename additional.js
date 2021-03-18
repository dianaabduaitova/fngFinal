document.getElementById("submit").addEventListener("click", calculate);
function partition(n, res ) {
    var i = 0;
    var arr = [];
    arr[i] = n;
    while (true) {
        var j;
        var str = new String("");
        for (j = 0; j < (i+1); j++) {
            if(j != i)
                str+=arr[j] + " ";
            else
                str+=arr[j];
        } 
        res.push(str);
        var rem_val = 0;
        while (i >= 0 && arr[i] == 1) 
        { 
            rem_val += arr[i]; 
            i--; 
        } 
        if (i < 0)  return;
        arr[i]--; 
        rem_val++; 
        while (rem_val > arr[i]) 
        { 
            arr[i+1] = arr[i]; 
            rem_val = rem_val - arr[i]; 
            i++; 
        } 
        arr[i+1] = rem_val; 
        i++; 
    }
}

function calculate() {
    var res1 = [];
    var res2 = [];
    var score_one = parseInt(document.getElementById("goal1").value);
    var score_two = parseInt(document.getElementById("goal2").value);
    if (score_one + score_two > 7) {
        alert("The combined goals cannot be bigger than 7");
        return;
    }
    partition(score_one, res1);
    partition(score_two, res2);
   
    var n;
    var str1 = new String("("); 
    var str2 = new String("(");
    for(n = res1.length-1; n >= 0; n--){ 
        if(n != 0)
            str1+=res1[n] + ") (";
        else
            str1+=res1[n] + ")";
    }
    
    for(n = res2.length-1; n >= 0; n--){
        if(n != 0)
            str2+=res2[n] + ") (";
        else
            str2+=res2[n] + ")";
    }
    

    document.getElementById("Score1").innerHTML = "The score list of team 1 can be " + str1;
    document.getElementById("Score2").innerHTML = "The score list of team 2 can be " + str2;
    var str3 = new String(""); 
    
    if(score_one>score_two)
        str3+="Team one";
    else if(score_one<score_two)
        str3+="Team two";
    else
        str3=" No winner. It's a draw";
    document.getElementById("Winner").innerHTML = str3;
    
    var players1 = String(document.getElementById("textarea1").value).split(' ');
    var players2 = String(document.getElementById("textarea2").value).split(' ');
    players1.forEach(element => { 
    console.log(element);
    });
    players2.forEach(element => {
        console.log(element);
    });
}



