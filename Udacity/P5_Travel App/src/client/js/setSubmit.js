export function setSubmit(){
    // const form = document.getElementsByTagName('form')[0];
    const form = document.getElementById('form');
    //async and await
    // No need to name them because they won't be reused. So use arrow function
    form.addEventListener('submit', async e => {
        e.preventDefault();
        const tripCity = document.getElementById('where').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        const tripData = {
            city: tripCity,
            startDate: startDate,
            endDate: endDate
        }

        const resultValidation = Client.validateDate(tripData);
        // if (!resultValidation) { Why can't I write like this?
        if (resultValidation == false) {
            return;
        }

        const resultInput = await Client.postTripData(tripData);
        Client.updateUI(resultInput);
    });
}