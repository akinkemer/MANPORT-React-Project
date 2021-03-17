const impact = {
    zero:"ZERO",
    low: "LOW",
    medium: "MEDIUM",
    high: "HIGH",
};
function calculateImpactOrder(data) {
    if (data.impactStatus === impact.high) return 3;
    else if (data.impactStatus === impact.medium) return 2;
    else if (data.impactStatus === impact.low) return 1;
    else return 0;
}
function sortAppsByImpactStatus(data) {
    data.sort((a, b) => {
       return calculateImpactOrder(b) - calculateImpactOrder(a);
    });
}
export default sortAppsByImpactStatus;