/* @superbowlWin - searches array for years with Ws
 * Return - year if W is found else return undefined
**/

function superbowlWin(array){
    let result = array.find( record => record.result === "W" )
    //syntax for ternary operator is: condition ? expressionIfTrue : expressionIfFalse
    return result ? result.year : undefined
}
superbowlWin(record)