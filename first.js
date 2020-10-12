'use strict';

(() => {
  const paragraph = document.querySelector(`p`);
  
  const getWidth = () => {
    paragraph.offsetWidth;
  };

  const consoleLogResult = () => {
    console.log(window.second.getComputed());
  };

  window.first = {
    getWidth,
    consoleLogResult
  };
})();