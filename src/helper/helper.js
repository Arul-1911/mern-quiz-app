

export function attemps_Number(result){
   return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result,answer,point){
   return result.map((element,i) => answer[i] === element).filter(i => i).map(i => point).reduce((prev,current) => prev+current,0)
}

export function flagResult(totalpoints,earnpoints){
   return (totalpoints * 50/100) < earnpoints
}