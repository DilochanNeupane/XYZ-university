// LOGIN
function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;

    if (u === "admin" && p === "1234") {
        localStorage.setItem("login", true);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid login";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "login.html";
}

// =======================
// STUDENT SYSTEM
// =======================

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function saveStudent() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const program = document.getElementById("program").value;

    if (name === "" || email === "" || program === "") {
        alert("Please fill all fields");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];

    const newStudent = {
        id: students.length + 1,
        name: name,
        email: email,
        program: program
    };

    students.push(newStudent);
    localStorage.setItem("students", JSON.stringify(students));

    closeModal();
    loadStudents();
}

function loadStudents() {
    const table = document.getElementById("studentList");
    if (!table) return;

    table.innerHTML = "";

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.program}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    updateDashboardCount();
}

function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    loadStudents();
}

function updateDashboardCount() {
    const total = document.getElementById("totalStudents");
    if (!total) return;

    let students = JSON.parse(localStorage.getItem("students")) || [];
    total.innerText = students.length;
}

// Load data automatically when page opens
document.addEventListener("DOMContentLoaded", function () {
    loadStudents();
});
// ======================
// DEPARTMENTS
// ======================

function openDeptModal(){ document.getElementById("deptModal").style.display="block"; }
function closeDeptModal(){ document.getElementById("deptModal").style.display="none"; }

function saveDepartment(){
    const name = document.getElementById("deptName").value;
    if(name===""){ alert("Enter department name"); return; }

    let data = JSON.parse(localStorage.getItem("departments")) || [];
    data.push({ id:data.length+1, name:name });
    localStorage.setItem("departments", JSON.stringify(data));

    closeDeptModal();
    loadDepartments();
}

function loadDepartments(){
    const table=document.getElementById("departmentList");
    if(!table) return;
    table.innerHTML="";
    let data=JSON.parse(localStorage.getItem("departments"))||[];
    data.forEach((d,i)=>{
        table.innerHTML+=`
        <tr>
            <td>${d.id}</td>
            <td>${d.name}</td>
            <td><button onclick="deleteDepartment(${i})">Delete</button></td>
        </tr>`;
    });
}

function deleteDepartment(i){
    let data=JSON.parse(localStorage.getItem("departments"))||[];
    data.splice(i,1);
    localStorage.setItem("departments",JSON.stringify(data));
    loadDepartments();
}

// ======================
// COURSES
// ======================

function openCourseModal(){ document.getElementById("courseModal").style.display="block"; }
function closeCourseModal(){ document.getElementById("courseModal").style.display="none"; }

function saveCourse(){
    const name=document.getElementById("courseName").value;
    const dept=document.getElementById("courseDept").value;

    let data=JSON.parse(localStorage.getItem("courses"))||[];
    data.push({id:data.length+1,name,dept});
    localStorage.setItem("courses",JSON.stringify(data));

    closeCourseModal();
    loadCourses();
}

function loadCourses(){
    const table=document.getElementById("courseList");
    if(!table) return;
    table.innerHTML="";
    let data=JSON.parse(localStorage.getItem("courses"))||[];
    data.forEach((c,i)=>{
        table.innerHTML+=`
        <tr>
            <td>${c.id}</td>
            <td>${c.name}</td>
            <td>${c.dept}</td>
            <td><button onclick="deleteCourse(${i})">Delete</button></td>
        </tr>`;
    });
}

function deleteCourse(i){
    let data=JSON.parse(localStorage.getItem("courses"))||[];
    data.splice(i,1);
    localStorage.setItem("courses",JSON.stringify(data));
    loadCourses();
}

// ======================
// ENROLLMENT
// ======================

function openEnrollModal(){ document.getElementById("enrollModal").style.display="block"; }
function closeEnrollModal(){ document.getElementById("enrollModal").style.display="none"; }

function saveEnrollment(){
    const student=document.getElementById("enrollStudent").value;
    const course=document.getElementById("enrollCourse").value;

    let data=JSON.parse(localStorage.getItem("enrollments"))||[];
    data.push({id:data.length+1,student,course});
    localStorage.setItem("enrollments",JSON.stringify(data));

    closeEnrollModal();
    loadEnrollments();
}

function loadEnrollments(){
    const table=document.getElementById("enrollmentList");
    if(!table) return;
    table.innerHTML="";
    let data=JSON.parse(localStorage.getItem("enrollments"))||[];
    data.forEach((e,i)=>{
        table.innerHTML+=`
        <tr>
            <td>${e.id}</td>
            <td>${e.student}</td>
            <td>${e.course}</td>
            <td><button onclick="deleteEnrollment(${i})">Delete</button></td>
        </tr>`;
    });
}

function deleteEnrollment(i){
    let data=JSON.parse(localStorage.getItem("enrollments"))||[];
    data.splice(i,1);
    localStorage.setItem("enrollments",JSON.stringify(data));
    loadEnrollments();
}

// ======================
// FEES
// ======================

function openFeeModal(){ document.getElementById("feeModal").style.display="block"; }
function closeFeeModal(){ document.getElementById("feeModal").style.display="none"; }

