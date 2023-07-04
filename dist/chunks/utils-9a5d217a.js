/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var BULLSHIT_MARKERS = [
    'данноесообщениематериал',
    'распространеноиностраннымсредствоммассовойинформациивыполняющимфункциииностранногоагента',
    'российскимюридическимлицомвыполняющимфункциииностранногоагента',
    'настоящийматериалинформацияпроизведенираспространениностраннымагентом',
    'настоящийматериалинформацияпроизведениностраннымагентом',
    'настоящийматериалинформацияпроизведен',
];
var REPLACEMENT_MAP;
(function (REPLACEMENT_MAP) {
    REPLACEMENT_MAP[REPLACEMENT_MAP[""] = 0] = "";
    REPLACEMENT_MAP[REPLACEMENT_MAP["\u041F\u0443\u0442\u0438\u043D - \u0445\u0443\u0439\u043B\u043E"] = 1] = "\u041F\u0443\u0442\u0438\u043D - \u0445\u0443\u0439\u043B\u043E";
    REPLACEMENT_MAP[REPLACEMENT_MAP["<a href=\"https://war.ukraine.ua/support-ukraine/\" target=\"_blank\">\u041F\u043E\u043C\u043E\u0447\u044C \u0423\u043A\u0440\u0430\u0438\u043D\u0435</a>"] = 2] = "<a href=\"https://war.ukraine.ua/support-ukraine/\" target=\"_blank\">\u041F\u043E\u043C\u043E\u0447\u044C \u0423\u043A\u0440\u0430\u0438\u043D\u0435</a>";
})(REPLACEMENT_MAP || (REPLACEMENT_MAP = {}));
var CAT_FACTS = [
    "Кошки проводят 70% своей жизни, спя.",
    "У кошек есть более 20 мышечных усов, расположенных в 3 рядах на каждой стороне морды.",
    "Кошки не чувствуют сладкий вкус.",
    "Кошки способны делать около 100 разных звуков.",
    "Вибриссы (усы) кошки помогают ей определять расстояние и форму предметов в темноте.",
    "Домашние кошки бегают со скоростью до 30 километров в час.",
    "Кошки умеют прыгать в высоту в 5 раз превышающую их рост.",
    "Кошки пьют воду, прикоснувшись к ней языком, а не забирая ее в рот.",
    "Сердце кошки бьется в два раза быстрее человеческого - от 110 до 140 ударов в минуту.",
    "Домашние кошки появились в Древнем Египте около 4 000 лет назад.",
    "Кошки могут переворачиваться в воздухе при падении с высоты.",
    "ДНК кошки на 90% совпадает с человеческой.",
    "Кошки обладают острым ночным зрением и могут видеть при уровне освещенности в 6 раз меньше, чем человек.",
    "Кошки могут отлично слышать высокие частоты, которые недоступны человеческому уху.",
    "Кошки воспринимают человека как другую кошку. Они общаются с нами так, как они обычно общаются с другими кошками.",
    "Кошки имеют уникальный отпечаток носа, как у людей отпечаток пальца.",
    "Кошки могут производить звук, который помогает отпугивать крыс и мышей.",
    "У кошек есть специальные гланды на лбу, щеках и под хвостом, которыми они метят свою территорию.",
    "Домашние кошки могут быть тренированы выполнять различные трюки."
];

var getActiveTabs = function () {
    return new Promise(function (resolve) {
        chrome.tabs.query({
            currentWindow: true,
        }, resolve);
    });
};
var randomCatFact = function () {
    return CAT_FACTS[Math.floor(Math.random() * (CAT_FACTS.length - 1))];
};
var getReplacementText = function (variant) {
    if (+variant === 3)
        return randomCatFact();
    else
        return REPLACEMENT_MAP[variant];
};
var createReplacementElement = function (variant) {
    var el = document.createElement('span');
    el.className = 'inoagent-replacement';
    el.innerHTML = getReplacementText(variant);
    return el;
};
var purifyText = function (text) { return text.replace(/[^a-zA-Zа-яА-Я]/g, '').toLowerCase(); };
var fetchOptions = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) {
                chrome.storage.sync.get('replacement', function (options) {
                    resolve((options === null || options === void 0 ? void 0 : options.replacement) || 2);
                });
            })];
    });
}); };
var findAndReplaceText = function (element) { return __awaiter(void 0, void 0, void 0, function () {
    var option, elements, i, childNodes, _loop_1, j;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchOptions()];
            case 1:
                option = _a.sent();
                elements = element.getElementsByTagName('*');
                for (i = 0; i < elements.length; i++) {
                    childNodes = elements[i].childNodes;
                    _loop_1 = function (j) {
                        if (childNodes[j].nodeType === 3) {
                            var textContent_1 = purifyText(childNodes[j].textContent || '');
                            var bullshitCounter_1 = 0;
                            BULLSHIT_MARKERS.forEach(function (marker) {
                                if (textContent_1.includes(marker)) {
                                    bullshitCounter_1++;
                                }
                            });
                            if (bullshitCounter_1) {
                                childNodes[j].textContent = '';
                                childNodes[j].after(createReplacementElement(option));
                            }
                        }
                    };
                    for (j = 0; j < childNodes.length; j++) {
                        _loop_1(j);
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
var changeReplacements = function (variant) {
    document.querySelectorAll('.inoagent-replacement').forEach(function (el) {
        el.innerHTML = getReplacementText(variant);
    });
};

export { __awaiter as _, __generator as a, changeReplacements as c, findAndReplaceText as f, getActiveTabs as g };
