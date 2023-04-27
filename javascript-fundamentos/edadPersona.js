const getAge=(yearOfBirth)=>{
    const currentYear = (new Date()).getFullYear
    return currentYear - yearOfBirth;
}
consolole.log(getAge(1996))