function saveFee(){
    const student=document.getElementById("feeStudent").value;
    const amount=document.getElementById("feeAmount").value;

    let data=JSON.parse(localStorage.getItem("fees"))||[];
    data.push({id:data.length+1,student,amount});
    localStorage.setItem("fees",JSON.stringify(data));

    closeFeeModal();
    loadFees();
}

function loadFees(){
    const table=document.getElementById("feeList");
    if(!table) return;
    table.innerHTML="";
    let data=JSON.parse(localStorage.getItem("fees"))||[];
    data.forEach((f,i)=>{
        table.innerHTML+=`
        <tr>
            <td>${f.id}</td>
            <td>${f.student}</td>
            <td>$${f.amount}</td>
            <td><button onclick="deleteFee(${i})">Delete</button></td>
        </tr>`;
    });
}

function deleteFee(i){
    let data=JSON.parse(localStorage.getItem("fees"))||[];
    data.splice(i,1);
    localStorage.setItem("fees",JSON.stringify(data));
    loadFees();
}

// AUTO LOAD
document.addEventListener("DOMContentLoaded",function(){
    loadDepartments();
    loadCourses();
    loadEnrollments();
    loadFees();
});
// ======================
// LOAD DROPDOWNS
// ======================

function loadDepartmentDropdown() {
    const select = document.getElementById("courseDept");
    if (!select) return;

    select.innerHTML = "<option value=''>Select Department</option>";
    let depts = JSON.parse(localStorage.getItem("departments")) || [];

    depts.forEach(d => {
        select.innerHTML += `<option value="${d.name}">${d.name}</option>`;
    });
}

function loadStudentDropdown(targetId) {
    const select = document.getElementById(targetId);
    if (!select) return;

    select.innerHTML = "<option value=''>Select Student</option>";
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach(s => {
        select.innerHTML += `<option value="${s.name}">${s.name}</option>`;
    });
}

function loadCourseDropdown() {
    const select = document.getElementById("enrollCourse");
    if (!select) return;

    select.innerHTML = "<option value=''>Select Course</option>";
    let courses = JSON.parse(localStorage.getItem("courses")) || [];

    courses.forEach(c => {
        select.innerHTML += `<option value="${c.name}">${c.name}</option>`;
    });
}
function loadStudents(){
    const table = document.getElementById("studentList");
    if(!table) return;

    table.innerHTML="";
    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.forEach((s,i)=>{
        table.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${s.name}</td>
            <td>${s.gender}</td>
            <td>${s.dob}</td>
            <td>${s.email}</td>
            <td>${s.phone}</td>
            <td>${s.address}</td>
            <td>${s.city}</td>
            <td>${s.state}</td>
            <td>${s.year}</td>
            <td>${s.department}</td>
            <td>${s.parent}</td>
            <td>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>`;
    });
}

function searchStudent(){
    let keyword = document.getElementById("searchInput").value.toLowerCase();
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let table = document.getElementById("studentList");

    table.innerHTML="";
    students.filter(s => s.name.toLowerCase().includes(keyword))
    .forEach((s,i)=>{
        table.innerHTML += `
        <tr>
            <td>${i+1}</td>
            <td>${s.name}</td>
            <td>${s.gender}</td>
            <td>${s.dob}</td>
            <td>${s.email}</td>
            <td>${s.phone}</td>
            <td>${s.address}</td>
            <td>${s.city}</td>
            <td>${s.state}</td>
            <td>${s.year}</td>
            <td>${s.department}</td>
            <td>${s.parent}</td>
            <td>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>`;
    });
}
function saveStudent(){

    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const year = document.getElementById("year").value;
    const department = document.getElementById("department").value;
    const parent = document.getElementById("parent").value;

    if(name === ""){
        alert("Please enter student name");
        return;
    }

    let students = JSON.parse(localStorage.getItem("students")) || [];

    students.push({
        name, gender, dob, email,
        phone, address, city,
        state, year, department, parent
    });

    localStorage.setItem("students", JSON.stringify(students));

    closeStudentModal();
    loadStudents();
}
function loadDepartmentDropdownForStudent(){
    const select = document.getElementById("department");
    if(!select) return;

    select.innerHTML = "<option value=''>Select Department</option>";

    let depts = JSON.parse(localStorage.getItem("departments")) || [];

    depts.forEach(d=>{
        select.innerHTML += `<option value="${d.name}">${d.name}</option>`;
    });
}
function openStudentModal(){
    loadDepartmentDropdownForStudent();
    document.getElementById("studentModal").style.display="block";
}

function closeStudentModal(){
    document.getElementById("studentModal").style.display="none";
}
document.addEventListener("DOMContentLoaded", function(){
    loadStudents();
});
function loadDepartmentDropdown() {
    const select = document.getElementById("courseDept");
    if (!select) return;

    select.innerHTML = "<option value=''>Select Department</option>";

    let departments = JSON.parse(localStorage.getItem("departments")) || [];

    departments.forEach(dept => {
        select.innerHTML += `<option value="${dept.name}">${dept.name}</option>`;
    });
}
function openCourseModal() {
    loadDepartmentDropdown();   // 🔥 This loads departments
    document.getElementById("courseModal").style.display = "block";
}
localStorage.getItem("departments")
