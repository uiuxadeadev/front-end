export function validateDate(tripData){
    const currentDate = new Date();
    const startDate = new Date(tripData.startDate);
    const endDate = new Date(tripData.endDate);
    let differenceStart = Math.round((startDate.getTime() - currentDate.getTime()) / ( 1000 * 60 * 60 * 24));
    let differenceEnd = Math.round((endDate.getTime() - currentDate.getTime()) / ( 1000 * 60 * 60 * 24));

    if(differenceStart < 0 || differenceEnd < 0){
        alert('Don\'t choose the past date');
        return false;
    }
};