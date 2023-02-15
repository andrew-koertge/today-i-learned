const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');
const factsList = document.querySelector('.facts-list');
const initialFacts = [
   {
     id: 1,
     text: "React is being developed by Meta (formerly facebook)",
     source: "https://opensource.fb.com/",
     category: "technology",
     votesInteresting: 24,
     votesMindblowing: 9,
     votesFalse: 4,
     createdIn: 2021,
   },
   {
     id: 2,
     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
     source:
       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
     category: "society",
     votesInteresting: 11,
     votesMindblowing: 2,
     votesFalse: 0,
     createdIn: 2019,
   },
   {
     id: 3,
     text: "Lisbon is the capital of Portugal",
     source: "https://en.wikipedia.org/wiki/Lisbon",
     category: "society",
     votesInteresting: 8,
     votesMindblowing: 3,
     votesFalse: 1,
     createdIn: 2015,
   },
 ];

 const CATEGORIES = [
   { name: "technology", color: "#3b82f6" },
   { name: "science", color: "#16a34a" },
   { name: "finance", color: "#ef4444" },
   { name: "society", color: "#eab308" },
   { name: "entertainment", color: "#db2777" },
   { name: "health", color: "#14b8a6" },
   { name: "history", color: "#f97316" },
   { name: "news", color: "#8b5cf6" },
 ];

factsList.innerHTML = '';

loadFacts();

async function loadFacts() {
   const res = await fetch('https://yajfxmtqjfzlrfmfokwz.supabase.co/rest/v1/facts', {
   headers: {
      apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhamZ4bXRxamZ6bHJmbWZva3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3ODA0NDYsImV4cCI6MTk5MDM1NjQ0Nn0.ttdvkLw2jBWWRFuLhPVf-k6KkkgjeOMjrQGq8V-JFcg',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhamZ4bXRxamZ6bHJmbWZva3d6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ3ODA0NDYsImV4cCI6MTk5MDM1NjQ0Nn0.ttdvkLw2jBWWRFuLhPVf-k6KkkgjeOMjrQGq8V-JFcg'
   }
});

   const data = await res.json();
   //const filteredData = data.filter((fact)=>fact.category === 'society');

   createFactsList(data);
}

// factsList.insertAdjacentHTML('afterbegin', '<li>Test</li>')

function createFactsList(dataArray) {
   const htmlArr = dataArray.map(
      (fact) => `<li class='fact'>
      <p>
      ${fact.text}
         <a class="source" href="${fact.source}" target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: 
      ${CATEGORIES.find((cat)=> cat.name === fact.category).color}">${fact.category}</span>
      </li>`);
   const html = htmlArr.join("");
   factsList.insertAdjacentHTML("afterbegin", html);
}

btn.addEventListener('click', function() {
   if(form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    btn.textContent = 'Close';
   } else {
    form.classList.add('hidden');
    btn.textContent = 'Share a Fact';
   }
});

function calcFactAge(year) {
   const currentYear = new Date().getFullYear();
   const age = currentYear - year;
   return age;
}

let votesMindblowing = 10;
let votesInteresting = 14;
let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;
const text = "This fact is true.";
const message = totalUpvotes > votesFalse 
? "This fact is true" 
: "Might be false. Check more sources.";

//alert(message);

// const str = `The current fact is "${text}". It is ${
//    calcFactAge(2015)}
//  years old. It is probably 
// ${totalUpvotes > votesFalse ? "correct" : "not true"}.`
// console.log(str);

const calcFactAge2 = (year) => 
   year <= new Date().getFullYear()
   ? new Date().getFullYear() - year
   : `Impossible year. Year needs to be less than or equal to ${new Date().getFullYear()}`;

const allCategories = CATEGORIES.map((el) => el.name);
//console.log(allCategories);



 const factAges = initialFacts.map((el) => calcFactAge2(el.createdIn));
// console.log(factAges);