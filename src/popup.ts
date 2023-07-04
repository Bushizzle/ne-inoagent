import { getActiveTabs } from './utils';

document.addEventListener("DOMContentLoaded", async () => {
	const optionsElement = document.getElementById('inoagent-options') as HTMLInputElement;
	const options: { replacement?: string } = await new Promise((resolve) => {
		chrome.storage.sync.get('replacement', resolve);
	});

	if(options?.replacement) {
		optionsElement.value = options.replacement;
	}

	optionsElement.addEventListener('change', async () => {
		const tabs = await getActiveTabs();
		tabs.forEach((tab: chrome.tabs.Tab) => {
			if(tab.id !== undefined){
				chrome.tabs.sendMessage(tab.id, {
					type: 'OPTIONS',
					value: optionsElement.value,
				});
			}
		});
	});
});
