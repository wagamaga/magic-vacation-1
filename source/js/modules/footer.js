export default () => {
  let footerTogglers = document.querySelectorAll(`.js-footer-toggler`);

  window.addEventListener(`load`, () => {
    let footer2 = document.querySelectorAll(`.js-footer`)[0];
    footer2.classList.add(`visible`);
  });

  if (footerTogglers.length) {
    for (let i = 0; i < footerTogglers.length; i++) {
      footerTogglers[i].addEventListener(`click`, function () {
        let footer = footerTogglers[i].parentNode;
        if (footer.classList.contains(`screen__footer--full`)) {
          footer.classList.remove(`screen__footer--full`);
        } else {
          footer.classList.add(`screen__footer--full`);
        }
      });
    }
  }
};
