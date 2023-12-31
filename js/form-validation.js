const allInputs = document.querySelectorAll(".input");
const allSpans = document.querySelectorAll(".errorMessage__hide");
const errorSound = document.getElementById("error-sound");

const showInputValidation = (arrayOfInputs) => {
    arrayOfInputs.forEach((input, index) => {
        input.addEventListener("blur", () => {
            if (input.validity.valid) {
                allSpans[index].innerHTML = ""
            } else {
                allSpans[index].innerHTML = selectErrorMessage(input, input.dataset.type)
                errorSound.play()
            }
        })
    });
}
showInputValidation(allInputs)

const errorType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]

const errorMessages = {
    name: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "El nombre puede tener mas de 50 caracteres"
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        patternMismatch: "El email no es válido"
    }, topic: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El asunto no puede tener mas de 50 caracteres"
    }, message: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "El mensaje no puede tener mas de 300 caracteres"
    }
}


const selectErrorMessage = (input, tipoDeInput) => {
    let mensaje = "";
  
    errorType.forEach((error) => {
      if (input.validity[error]) {
        mensaje = errorMessages[tipoDeInput][error];
      }
    });
  
    return mensaje;
  };
  



