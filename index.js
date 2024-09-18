// Write your solution in this file!
const employee = {
    name : "Patrick",
    streetAddress:"Mirema 1234"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return { ...employee,[key]:value }; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newEmploy = { ...employee};
    delete newEmploy[key];
    return newEmploy;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}



