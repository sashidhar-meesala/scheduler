
// OBJECT
const course1 = {
    name: `Tools & Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    break: true,
    duration: 160
  };

  const course2 = {
    name: `Design and prototyping`,
    code: `WDDM-117`,
    instructor: `cory coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    break: 'yes',
    duration: 160
  };

  const course3 = {
    name: `applied programming`,
    code: `WDDM-113`,
    instructor: `Rocco`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    break: 'yes',
    duration: 160
  };

  const course4 = {
    name: `applied design`,
    code: `WDDM-114`,
    instructor: `Rocco`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    break: 'yes',
    duration: 160
  };

  const course5 = {
    name: `web production`,
    code: `WDDM-116`,
    instructor: `Miro`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    break: 'yes',
    duration: 160
  };
  
  


  const allcourses =[course1,course2,course3,course4,course5];

 
  function getDurationFromMinutes (minutes) {
  
    let hrs = Math.floor(minutes / 60);
    let mins = minutes % 60;
    
    return `${hrs} hr, ${mins} min`;
  }
  
function setCourseHTML(){
for (let i = 0; i < allcourses.length; i++) {
    document.getElementById(`app`).innerHTML += `
    <section class="course">
    <h1>Course Name: <strong>${allcourses[i].name}</strong></h1>
        <ul>
        
          <li>Course Code: <strong>${allcourses[i].code}</strong></li>
          <li>Instructor: <strong>${allcourses[i].instructor}</strong></li>
          <li>Start: <strong >${allcourses[i].start.term},${allcourses[i].start.year}</strong></li>
        
          <li>
            Weeks: <strong>${allcourses[i].weeks}</strong>
            <ul>
              <!-- Reminder: Compare vs just listing break weeks -->
              <li>Includes Break: <strong>${allcourses[i].break}</strong></li>
            </ul>
          </li> 
          <li>Duration: <strong >2:40</strong></li> <!-- Use a function to convert from minutes -->
        </ul>
        </section>`;

}}


setCourseHTML();




/*

 //function setting course html

 function setCourseHTML(course){
    document.getElementById(`name1`).innerHTML = course.name;
    document.getElementById(`code1`).innerHTML = course.code;
    document.getElementById(`instructor1`).innerHTML = course.instructor;
    document.getElementById(`start1`).innerHTML = `${course.start.term} ${course.start.year}`;
    document.getElementById(`weeks1`).innerHTML = course.weeks;
    document.getElementById(`break1`).innerHTML = course.break;
    document.getElementById(`duration1`).innerHTML = getDurationFromMinutes(course.duration);
    document.getElementById(`name1`).style.color = `#f00`;
 }


















//printing all the course details 
//accessing course details and putting it in html
for (let i = 0; i < allcourses.length; i++) {
    setCourseHTML(allcourses[i])
}

function getCourseAsHtmlString(coursenum)
 {
     return `
   document.getElementById(app).innerHTML +=
   <h3 id="name1"></h3>
        <ul>
          <li>Course Code: <strong id="code${coursenum}"></strong></li>
          <li>Instructor: <strong id="instructor${coursenum}"></strong></li>
          <li>Start: <strong id="start${coursenum}"></strong></li>
          <li>
            <!-- Reminder: Compare vs 14 + 1 break -->
            Weeks: <strong id="weeks${coursenum}"></strong>
            <ul>
              <!-- Reminder: Compare vs just listing break weeks -->
              <li>Includes Break: <strong id="break${coursenum}"></strong></li>
            </ul>
          </li>
          <li>Duration: <strong id="duration1">2:40</strong></li> <!-- Use a function to convert from minutes -->
        </ul>
   `;
   
 }

 //function setting course html

 function setCourseHTML(course){
    document.getElementById(`name1`).innerHTML = course.name;
    document.getElementById(`code1`).innerHTML = course.code;
    document.getElementById(`instructor1`).innerHTML = course.instructor;
    document.getElementById(`start1`).innerHTML = `${course.start.term} ${course.start.year}`;
    document.getElementById(`weeks1`).innerHTML = course.weeks;
    document.getElementById(`break1`).innerHTML = course.break;
    document.getElementById(`duration1`).innerHTML = getDurationFromMinutes(course.duration);
    document.getElementById(`name1`).style.color = `#f00`;
 }

 //function getCourseAsHtmlString


 getCourseAsHtmlString(0);


//document.getElementById(`name${coursenum}`).innerHTML += allcourses[1].name;
 // document.getElementById(`code${coursenum}`).innerHTML += allcourses[1].code;
 // document.getElementById(`instructor${coursenum}`).innerHTML += allcourses[1].instructor;
  //document.getElementById(`start${coursenum}`).innerHTML += `${allcourses[1].start.term} ${allcourses[1].start.year}`;
 // document.getElementById(`weeks${coursenum}`).innerHTML += allcourses[1].weeks;
 // document.getElementById(`break${coursenum}`).innerHTML += allcourses[1].break;
 // document.getElementById(`duration${coursenum}`).innerHTML += getDurationFromMinutes(allcourses[1].duration);
  
 // document.getElementById(`name`).style.color = `#f00`;

*/
