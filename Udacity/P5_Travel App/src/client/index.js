import { setSubmit } from './js/setSubmit'
import { remainingDate } from './js/remainingDate'
import { postTripData } from './js/postTripData'
import { validateDate } from './js/validateDate'
import { updateUI } from './js/updateUI'
import { remove } from './js/remove'
import { getDiffrenceDateCountFromToday } from './js/dateUtility'


import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/result.scss'
import './styles/main.scss'
import './styles/form.scss'
import './styles/header.scss'

export {
    setSubmit,
    remainingDate,
    postTripData,
    validateDate,
    updateUI,
    remove,
    getDiffrenceDateCountFromToday
}

setSubmit();
remove();