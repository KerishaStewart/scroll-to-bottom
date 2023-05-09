window.addEventListener("load", (event) => {
  var output = document.getElementById("output");
  var count = 0;
  var add = setInterval(function () {
    // allow 1px inaccuracy by adding 1
    var isScrolledToBottom =
      output.scrollHeight - output.clientHeight <= output.scrollTop + 1;
    console.log(
      output.scrollHeight - output.clientHeight,
      output.scrollTop + 1
    );
    var newElement = document.createElement("div");
    newElement.innerHTML = count++;
    output.appendChild(newElement);
    // scroll to bottom if isScrolledToBottom
    if (isScrolledToBottom)
      output.scrollTop = output.scrollHeight - output.clientHeight;

    if (count >= 30) {
      clearInterval(add);
    }
  }, 1000);
});
