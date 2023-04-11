export function auth(Token){
    if (Token.length < 1){
        return false
        console.log(Token);
    }
    console.log(Token[0]);
    return true
}