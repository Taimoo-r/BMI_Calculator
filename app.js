const button = document.querySelector('button');
button.addEventListener('click',get =>{
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    if(height==NaN || weight==NaN)
        alert("Enter Valid Height & Weight");
else{
    const heightInMeters = height / 100;
        const BMI = weight / (heightInMeters * heightInMeters);
        alert(`Your Body Mass Index is: ${BMI.toFixed(2)}`);
        if(BMI<18.6)
            document.querySelector('.Result').innerHTML = "Under-Weight";
        else if(BMI>=18.6 && BMI<=24.9)
            document.querySelector('.Result').innerHTML = "Normal";
        else
        document.querySelector('.Result').innerHTML = "Over-Weight";
}
});
setInterval(function(){
    let date = new Date();
    document.querySelector('.time').innerText = date.toLocaleTimeString();
},1000)