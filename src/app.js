import 'bootstrap';
import './style.css';

import './assets/img/rigo-baby.jpg';
import './assets/img/4geeks.ico';

window.onload = function () {
  //write your code here
  generateDomainNames();
  console.log('Hello Rigo from the console!');
};

// List of pronouns
const pronouns = ['the', 'our'];
// List of adjectives
const adjectives = ['great', 'big'];
// List of nouns
const nouns = ['jogger', 'racoon'];
// List of extensions
const extensions = ['.com', '.net', '.us', '.io'];
// Function to generate a random domain name
function generateDomainName() {
  const randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomExtension =
    extensions[Math.floor(Math.random() * extensions.length)];

  return `${randomPronoun}${randomAdjective}${randomNoun}${randomExtension}`;
}
// Function to generate a list of domain names
function generateDomainNames() {
  const domainNames = [];
  for (let i = 0; i < 100; i++) {
    domainNames.push(generateDomainName());
  }
  return domainNames;
}
//display the domain names in the console
domainNames.forEach((domainName) => {
  console.log(domainName);
});
