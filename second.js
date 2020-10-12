'use strict';

(() => {
  const title = document.querySelector(`h1`);

  const getComputed = () => {
    return `${title.offsetHeight} ${window.first.getWidth()}`;
  };

  window.second = {
    getComputed,
  };
})();
