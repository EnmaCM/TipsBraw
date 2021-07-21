#! /bin/node
"use strict";

//TipsBraw by EnmaCM



(function () {//Creates a scope thats it unacessible from the outside

  let toolTip = document.createElement("div");
  toolTip.classList.add("tooltip");

  //Append a tooltip element to every element that has a data-tooltip.
  //That tool tip will contain the message that data-tooltip has inside.
  for (let tool of document.querySelectorAll("[data-tooltip]")) {
    let newToolTip = toolTip.cloneNode();
    newToolTip.innerHTML = tool.dataset.tooltip;
    tool.appendChild(newToolTip);
  }

  document.body.addEventListener("mouseover", showToolTips);
  document.body.addEventListener("mouseout", hideToolTip);


  function showToolTips(event) {
    let target = event.target;
    if (!event.target.dataset.tooltip) {
      target = hasAncestor("tooltip", event.target, event.currentTarget);
      if (!target) return;
    }
    let toolTip = target.querySelectorAll(".tooltip");

    toolTip = toolTip[toolTip.length - 1];
    toolTip.classList.add("show");

    let newPos = calHintPos(toolTip);

    toolTip.style.top = newPos.y;
    toolTip.style.left = newPos.x;
  }



  function hideToolTip(event) {
    let target = event.target;
    if (!event.target.dataset.tooltip) {
      target = hasAncestor("tooltip", event.target, event.currentTarget);
      if (!target) return;
    }
    let toolTip = target.querySelectorAll(".tooltip");

    toolTip = toolTip[toolTip.length - 1];
    toolTip.classList.remove("show");
  }

  function calHintPos(toolTip) {
    let tool = toolTip.parentElement;
    let relPosTool = tool.getBoundingClientRect();//Position relative to the browser window (not the document)
    let pos = {
      x: null,
      y: null
    };

    //Position the tooltip above it's parent if it doesn get cropped by the top of the window if position there.
    if (relPosTool.top - toolTip.offsetHeight - 5 > 0) {
      pos.y = tool.offsetTop - toolTip.offsetHeight - 5 + "px";
    } else {
      pos.y = tool.offsetTop + tool.offsetHeight + 5 + "px";
    }

    //Center the tooltip on the x-axis if its less wide than it's parent 
    if (toolTip.offsetWidth < tool.offsetWidth && toolTip.offsetHeight * 3 >= tool.offsetWidth) {
      pos.x = tool.offsetLeft + tool.offsetWidth / 2 - toolTip.offsetWidth / 2 + "px";
    } else {
      pos.x = tool.offsetLeft + "px";
    }
    return pos;
  }


  /* hasAncestor will return false if elem doesn't have any ancestor with dataset[dataName]
   otherwise will return that ancestor*/

  function hasAncestor(dataName, elem, parentOfBoth) {
    let parent = elem.parentElement;

    while (parent != parentOfBoth) {
      if (isInvalid(parent)) return false;
      if (parent.dataset[dataName] !== undefined) break;
      parent = parent.parentElement;
    }
    return parent.dataset[dataName] !== undefined ? parent : false;
  }

  function isInvalid(variable) {
    if (variable === null || variable === undefined) return true;
    return false;
  }
})();