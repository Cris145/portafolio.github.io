const span = document.querySelector(".span")
const caret = document.querySelector(".caret")

const typingAnimation = (text, tag) => {
    let index = 0
    let finalText = ""
    const typingText = setInterval(() => {
        finalText += text[index]
        tag.innerText = finalText
        index++
        if (index == text.length) {
            clearInterval(typingText)
            setTimeout(()=>{
                caret.style.display = "none"
            },1000)
        }
    }, 150)
    
}

const paragraph = "Hola, mi nombre es Fulana de Tal y construyo paginas web."

typingAnimation(paragraph, span)