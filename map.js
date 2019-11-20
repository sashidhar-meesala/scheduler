// OBJECT
const course1 = {
  name: `Tools & Workflow`,
  code: `WDDM-115`,
  instructor: `Kadeem Best`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: true,
  duration: 160
};

const course2 = {
  name: `Design and prototyping`,
  code: `WDDM-117`,
  instructor: `cory coletta`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};

const course3 = {
  name: `applied programming`,
  code: `WDDM-113`,
  instructor: `Rocco`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};

const course4 = {
  name: `applied design`,
  code: `WDDM-114`,
  instructor: `Rocco`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};

const course5 = {
  name: `web production`,
  code: `WDDM-116`,
  instructor: `Miro`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};


//test adding more courses
const course6 = {
  name: `accessible media`,
  code: `WDDM-119`,
  instructor: `many`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};


const course7 = {
  name: `accessible media`,
  code: `WDDM-119`,
  instructor: `many`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};

const course8 = {
  name: `accessible media`,
  code: `WDDM-119`,
  instructor: `many`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160

};
const course9 = {
  name: `accessible media`,
  code: `WDDM-119`,
  instructor: `many`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};

const course10 = {
  name: `accessible media`,
  code: `WDDM-119`,
  instructor: `many`,
  start: {
    term: `Fall`,
    year: 2019
  },
  weeks: 15,
  break: 'yes',
  duration: 160
};

const sem1 =[course1, course2, course3,course4,course5,course6];
const sem2=[course7,course8,course9,course10];

const allcourses = [course1, course2, course3,course4,course5,course6,course7,course8,course9,course10]


function getDurationFromMinutes(minutes) {

  let hrs = Math.floor(minutes / 60);
  let mins = minutes % 60;

  return `${hrs} hr, ${mins} min`;
}

function getCourseAsHtml(allcourses) {
  return `
    <section class="course">
    <h1>Course Name: <strong>${allcourses.name}</strong></h1>
        <ul>
        
          <li>Course Code: <strong>${allcourses.code}</strong></li>
          <li>Instructor: <strong>${allcourses.instructor}</strong></li>
          <li>Start: <strong >${allcourses.start.term},${allcourses.start.year}</strong></li>
          <li>
            Weeks: <strong>${allcourses.weeks}</strong>
            <ul>
              <!-- Reminder: Compare vs just listing break weeks -->
              <li>Includes Break: <strong>${allcourses.break}</strong></li>
            </ul>
          </li> 
          <li>Duration: <strong >2:40</strong></li> 
        </ul>
        </section>`;
}

function showme3(){
  document.getElementById('app').innerHTML = allcourses.slice(0,3).map(getCourseAsHtml).join('\n');
}
function showme4(){
  document.getElementById('app').innerHTML = allcourses.slice(0,4).map(getCourseAsHtml).join('\n');
}

function showmeall(){
  document.getElementById('app').innerHTML = allcourses.map(getCourseAsHtml).join('\n');
}

function showmesem1(){
  document.getElementById('app').innerHTML = sem1.map(getCourseAsHtml).join('\n');
}


function showmesem2(){
  document.getElementById('app').innerHTML = sem2.map(getCourseAsHtml).join('\n');
}


document.getElementById('showme3').addEventListener("click",showme3);
document.getElementById('showme4').addEventListener("click",showme4);
document.getElementById('showmeall').addEventListener("click",showmeall);
document.getElementById('showmesem1').addEventListener("click",showmesem1);
document.getElementById('showmesem2').addEventListener("click",showmesem2);

document.getElementById('app').innerHTML = allcourses.map(getCourseAsHtml).join('\n');

//execution

//getCourseAsHtml(allcourses);
