Array.prototype.Sum = function(ali) {
    let reduce = this.reduce((acc, curr) => acc + curr);
    if (ali !== undefined) {
        return reduce % ali === 0;
    } else {
        return reduce
    }
};

Array.prototype.Diff = function(ali) {
    let reduce = this.reduce((acc, curr) => acc - curr);
    if (ali !== undefined) {
        return reduce % ali === 0;
    } else {
        return reduce
    }
};

Array.prototype.Modify = function(ali) {
    let reduce = this.reduce((acc, curr) => acc * curr);
    if (ali !== undefined) {
        return reduce % ali === 0;
    } else {
        return reduce
    }
};

Array.prototype.Division = function(ali) {
    let reduce = this.reduce((acc, curr) => acc / curr);
    if (ali !== undefined) {
        return reduce % ali === 0;
    } else {
        return reduce
    }
};
Array.prototype.AllLength = function() {
    let count = 0;

    function countElements(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                countElements(arr[i]);
            } else {
                count++;
            }
        }
    }

    countElements(this);
    return count;
};

Array.prototype.RotateLeft90 = function(times) {
    if (times < 1 || times > 3) {
        throw new Error();
    }

    let result = this;

    for (let t = 0; t < times; t++) {
        let newResult = [];
        let rows = result.length;
        let cols = result[0].length;

        for (let i = cols - 1; i >= 0; i--) {
            let newRow = [];
            for (let j = 0; j < rows; j++) {
                newRow.push(result[j][i]);
            }
            newResult.push(newRow);
        }

        result = newResult;
    }

    return result;
};
