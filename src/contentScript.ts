import { changeReplacements, findAndReplaceText } from './utils';

(async () => {
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.replacement) changeReplacements(changes.replacement.newValue);
  });
  window.addEventListener('load', () => findAndReplaceText(document.body));

  const observer = new MutationObserver((mutations) => {
    mutations.forEach(({ type, target }) => {
      if (type === 'childList') findAndReplaceText(target as HTMLElement);
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
