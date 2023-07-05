import { BULLSHIT_MARKERS, REPLACEMENTS } from './constants';

const getReplacementText = (variant: number): string => {
  const { value } = REPLACEMENTS[variant];
  if (typeof value === 'string') return value;
  return value[Math.floor(Math.random() * (value.length - 1))];
};

const createReplacementElement = (variant: number): HTMLElement => {
  const el = document.createElement('span');
  el.className = 'inoagent-replacement';
  el.innerHTML = getReplacementText(variant);
  return el;
};

const purifyText = (text: string): string => text.replace(/[^a-zA-Zа-яА-Я]/g, '').toLowerCase();

const fetchOptions = async (): Promise<number> => new Promise((resolve) => {
  chrome.storage.sync.get('replacement', (options) => {
    resolve(options?.replacement || 2);
  });
});

export const findAndReplaceText = async (
  element: HTMLElement,
): Promise<void> => {
  const option = await fetchOptions();
  const elements = element.getElementsByTagName('*');

  for (let i = 0; i < elements.length; i++) {
    const { childNodes } = elements[i];

    for (let j = 0; j < childNodes.length; j++) {
      if (childNodes[j].nodeType === 3) {
        const textContent = purifyText(childNodes[j].textContent || '');
        let bullshitCounter = 0;
        BULLSHIT_MARKERS.forEach((marker) => {
          if (textContent.includes(marker)) {
            bullshitCounter++;
          }
        });

        if (bullshitCounter) {
          childNodes[j].textContent = '';
          childNodes[j].after(createReplacementElement(option));
        }
      }
    }
  }
};

export const changeReplacements = (variant: number): void => {
  document.querySelectorAll('.inoagent-replacement').forEach((el: Element) => {
    el.innerHTML = getReplacementText(variant);
  });
};
