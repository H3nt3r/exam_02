
export default function showInfo(cont) {
    var allData = cont.split('\n');

    //task 1
    var countRow = allData.length - 2;

    console.log("Count: " + countRow);

    //task 2
    var categ = [];
    var res = [];
    var arr_ind = 0;
    for(var i=1; i<allData.length - 1; i++){
        categ[i] = allData[i].split(",");
        //console.log(i+": " + categ[i][1]);
        if(CheckElemInArray(categ[i][1], res) == false) {
            res[arr_ind] = categ[i][1];
            arr_ind++;
        }
    }

    var str = "Categories: ";
    for(var i=0; i<arr_ind; i++) {
        str += res[i];
        if(i != (arr_ind-1)) {
            str += ", ";
        }
    }

    console.log(str);

    //task 3
    
    var all_sum = 0;
    for(var i=1; i<categ.length; i++) {
        all_sum += parseFloat(categ[i][4]);
    }

    console.log("Average price: " + Math.round(all_sum / countRow));

    //task 4
    var min_ind = -1;
    var max_ind = -1;
    var min_zn = 1000000;
    var max_zn = 0;
    for(var i=1; i<categ.length; i++) {
        if(parseInt(categ[i][3]) < min_zn) {
            min_zn = parseInt(categ[i][3]);
            min_ind = i;
        }
        if(parseInt(categ[i][3]) > max_zn) {
            max_zn = parseInt(categ[i][3]);
            max_ind = i;
        }
    }

    console.log("Calories: min - " + categ[min_ind][0] + ", max - " + categ[max_ind][0]);

    //task 5
    var costs = [];
    var minCost = 100000;
    var minInd = -1;
    for(var i=1; i<categ.length; i++) {
        costs[i] = parseFloat(categ[i][4]) / parseInt(categ[i][2]);
        if(costs[i] < minCost) {
            minCost = costs[i];
            minInd = i;
        }
    }

    console.log("Most profitable dish: " + categ[minInd][0]);
}

function CheckElemInArray(str, arr){
    for(var i=0; i<arr.length; i++) {
        if(str == arr[i]) {
            return true;
        }
    }
    return false;
}