"use strict";
/// <reference path='./dexie.d.ts' />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const html = document.querySelector('html');
html.setAttribute('class', 'red');
const dexie = new Dexie.Dexie('temp');
dexie.version(1).stores({ settings: 'setting,value' });
const settings = dexie.table('settings');
(() => __awaiter(this, void 0, void 0, function* () {
    const theme = yield settings.get('theme');
    if (theme)
        html.setAttribute('class', theme.value);
}))();
//# sourceMappingURL=head.js.map