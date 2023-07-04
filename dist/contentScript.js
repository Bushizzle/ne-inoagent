import { _ as __awaiter, a as __generator, c as changeReplacements, f as findAndReplaceText } from './chunks/utils-9a5d217a.js';

(function () { return __awaiter(void 0, void 0, void 0, function () {
    var observer;
    return __generator(this, function (_a) {
        chrome.runtime.onMessage.addListener(function (obj) { return __awaiter(void 0, void 0, void 0, function () {
            var type, value;
            return __generator(this, function (_a) {
                type = obj.type, value = obj.value;
                if (type === 'OPTIONS') {
                    void chrome.storage.sync.set({ replacement: value });
                    changeReplacements(value);
                }
                return [2 /*return*/];
            });
        }); });
        window.addEventListener('load', function () { return findAndReplaceText(document.body); });
        observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (_a) {
                var type = _a.type, target = _a.target;
                if (type === 'childList')
                    findAndReplaceText(target);
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
        return [2 /*return*/];
    });
}); })();
