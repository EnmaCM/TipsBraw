#! /bin/node
"use strict";

//TipsBraw by EnmaCM



(function () {//Creates a scope thats it unacessible from the outside
  
  let toolTip = document.createElement("div");
  toolTip.classList.add("tooltip");


  for (let tool of document.querySelectorAll("[data-tooltip]")) {
    let newToolTip = toolTip.cloneNode();
    newToolTip.innerHTML = tool.dataset.tooltip;
    tool.appendChild(newToolTip);
  }

  document.body.addEventListener("mouseover", showToolTips);
  document.body.addEventListener("mouseout", hideToolTip);


  function showToolTips(event) {
    if (!event.target.dataset.tooltip) return;
    
    let toolTip = event.target.querySelector(".tooltip");
    let tool = toolTip.parentElement;
    let relPosTool = tool.getBoundingClientRect();

    toolTip.classList.toggle("show");

    //Position the tooltip above it's parent if it doesn get cropped by the top of the window
    if (relPosTool.top - toolTip.offsetHeight - 5 > 0) {
      toolTip.style.top = tool.offsetTop - toolTip.offsetHeight - 5 + "px";
    } else {
      toolTip.style.top = tool.offsetTop + tool.offsetHeight + 5 + "px";
    }

    //Center the tooltip on the x-axis if its less wide than it's parent 
    if (toolTip.offsetWidth < tool.offsetWidth && toolTip.offsetHeight*3 >= tool.offsetWidth) {
      toolTip.style.left = tool.offsetLeft + tool.offsetWidth / 2 - toolTip.offsetWidth / 2 + "px";
    } else {
      toolTip.style.left = tool.offsetLeft + "px";
    }
  }

  function hideToolTip(event) {
    if (!event.target.dataset.tooltip) return;
    let toolTip = event.target.querySelector(".tooltip");
    toolTip.classList.toggle("show");
  }
})();