function countCode(letter){
    let count = 0;
    for(let i = 0; i<DataCue.length;i++){
        if(data[i][0]==letter){
            count++;
        }
    }
    console.log(count);
    return count;
}    

