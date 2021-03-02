"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var i18next_1 = __importDefault(require("i18next"));
i18next_1.default.init({
    lng: 'en',
    debug: true,
    resources: {
        es: {
            translation: {
                "key": "hola mundo"
            }
        },
        en: {
            translation: {
                "key": "hello world"
            }
        }
    }
}).then(function () {
    console.log(i18next_1.default.t('key'));
});
i18next_1.default.changeLanguage('es', function (err, t) {
    if (err)
        return console.log("error");
    t('key');
});
