export function createCloseButton(onClose) {
  const button = document.createElement('button');
  button.className = 'close-button';
  button.innerHTML = '×';
  button.setAttribute('aria-label', 'Close');
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  });
  return button;
}