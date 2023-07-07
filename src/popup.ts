import { REPLACEMENTS } from './constants';

document.addEventListener('DOMContentLoaded', async () => {
  const optionsElement = document.getElementById(
    'inoagent-options',
  ) as HTMLInputElement;

  REPLACEMENTS.forEach(({ title }, index) => {
    const optionElement = document.createElement('option');
    optionElement.value = index.toString();
    optionElement.innerHTML = title;
    optionsElement.appendChild(optionElement);
  });

  const options: { replacement?: string } = await new Promise((resolve) => {
    chrome.storage.sync.get('replacement', resolve);
  });

  if (options?.replacement) {
    optionsElement.value = options.replacement;
  }

  optionsElement.addEventListener('change', async () => {
    chrome.storage.sync.set({ replacement: optionsElement.value });
  });
});
