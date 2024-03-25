/**
 * Adds a shadow behind a given class.
 * @param {String} class_name Name of class to apply effect to
 * @return nothing, sets shadow behind element as side effect
 */
function addShadow(class_name) {
  document.getElementsByClassName(class_name).style.color='red';
}

// /**
//  * Changes the color of the given text element
//  * @param {*} class_name Name of class to modify
//  * @param {*} new_color New color to apply to class
//  * @return nothing, modifies class color as side effect
//  */
// function changeColor(class_name, new_color) {
//   document.getElementsByClassName(class_name).style.color=new_color;
// }

function changeColor(element_name) {
  document.getElementsById(element_name).style.textcolor=black;
}