import { BULLSHIT_MARKERS, CAT_FACTS, REPLACEMENT_MAP } from './constants';

export const getActiveTabs = function (): Promise<chrome.tabs.Tab[]> {
	return new Promise(function (resolve) {
		chrome.tabs.query({
			currentWindow: true,
		}, resolve);
	});
};

const randomCatFact = (): string => {
	return CAT_FACTS[Math.floor(Math.random() * (CAT_FACTS.length - 1))];
};

const getReplacementText = (variant: number): string => {
	if (+variant === 3) return  randomCatFact();
	else return REPLACEMENT_MAP[variant];
}

const createReplacementElement = (variant: number): HTMLElement => {
	const el = document.createElement('span');
	el.className = 'inoagent-replacement';
	el.innerHTML = getReplacementText(variant);
	return el;
};

const purifyText = (text: string): string => text.replace(/[^a-zA-Zа-яА-Я]/g, '').toLowerCase();

const fetchOptions = async (): Promise<number> => {
	return new Promise((resolve) => {
		chrome.storage.sync.get('replacement', (options) => {
			resolve(options?.replacement || 2);
		});
	});
};

export const findAndReplaceText = async (element: HTMLElement): Promise<void> => {
	const option = await fetchOptions();
	let elements = element.getElementsByTagName('*');

	for(let i = 0; i < elements.length; i++) {
		let childNodes = elements[i].childNodes;

		for(let j = 0; j < childNodes.length; j++) {
			if(childNodes[j].nodeType === 3) {
				const textContent = purifyText(childNodes[j].textContent || '');
				let bullshitCounter = 0;
				BULLSHIT_MARKERS.forEach((marker) => {
					if(textContent.includes(marker)) {
						bullshitCounter++;
					}
				});

				if(bullshitCounter) {
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
}