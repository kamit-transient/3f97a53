export function formatDate(dateStr) {
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let date = new Date(dateStr);
    return `${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`

}