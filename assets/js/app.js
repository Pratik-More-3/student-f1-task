const cl = console.log;
const stdform = document.getElementById('stdform');
const fnamecontrol = document.getElementById('fname');
const lnamecontrol = document.getElementById('lname');
const contactcontrol = document.getElementById('contact');
const emailcontrol = document.getElementById('email');
const agecontrol = document.getElementById('age');
const submitbtn = document.getElementById('submitbtn');
const stdatacontrol = document.getElementById('studata');

const stuArr = [
    {
        fname: "Rahul",
        lname: "Sharma",
        contact: "9876543210",
        email: "rahul@gmail.com",
        age: 22
    },
    {
        fname: "Priya",
        lname: "Patil",
        contact: "9876543211",
        email: "priya@gmail.com",
        age: 21
    },
    {
        fname: "Amit",
        lname: "More",
        contact: "9876543212",
        email: "amit@gmail.com",
        age: 23
    },
    {
        fname: "Sneha",
        lname: "Deshmukh",
        contact: "9876543213",
        email: "sneha@gmail.com",
        age: 20
    },
    {
        fname: "Rohan",
        lname: "Jadhav",
        contact: "9876543214",
        email: "rohan@gmail.com",
        age: 24
    },
    {
        fname: "Pooja",
        lname: "Kadam",
        contact: "9876543215",
        email: "pooja@gmail.com",
        age: 22
    },
    {
        fname: "Akash",
        lname: "Shinde",
        contact: "9876543216",
        email: "akash@gmail.com",
        age: 25
    },
    {
        fname: "Neha",
        lname: "Pawar",
        contact: "9876543217",
        email: "neha@gmail.com",
        age: 21
    },
    {
        fname: "Vishal",
        lname: "Gaikwad",
        contact: "9876543218",
        email: "vishal@gmail.com",
        age: 23
    },
    {
        fname: "Kiran",
        lname: "More",
        contact: "9876543219",
        email: "kiran@gmail.com",
        age: 22
    }
];

function onEdit(hof) {
    let editobj = stuArr[hof]
    fnamecontrol.value = editobj.fname;
    lnamecontrol.value = editobj.lname;
    contactcontrol.value = editobj.contact;
    emailcontrol.value = editobj.email;
    agecontrol.value = editobj.age;
    submitbtn.style.backgroundColor = 'blue'
    submitbtn.innerHTML = "+update Todo"
}

function createtable(std) {
    let result = "";
    std.forEach((sub, i) => {
        result += `<tr>
                <td>${i + 1}</td>
                <td>${sub.fname}</td>
                <td>${sub.lname}</td>
                <td>${sub.contact}</td>
                <td>${sub.email}</td>
                <td>${sub.age}</td>
                <td>
                <button class="btn btn-sm btn-primary" onclick="onEdit(${i})">Edit</button>
                </td>
                <td>
                <button class="btn btn-sm btn-danger">Remove</button>
                </td>
                </tr>`
    });

    stdatacontrol.innerHTML = result;

}
createtable(stuArr)


function onhandlebtn(stud) {
    stud.preventDefault()
    let stdobj = {
        fname: fnamecontrol.value,
        lname: lnamecontrol.value,
        contact: contactcontrol.value,
        email: emailcontrol.value,
        age: agecontrol.value
    }
    stuArr.push(stdobj);
    createtable(stuArr);
    stdform.reset();
}





stdform.addEventListener("submit", onhandlebtn)