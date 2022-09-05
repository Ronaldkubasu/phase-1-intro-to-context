// Your code here
function createEmployeeRecord(params){
    let rest = params
    let myObj={}
    return myObj={
    firstName : rest[0],
    familyName : rest[1],
    title : rest[2],
    payPerHour:rest[3],
    timeInEvents : [],
    timeOutEvents: [],
    }
}


function createEmployeeRecords(twoItems){
    let first = twoItems[0]
    let second = twoItems[1]
    let arr =[]
    for (let item of twoItems){
        arr.push(createEmployeeRecord(item)) 
    }
    return arr
}
 let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ]
console.log(createEmployeeRecords(twoRows))

function createTimeInEvent(employee,dateStamp){
    let arr = employee.timeInEvents
    let obj = {
        type:"TimeIn",
        hour:parseInt(dateStamp.split(' ')[1]),
        date:dateStamp.split(' ')[0]
    }
    employee.timeInEvents.push(obj)
    return employee;

}
function createTimeOutEvent(employee,dateStamp){
    let obj = {
        type:"TimeOut",
        hour:parseInt(dateStamp.split(' ')[1]),
        date:dateStamp.split(' ')[0]
    }
    employee.timeOutEvents.push(obj)
    return employee;

}
function hoursWorkedOnDate(employee){
    let timeIn = employee.timeInEvents[0]["hour"]
    let timeOut = employee.timeOutEvents[0]["hour"]
    return((timeOut-timeIn)/100)
}
function wagesEarnedOnDate(employee, wage){
    return(((employee.timeOutEvents[0]["hour"]-employee.timeInEvents[0]["hour"])/100)*employee.payPerHour)
}
function allWagesFor(employee){
    let arr = employee.timeInEvents
    let arrOut = employee.timeOutEvents
    let hours = 0
    let wages = employee.payPerHour
    for(let i=0;i<arr.length;i++){
        hours += (arrOut[i]["hour"]-arr[i]["hour"])/100
    }
    return(wages*hours)
}
function calculatePayroll(employee){
    let totalHours = 0
    let totalPay = 0
    let pays = []
    let hours = []
   for(let i=0;i<employee.length;i++){
        let e = employee[i]
        let ehours = 0
        for(let j=0;j<e.timeInEvents.length;j++){
            ehours += (e.timeOutEvents[j]["hour"]-e.timeInEvents[j]["hour"])/100    
        }
        totalPay+=(ehours*e.payPerHour)
    }
    return totalPay
}