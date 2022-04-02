function checkTemp(temp){
    if(temp<=20){
    console.log("liiga külm");
    return -1;
    }
    else if (temp>=48){
    console.log("liiga kuum");
    return 1;
    }
    
    else {
        console.log("paras");
        return 0;
    }
}

checkTemp(5)


