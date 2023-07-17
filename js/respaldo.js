const allInputs = document.querySelectorAll(".input");
const allSpans = document.querySelectorAll(".errorMessage__hide")

const showInputValidation = (arrayOfInputs) => {
    arrayOfInputs.forEach((input, index) => {
        input.addEventListener("blur", () => {
            if (input.validity.valid) {
                allSpans[index].classList.add = "hide"
            } else if (!(inputValidation(input.value, input.dataset.type))) {
                allSpans[index].classList.remove = "hide"
                allSpans[index].innerHTML = errorMessages[input.dataset.type].typeMismatch
            } else {
                allSpans[index].classList.remove = "hide"
                allSpans[index].innerHTML = selectErrorMessage(input,input.dataset.type)
            }
        })
    });
}

const regex = {
    nombre: /^(?=.*[A-Z]).{3,}$/,
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    topic: /^(?=.*[A-Z]).{3,}$/,
    message: /^(?=.*[A-Z]).{3,}$/
}

const errorType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]


const errorMessages = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        typeMismatch: "El nombre no es válido"
    },
    email: {
        valueMissing: "El campo email no puede estar vacío",
        typeMismatch: "El email no es válido"
    }, topic: {
        valueMissing: "El campo asunto no puede estar vacío",
        typeMismatch: "El asunto no es válido"
    }, message: {
        valueMissing: "El campo mensaje no puede estar vacío",
        typeMismatch: "El mensaje no es válido"
    }
}


const selectErrorMessage = (input, tipoDeInput) => {
    let mensaje
    errorType.forEach((error) => {
        if (input.validity[error]) {
            mensaje = errorMessages[tipoDeInput][error]
            return mensaje
        }
    })
}

const inputValidation = (input, tipoDeInput) => regex[tipoDeInput].test(input);

showInputValidation(allInputs)