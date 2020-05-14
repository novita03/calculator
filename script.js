const view = (val) => {
  return document.getElementById("show").value += val;
};

const clean = function () {
  return document.getElementById("show").value ="0";
}

const backspace= function() {
  var val = document.getElementById("show").value;
  return document.getElementById("show").value = val.substring(0,val.length - 1);
}

const result = function () {
  var val = document.getElementById("show").value;
  if (val) {
    return document.getElementById("show").value = eval(val);
  }
}