export function remainingDate(startDate){
    const currentDate = new Date();
    const departureDate = new Date(startDate);

    let difference = Math.round((departureDate.getTime() - currentDate.getTime()) / ( 1000 * 60 * 60 * 24));
    let s = difference === 1 ? '' : 's';

    return `${difference} day${s} left to your trip`;
};