const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
]
const months=[
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Ноя',
    'Дек'
];

export function getCityCurrentDate(timezone) {
    let date = new Date(Date.now() + timezone * 1000 + new Date().getTimezoneOffset() * 60000);

    return `${date.getHours()} : ${date.getMinutes()} -  ${daysOfWeek[date.getDay()]},  ${date.getDate()} ${months[date.getMonth()]}`
}

