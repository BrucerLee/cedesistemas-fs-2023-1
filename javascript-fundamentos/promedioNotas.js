const gradesAverage=(firstGrade,secondGrade,thirdGrade,fourthGrade,fifthGrade)=>{
    let average =(firstGrade+secondGrade+thirdGrade+fourthGrade+fifthGrade)/5;
    return average;

}

const getAverage2=(...n)=>{
    let sumNotes=0;
    n.forEach((grade,index)=>{
        sumNotes+=grade;
    });
    return(sumNotes/n.length);
}
const getAverage3=(...n)=>{
    let sumNotes=0;
    n.map((grade)=>{
        sumNotes+=grade;
    });
    return(sumNotes/n.length);
}