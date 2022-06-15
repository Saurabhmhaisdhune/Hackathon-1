//Creation of HTML element using DOM
//h1 tag
let heading=document.createElement('h1');
heading.innerText="Nationality API";
document.body.append(heading);
heading.setAttribute('id','heading');
//label tag 
let label=document.createElement('label');
label.innerText="Enter any Name below";
document.body.append(label);
label.setAttribute('id','label');
//input tag
let input=document.createElement('input');
input.setAttribute('type','search');
document.body.append(input);
input.setAttribute('id','randomName');
//butten element
let button=document.createElement('button');
button.innerText="SEARCH";
document.body.append(button);
button.addEventListener('click',function(){myNationalize()});
button.setAttribute('id','button')
//async function execute whwn click button
async function myNationalize(){
    try{
        let randomName=document.getElementById('randomName').value;
        //storing input value in randomName variable
        let url=`https://api.nationalize.io/?name=${randomName}`;
        let result= await fetch(url);
        let data=await result.json();
    //creation of di tad to display the country name.
        let div=document.createElement('div');
        div.setAttribute('id','card');
        div.innerHTML=`<p>The Nationality of a Person Based on the Name you have entered:</p>
        <h2>Name: ${data.name} </h2><br>
        <h3>1.First prediction of the Nationality is <span> "${data.country[0].country_id}" </span>. </h3>
        <h5>Probability of number in the country is ${data.country[0].probability}.</h5><br>
        <h3>2.Second prediction of the Nationality is <span> "${data.country[1].country_id}" </span>. </h3>
        <h5>Probability of number in the country is ${data.country[1].probability}.</h5><br>`;
        document.body.append(div);
}
//in case of error or unavailable data of given input catch will display an error massege.
    catch(error){
        alert('country name not available');
    }
}