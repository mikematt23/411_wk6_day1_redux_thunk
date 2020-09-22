const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}
 const importAction = (makes)=>{
     return{
         type : "FETCH_MAKES",
         value : makes
     }
 }

export const importMakes = ()=>{
    return (dispatch)=>{
        fetch(url)
        .then((res)=> {return res.json()})
        .then((data)=>{
            console.log(data.Results)
            dispatch(importAction(data.Results))
        })
    }
}

export const deleteMake = (index)=>{
    return {
        type:"DELETE_MAKE",
        value: index
    }
}