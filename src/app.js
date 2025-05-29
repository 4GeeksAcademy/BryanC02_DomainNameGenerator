import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extentions = ['.com', '.us', '.net', '.io'];

   let result = [];

    for (let p of pronoun) {
        for (let a of adj) {
            for (let n of noun) {
              for (let e of extentions){
                result.push(p + a + n + e);
              }
            }
        }
    }

    let domain = result[Math.floor(Math.random() * result.length)];

  /* Different way
  let randpro = pronoun[Math.floor(Math.random()*pronoun.length)];
  let randadj = adj[Math.floor(Math.random()*adj.length)];
  let rannoun = noun[Math.floor(Math.random()*noun.length)];

  let domain = randpro + randadj + rannoun + ".com";
*/
  document.getElementById("domain").innerHTML = domain;
};
