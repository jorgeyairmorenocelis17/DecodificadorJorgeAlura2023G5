/* Variables de datos */
const input= document.querySelector('#textarea1')
const results=document.querySelector('#textarea2')
const alertSection=document.querySelector('#alert_section2')
const resultSection=document.querySelector('#results_section2')

/* Diccionario */
const Dictionary={
    e:'enter',
    i:'imes',
    o:'ober',
    a:'ai',
    u:'ufat'
}

/* Evento clikc mouse */
const handleClick=(type)=>{
    const inputValue=input.value
    const newText=criptografia(inputValue,type)
    showResults(newText)
}

/* Encriptar o Desencriptar el texto */
const criptografia= (text,type) =>{
    for (const key in Dictionary){
        if(type==='encrypt'){
            text=text.replace(new RegExp(key,'g'),Dictionary[key])
        }
        else{
            text=text.replace(new RegExp(Dictionary[key],'g'),key)
        }
    }
    return text
}


/* Mostar los resultados en la vista */
const showResults= (text)=>{
    results.value=text
    alertSection.classList.toggle('nonvisible',!!text)
    resultSection.classList.toggle('nonvisible',!text)
}

/* Copiar el texto */
const copyText = ()=>{
    navigator.clipboard.writeText(results.value)
    
    copyButton.innerText='Texto Copiado'
    copyButton.classList.add('button--copy')
    setTimeout(()=>{
        copyButton.innerText='Copiar'
        copyButton.classList.remove('button--copy')
    },1000)

}

