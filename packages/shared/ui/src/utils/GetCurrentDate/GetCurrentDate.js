const newDate = new Date();
const monthName = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'];

export const GetCurrentTime = () => {
    const hour = newDate.getHours();
    const minute = newDate.getMinutes();

    return `${hour < 10 ? `0${hour}` : `${hour}`}:${minute < 10 ? `0${minute}` : `${minute}`}`;
};

export const GetCurrentDate = () => {
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();

    return `${date < 10 ? `0${date}` : `${date}`}.${monthName[month]}.${year}`;
};
export default GetCurrentDate;
