// alert("Aš esu JS faile");

console.log("Aš esu konsolėje!");

document.write("Aš esu dokumente!");

var kintamojoPavadinimas = "Kazkoks tekstas";
console.log(kintamojoPavadinimas);


var masyvas = ["Vardas", 23, true, null];
// masyvas.pop();
// masyvas.push("Nauja reikšmė");
// masyvas.shift();
masyvas.unshift(50);

// Klausimas: Kaip pasalinti konkretu elementa?

console.log(masyvas);
// console.log(masyvas.length);


var profile = {
    firstName: "Kazimiras",
    lastName: "Jarmolovskis",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    changeName: function(newFirstName) {
        this.firstName = newFirstName;
    },
}

profile.changeName("Tadas");
console.log(profile.fullName());



var paragraph = document.createElement("p");
paragraph.innerText = "Tekstas idetas i elementa su JS."

document.body.append(paragraph);


var button1 = document.querySelector("#change-p-color");

button1.addEventListener("click", function() {

    var outro = document.querySelector("div.outro p");

    if (outro.style.color == "red") {
        outro.style.color = "black";
    } else {
        outro.style.color = "red";
    }

});

document.addEventListener("keyup", function(event) {
    console.log(event.key);
});


var button2 = document.querySelector("#change-img");
var i=0;
button2.addEventListener("click", function() {
    var image = document.querySelector("div.gallery img");
    image.setAttribute("src", "http://picsum.photos/seed/" + i++ + "/150");
});

var images = document.querySelectorAll("dic.gallery img");
for (var j = 0; j < images.length; j++) {
    images[j].addEventListener("click", function(event){
        console.log(event);

    });
}
