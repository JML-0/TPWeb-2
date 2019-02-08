window.addEventListener("load", generareTable);
var nbPeople = 20;

function generareTable(){
    var tab = document.createElement("table");
    var people = generatePeople();
    
    //Titre des colonnes en fonction du nom clé de l'objet people
    var trTh = document.createElement("tr");
    for(var value in people){
        var th = document.createElement("th");
        var thText = document.createTextNode(`${value}`);

        th.appendChild(thText);
        trTh.appendChild(th);

        tab.appendChild(trTh);
    }
    //---------------------------------------------------------------
    
    for(var i = 0; i < nbPeople; i++){
        people = generatePeople(); //nouvelle personne
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

function generatePeople(){
    var people = {
        LastName : faker.fake("{{name.lastName}}"),
        FirstName : faker.fake("{{name.firstName}}"),
        Age : randRange(18, 100),
        Job : faker.fake("{{name.jobType}}"),
        Tel : faker.fake("{{phone.phoneNumber}}"),
        Address : faker.fake("{{address.streetAddress}}") + ", " + 
                faker.fake("{{address.city}}") + ", ["+
                faker.fake("{{address.country}}") + "]"
    }
    return people; 
}

function randRange(min, max) {return Math.floor(Math.random() * (max-min+1)) + min;}