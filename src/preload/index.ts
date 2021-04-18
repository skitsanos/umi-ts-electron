import {contextBridge} from 'electron';

const apiKey = 'electron';

const api: any = {
    versions: process.versions
};

contextBridge.exposeInMainWorld(apiKey, api);


window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector: string, text: string | undefined) => {
        const element = document.getElementById(selector);
        if (element) element.innerText = text as string;
    };

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type]);
    }
});