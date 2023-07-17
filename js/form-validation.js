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
        patternMismatch: "El nombre no es válido"
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        patternMismatch: "El email no es válido"
    }, topic: {
        valueMissing: "El campo asunto no puede estar vacío",
        patternMismatch: "El asunto no es válido"
    }, message: {
        valueMissing: "El campo mensaje no puede estar vacío",
        patternMismatch: "El mensaje no es válido"
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
  



