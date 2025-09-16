const localeStr = "en-UK";
const locale = Intl.getCanonicalLocales(localeStr)[0];

export const formatArticleDate = (date: Date) => {
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
};
