async function permittedCharacters(result) {
    let permited = []

    if (result.upper == 1) permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if (result.lower == 1) permited.push(..."abcdefghijklmnopqrstuvwxyz")
    if (result.numbers == 1) permited.push(..."0123456789")
    if (result.special == 1) permited.push(..."!@#$%&*-_=+?")

    if(permited.length == 0) permited.push(..."abcdefghijklmnopqrstuvwxyz")

    return permited
}

export default permittedCharacters