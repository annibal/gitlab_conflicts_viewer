import i18next from "i18next";
import LngDetector from "i18next-browser-languagedetector";
import backend from "i18next-xhr-backend";
import * as r18 from "react-i18next";

console.log(r18)

const lngDetector = new LngDetector(null, {
    // order and from where user language should be detected
    order: ['querystring', 'localStorage', 'navigator'],

    // keys or params to lookup language from
    lookupQuerystring: 'lng',
    lookupLocalStorage: 'i18nextLng',

    // cache user language on
    caches: ['localStorage'],
})

// translations are already at
// '../public/locales/en/translation.json'
// which is the default for the xhr backend to load from

i18next.use(lngDetector)
    .use(backend)
    // .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        fallbackLng: "en", // use en if detected lng is not available

        // keySeparator: true,

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


// export const t = i18n.t;
export const getLng = () => i18next.language || i18next.fallbackLng
export default i18next;