document.getElementById("x").onclick = function(){

    // Extracted and pushed functional unit values to funcUnit array

    const FnUval = document.getElementsByClassName("FnU");
    const funcUnit=[];
    
    for (let i = 0; i < FnUval.length; i++) {
        let el = FnUval[i].value;
        funcUnit.push(el)    
    }

    //Weight factor chart

    const low = [3, 4, 7, 5, 3];
    const average = [4, 5, 10, 7, 4];
    const high = [6, 7, 15, 10, 6];

    // Calculate UFP
    var UFP = 0;

    // Calculate UFP if weight factor is low

    if( document.getElementById("low").checked === true ){

        //Multiplication of given functional unit(funcUnit[]) and their respective weight factor(low[]) AND storing in mulArr

        const mulArr = [];
        for(let i=0, j=0; i<low.length, j<funcUnit.length; i++, j++){
            let mul = low[i]*funcUnit[j];
            mulArr.push(mul);
        }

        //Adding elements in mulArr[] . Setting UFP for low weight factor

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        UFP = mulArr.reduce(reducer);
    }

    // Calculate UFP if weight factor is average

    else if( document.getElementById("average").checked === true ){

        //Multiplication of given functional unit(funcUnit[]) and their respective weight factor(average[]) AND storing in mulArr

        const mulArr = [];
        for(let i=0, j=0; i<average.length, j<funcUnit.length; i++, j++){
            let mul = average[i]*funcUnit[j];
            mulArr.push(mul);
        }

        //Adding elements in mulArr[] . Setting UFP for average weight factor

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        UFP = mulArr.reduce(reducer);
    }

    // Calculate UFP if weight factor is high

    else if( document.getElementById("high").checked === true ){

        //Multiplication of given functional unit(funcUnit[]) and their respective weight factor(high[]) AND storing in mulArr

        const mulArr = [];
        for(let i=0, j=0; i<high.length, j<funcUnit.length; i++, j++){
            let mul = high[i]*funcUnit[j];
            mulArr.push(mul);
        }

        //Adding elements in mulArr[] . Setting UFP for high weight factor

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        UFP = mulArr.reduce(reducer);
    }

    //Extracted and pushed GSC values to gscArr array

    const gsCval = document.getElementsByClassName("gsc");
    const gscArr=[];
    
    for (let i = 0; i < gsCval.length; i++) {
        let el = gsCval[i].value;
        gscArr.push(parseInt(el))    
    }

    //Sum of GSC given factors

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumGsc = gscArr.reduce(reducer);

    //Calculating Technical complexity factor (TCF)

    const TCF = (0.65 + 0.01 * sumGsc)

    //Calculating Function point

    const FP = UFP * TCF;

    // Rendering values

    document.getElementById('ufp').value = UFP;
    document.getElementById('sumGsc').value = sumGsc;
    document.getElementById('TCF').value = TCF;
    document.getElementById('FP').value = Math.round(FP);           
}
