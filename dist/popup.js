import { _ as __awaiter, a as __generator, g as getActiveTabs } from './chunks/utils-9a5d217a.js';

document.addEventListener("DOMContentLoaded", function () { return __awaiter(void 0, void 0, void 0, function () {
    var optionsElement, options;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                optionsElement = document.getElementById('inoagent-options');
                return [4 /*yield*/, new Promise(function (resolve) {
                        chrome.storage.sync.get('replacement', resolve);
                    })];
            case 1:
                options = _a.sent();
                if (options === null || options === void 0 ? void 0 : options.replacement) {
                    optionsElement.value = options.replacement;
                }
                optionsElement.addEventListener('change', function () { return __awaiter(void 0, void 0, void 0, function () {
                    var tabs;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, getActiveTabs()];
                            case 1:
                                tabs = _a.sent();
                                tabs.forEach(function (tab) {
                                    if (tab.id !== undefined) {
                                        chrome.tabs.sendMessage(tab.id, {
                                            type: 'OPTIONS',
                                            value: optionsElement.value,
                                        });
                                    }
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
        }
    });
}); });
