export const debounce = (func, delay) => {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func.call(this, ...args)
        }, delay)
    }
}

export const editImageUri = (uri) => {
    let separatedString = uri.split("/")
    separatedString[2] = separatedString[2] + "/resize/316x118"
    return separatedString.join("/")
}