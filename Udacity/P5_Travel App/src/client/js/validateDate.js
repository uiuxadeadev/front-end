export function validateDate(tripData){
    const differenceStart = Client.getDiffrenceDateCountFromToday(tripData.startDate);
    const differenceEnd = Client.getDiffrenceDateCountFromToday(tripData.endDate);

    if(differenceStart < 0 || differenceEnd < 0){
        alert('Don\'t choose the past date');
        return false;
    }
    return true;
};