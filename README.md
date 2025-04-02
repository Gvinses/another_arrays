<h2>version: 1.2.4</h2>

<h1>another_arrays is library for better already created Methdos for JavaScripts Arrays and it adds typed arrays</h1>

<h2>Install:</h2>
<ol>
    <li>npm i another_arrays</li>
    <li>const typeArray = require('another_arrays/arrayClass.js')</li>
    <li>const array_methods = require('another_arrays/arrayMethods.js')</li>
    <li><i>optional:</i> you can view file preview.js to see an examples</li>
</ol>
<hr>
<h2>Methods:</h2>
<ul>
<li><h3>arr.Sum()</h3>  all array elements are summed up. (don't works with matrix) (attribute: is array Sum number
aliquot on attribute number (if Sum % number) return: true/false)</li>
<li><h3>arr.Diff()</h3>  all array elements are difference up. (don't works with matrix) (attribute: is array Diff
number aliquot on attribute number (if Diff % number) return: true/false</li>
<li><h3>arr.Modify()</h3>  all array elements are Modify up. (don't works with matrix) (attribute: is array Modify
number aliquot on attribute number (if Modify % number) return: true/false</li>
<li><h3>arr.Division()</h3>  all array elements are division up. (don't works with matrix) (attribute: is array Division
number aliquot on attribute number (if Division % number) return: true/false</li>
<li><h3>arr.AllLength()</h3>  get all length of array and matrix (works woth matrix)</li>
<li><h3>arr.RotateLeft90(1)</h3>  rotates matrix on 90 deg to left [[1,2,3],[4,5,6],[7,8,9]]
to [[3,6,9],[2,5,8],[1,4,7]] (works with matrix) (attribute: null: don't rotate; 1: to 90 deg to left; 2: to 180 deg to
left; 3: to 270 deg to left)</li>
</ul>

<hr>
    <h2>Array:</h2>
<ul>
    <li><h3>let arr = new typeArray()</h3>  typed array decloration. (attribute: 1) array 2) type of array (type, which agree for every array element))</li>
    <li><h3>arr.add_e()</h3>  push element to typed array. (attribute: element to push)</li>
    <li><h3>arr.change_e()</h3>  change element a to element b. (attribute: 1) element a 2) element b 3) safe_error (true/false) -> return Error if false and -1 if true</li>
    <li><h3>arr.delete_e()</h3>  delete element from array. (attribute: 1) element to delete 2) safe_error (true/false) -> return Error if false and -1 if true</li>
    <li><h3>arr.val_i()</h3>  get value by index (attribute: index)</li>
</ul>



