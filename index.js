
const audieo = new Audio(' mp3.mp3')
const button = document.getElementById("unit_convert");
const container = document.getElementById("output");

button.addEventListener('click',()=>{
const celus = document.getElementById("input_felid").value

    if (isNaN(celus)) {
        audieo.play();
        alert("please enter your number");
        return;
    }
    const fahrenheit = (celus * 9/5) + 32;
    container.innerHTML = `${fahrenheit}&deg;f`
    createinput_felid.placeholder = `reult in u\{2019}`;
})