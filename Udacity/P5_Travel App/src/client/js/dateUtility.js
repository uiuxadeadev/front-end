// YYYY_MM_DD is for date. ex  startDate: '2022-06-08'
// https://day.js.org/docs/en/display/format
export function getDiffrenceDateCountFromToday(YYYY_MM_DD){
    const today = new Date();
    const compareDate = new Date(yyyy_MM_dd);
    return Math.round((compareDate.getTime() - today.getTime()) / ( 1000 * 60 * 60 * 24));
}