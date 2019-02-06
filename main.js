window.addEventListener("load", main);
var tab = document.createElement(table);

function main(event){
    for(i = 0; i < 10; i++){
        
    }
}

function generatePeople(){
    var people = {
        LastName : faker.fake("{{name.lastName}}"),
        FirstName : faker.fake("{{name.firstName}}"),
        Age : randRange(18, 100),
        Job : faker.fake("{{company.companyName}}"),
        Tel : faker.fake("{{phone.phoneNumber}}"),
        Address : faker.fake("{{address.streetAddress}}")
    }
    return people; 
}

function createTr(value){
}

function randRange(min, max) {
	return Math.floor(Math.random() * (max-min+1)) + min;
}