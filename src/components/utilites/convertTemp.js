export const tempConver = (temp, convert) => {
    convert.trim()
    if(convert == 'C') {
        temp = Math.round((temp * 1.8) + 32)
        convert = 'F'
    } else if(convert == 'F') {
        temp = Math.round((temp - 32) * .55)
        convert = 'C'
    }
    return {
        temp: temp,
        convert: convert
    }
}