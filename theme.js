const checkbox = document.querySelector("#theme");
const html = document.querySelector("html");

//resultColorDark = "#2C394B";
//equalColorDark = "#03C988";
//bodyColorDark = "#27374D";
//calcuColorDark = "#526D82";
//numbersColorDark = "#9DB2BF";
//operatorsColorDark = "#2C394B";

//resultColorLight = "#FF6701";
//equalColorLight = "#EE8572";
//bodyColorLight = "#FCECDD";
//calcuColorLight = "#FFC288";
//numbersColorLight = "#FEA82F";
//operatorsColorLight = "#FF6701";

checkbox.checked = true;

function handleCheckboxChange(){
    if(checkbox.checked){
        html.classList.remove("light-theme");
        html.classList.add("dark-theme");
    }else{
        html.classList.remove("dark-theme");
        html.classList.add("light-theme");
    }
}

// Checkbox durumunda değişiklik olduğunda handleCheckboxChange işlevini çağırın
checkbox.addEventListener('change', handleCheckboxChange);


