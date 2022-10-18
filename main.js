var student_name_array=[]

var disp_student_name_array=[]

function submit() {
    for(var j=1; j<=4; j++)

{var student_name=document.getElementById("name_of_the_student_"+j).value

console.log(student_name)
student_name_array.push(student_name)
}

console.log(student_name_array)

var length_of_students=student_name_array.length

console.log(length_of_students)

for(var s=0; s<length_of_students;s++){
    disp_student_name_array.push("<h4>name-"+student_name_array[s]+"</h4>")
    console.log(disp_student_name_array)
}
console.log(disp_student_name_array)
document.getElementById("display_name_with_commas").innerHTML=disp_student_name_array
var remove_commas=disp_student_name_array.join(" ")
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas
document.getElementById("sort_button").style.display="inline-block"
    document.getElementById("submit_button").style.display="none"
    
}

function sorting(){
    student_name_array.sort()
    console.log(student_name_array)
    var disp_student_name_array_sorting=[]
    var length_of_students=student_name_array.length
    console.log(length_of_students)

    for(var s=0; s<length_of_students;s++){
        disp_student_name_array_sorting.push("<h4>name-"+student_name_array[s]+"</h4>")
        console.log(disp_student_name_array_sorting)
    }
var remove_commas=disp_student_name_array_sorting.join(" ")
console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas
}

