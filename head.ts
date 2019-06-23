/// <reference path='./dexie.d.ts' />

const html = document.querySelector('html') as HTMLHtmlElement
html.setAttribute('class', 'red')

const dexie = new Dexie.Dexie('temp')
dexie.version(1).stores({ settings: 'setting,value' })
const settings: Dexie.Table<{ setting: string, value: any }> = dexie.table('settings')
    ; (async () => {
        const theme = await settings.get('theme')
        if (theme) html.setAttribute('class', theme.value)
    })()
