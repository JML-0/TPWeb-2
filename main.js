window.addEventListener("load", main);
var nbPeople = 20;

function main(event){
    generareTable();
}

function generatePeople(){ //Génère une personne
    people = {
        LastName : faker.fake("{{name.lastName}}"),
        FirstName : faker.fake("{{name.firstName}}"),
        Age : randRange(18, 100),
        Job : faker.fake("{{company.companyName}}"),
        Tel : faker.fake("{{phone.phoneNumber}}"),
        Address : faker.fake("{{address.streetAddress}}")
    }
    return people; 
}

function generareTable(people){
    var tab = document.createElement("table");
    var trTh = document.createElement("tr");
    var people = generatePeople();
    
    for(var value in people){
        var th = document.createElement("th");
        var thText = document.createTextNode(`${value}`);

        th.appendChild(thText);
        trTh.appendChild(th);

        tab.appendChild(trTh);
    }
    
    for(var i = 0; i < nbPeople; i++){
        var people = generatePeople(); //à chaque boucle une nouvelle personne est créee
        var tr = document.createElement("tr");

        for(var value in people){
            var td = document.createElement("td");
            var tdText = document.createTextNode(`${people[value]}`);

            td.appendChild(tdText);
            tr.appendChild(td);
            
        }
        tab.appendChild(tr);
    }
    document.body.appendChild(tab);
}

function randRange(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}