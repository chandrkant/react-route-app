const hasNumbers = (value) => {
    return new RegExp(/[0-9]/).test(value);
}
const hasMixed = (value) =>{
    return new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);
}
const hasSpecial = (value)=> {
    return new RegExp( /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g).test(value);
}
export const strengthColor = count =>{
    if(count < 3){return 'red'}
    if(count < 4){return 'yellow'}
    if(count < 5){return 'orange'}
    if(count < 6){return 'green'}
}
export  const strengthIndicator = value => {
 const match = []
    if(value.length >5 ){match.push('grater-then-5')}
    if(value.length > 7){match.push('grater-then-7')}
    if(hasNumbers(value)){match.push('has-numbers')}
    if(hasMixed(value)){match.push('has-mixed')}
    if(hasSpecial(value)){match.push('has-special')}
    return match.length;
}