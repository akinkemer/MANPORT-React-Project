function convertToColor(impact) {
    if (impact === 'HIGH') return "danger";
    else if (impact === 'MEDIUM') return "orange"
    else if (impact === 'LOW') return "yellow";
    else return "success";
}
export default convertToColor;