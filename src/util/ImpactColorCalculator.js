const impact = {
    zero:"ZERO",
    low: "LOW",
    medium: "MEDIUM",
    high: "HIGH",
};
function findHighestImpactColor(component){
    return component.reduce((result, current) => {
        const status = current.impactStatus;
        if (status === impact.high) {
            return impact.high;
        } else if (status === impact.medium && result !== impact.high) {
            return impact.medium;
        } else if (
            status === impact.low &&
            result !== impact.high &&
            result !== impact.medium
        ) {
            return impact.low;
        }
        else if(status === impact.zero &&
            result !== impact.high &&
            result !== impact.medium &&
            result !== impact.low) {
            return impact.zero;
            }
        return result;
    });
}
function calculateCountryImpactColor(country) {

    country.productions.map((production) => {
        const productionImpactResult = findHighestImpactColor(production.jobs);
        production.impactStatus = productionImpactResult;
        return null;
    });

    const countryImpactResult = findHighestImpactColor(country.productions);
    country.impactStatus = countryImpactResult;

};
function calculateAppImpactColor (app){
    app.countries.map((country) => {
        calculateCountryImpactColor(country);
        return null;
    });
    const appImpactResult = findHighestImpactColor(app.countries);
    app.impactStatus = appImpactResult;
};
function calculateImpactColor(apps){
    apps.map((app) => {
        calculateAppImpactColor(app);
        return null;
    });
};
export default calculateImpactColor;
