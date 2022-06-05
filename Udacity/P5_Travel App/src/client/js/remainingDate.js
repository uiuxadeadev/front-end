export function remainingDate(startDate){
    const difference = Client.getDiffrenceDateCountFromToday(startDate);
    const s = difference === 1 ? '' : 's';

    return `${difference} day${s} left to your trip`;
};