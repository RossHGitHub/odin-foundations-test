let h1 = document.getElementById('objectTest');

function person(title, age, height){
    this.name = title
    this.age = age
    this.height = height
}

const john = new person('John', '19', '185cm')

const becka = new person('Rebecka', '43', '172cm')

alert('first thing\'s first, let\s get some info!');
let title = prompt('what\'s your name?');
let age = prompt('how old are you?');
let height = prompt('how tall are you?');




h1.innerText=`${title}\'s name is: ${title}.

${title}\'s age is: ${age}.

${title}\'s height is ${height}.`;

if ((title==='' || title === null) ||
    (age===''|| age===null) ||
    (height===''||height===null)){
        h1.innerText='';
    }