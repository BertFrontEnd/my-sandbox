function _createModal(options) {
  const modal = document.createElement('section');
  modal.classList.add('modal');
  modal.insertAdjacentHTML(
    'afterbegin',
    `
      <div class="modal-overlay">
        <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Modal Title</span>
            <span class="modal-close">&times;</span>
          </div>

          <div class="modal-body">
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>

          <div class="modal-footer">
            <button>Ok</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    `,
  );
  document.body.append(modal);
  return modal;
}

$.modal = function (options) {
  const ANIMATION_SPEED = 200;
  const $modal = _createModal(options);
  let closing = false;

  return {
    open() {
      if (!closing) {
        $modal.classList.add('open');
      }
    },
    close() {
      closing = true;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout(() => {
        $modal.classList.remove('hide');
        closing = false;
      }, ANIMATION_SPEED);
    },
    destroy() {},
  };
};
