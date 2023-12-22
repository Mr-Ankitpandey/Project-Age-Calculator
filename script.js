let dayvar = document.querySelector('#date');
let monthvar = document.querySelector('#month');
let yearvar = document.querySelector('#year');

let calculte = document.querySelector('#btn');
let result = document.querySelector('#result');
let resetbtn = document.querySelector('#reset-btn');

let birthdate = document.querySelector('.birth-date');
let successflag = false;

function checkblank(){
    if(dayvar.value === "" || monthvar.value === "" || yearvar.value === ""){
        alert('Date cannot be left blank');
        successflag = true;
    }
}

function checklength(){
    if(successflag){
        return;
    }

    let datestring = dayvar.value.toString();
    let monthstring = monthvar.value.toString()
    let yearstring = yearvar.value.toString();
    if(datestring.length > 2 || monthstring.length > 2 || yearstring.length>4){
        alert('Enter Valid Age');
        successflag = true;
        return;
    }

}

function checkvalue(){
    if(successflag){
        return;
    }
    if(dayvar.value > "31" || monthvar.value > "12" || yearvar.value > "2023"){
        alert('Date out of range');
        successflag = true;
    }
}

function calculateage(){

    if(successflag){
        return;
    }
    
    const date = new Date();
    let day = date.getDate();
    let month = (date.getMonth() + 1);
    let year = date.getFullYear();
    let m = [31,28,31,30,31,30,31,31,30,31,30,31];

    if((dayvar.value)> day){
        day = day + m[month - 1];
        month = month - 1;
    }
    if((monthvar.value) > month){
        month = month + 12;
        year = year - 1;
    }

    let rightdate = day - `${dayvar.value}`;
    let rightmonth = month - `${monthvar.value}`;
    let rightyear = year - `${yearvar.value}`;
    result.innerHTML = 'Your age is :' +rightyear+ ' Years ' +rightmonth+ ' months ' +rightdate+ ' days ';
}

calculte.addEventListener("click", function(){
    checkblank();
    checklength();
    checkvalue();
    calculateage();

})

resetbtn.addEventListener("click", function(){
   location.reload();
})