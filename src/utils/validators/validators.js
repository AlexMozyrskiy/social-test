export const requiredField = (value) => {          // поле обязательно для заполнения
    if(value) return undefined;
    return "Field is required";
}

export const maxLengthCreator = (maxLenght) => (value) => {         // максимальная длина строки символов
    if(value && value.length > maxLenght){
        return `Max Lenght is ${maxLenght} symbols`;
    }
    return undefined;
}