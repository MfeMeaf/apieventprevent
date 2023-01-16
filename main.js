"use strict";

var omdbAPI = new XMLHttpRequest();
var button = document.getElementById("submit");

button.addEventListener("click", () => {
    let name = document.forms["search-form"]["query"].value;
    if (name == "") {
        alert("Infoga namn på film")
    } else {
        let divres = document.getElementById("result");
        divres.innerHTML = "";

        var omdbURL = `http://www.omdbapi.com/?i=tt3896198&apikey=2b720446&s=${name}&type=movie`;

        omdbAPI.addEventListener("load", function () {
            var result = JSON.parse(this.responseText);
            if (result.Response == "False") {
                alert("Filmen existerar ej")
            } else {
                var search = result.Search;
                search.forEach(i => {
                    divres.innerHTML += `<br> ${i.Title} ${i.Year} <br> `;
                });
            }
        });
        omdbAPI.open("get", omdbURL, true);
        omdbAPI.send();
        event.preventDefault();
    }
})