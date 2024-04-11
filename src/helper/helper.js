import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export function attemps_Number(result){
   return result.filter(r => r !== undefined).length;
}

export function earnPoints_Number(result,answer,point){
   return result.map((element,i) => answer[i] === element).filter(i => i).map(i => point).reduce((prev,current) => prev+current,0)
}

export function flagResult(totalpoints,earnpoints){
   return (totalpoints * 50/100) < earnpoints
}

//check user auth
export function CheckUserExist({ children }){
   const auth = useSelector(state => state.result.userId)
   return auth ? children : <Navigate to={'/'} replace={true}></Navigate>

}