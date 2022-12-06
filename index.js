 const distanceFromHqInBlocks = (block) =>{
     if (block<42){
        return(42-block);
     }
     else{
        return(block-42);
     }
 }
const distanceFromHqInFeet = (block) => {
    return distanceFromHqInBlocks(block) * 264;
}

const distanceTravelledInFeet = (s,d) =>{
    if (d>s){
        return((d-s)*264);
    }
    else {
        return((s-d)*264);
    }
}
const calculatesFarePrice = (s,d) => {
    let distance = distanceTravelledInFeet(s,d);

    if (distance <= 400){
        return 0;
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500){
        return 25;
    }
    else if (distance > 2500){
        return 'cannot travel that far';
    }
}
