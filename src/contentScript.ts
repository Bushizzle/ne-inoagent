import { changeReplacements, findAndReplaceText } from './utils'

(async () => {
    chrome.runtime.onMessage.addListener(async (obj: any) => {
        const { type, value } = obj;

        if (type === 'OPTIONS') {
            void chrome.storage.sync.set({ replacement: value });
            changeReplacements(value);
        }
    });
    window.addEventListener('load', () => findAndReplaceText(document.body));

    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function({ type, target }) {
            if (type === 'childList') findAndReplaceText(target as HTMLElement);
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
