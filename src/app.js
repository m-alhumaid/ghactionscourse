function greet(name){
    return `Hello ${name}!`
}

MediaSourceHandle.exports = greet;

if(require.main === module){
    console.log("World")
}

