export default {
    getDay(i) {
        var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        return day[i - 1]
    },
    getMonth(i) {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        return month[i - 1]
    },
    getFormatTime(date) {
        return this.getMonth(date.getMonth()) + " " + date.getDate() + ", " + date.getFullYear() + " at " + this.getSession(date)
    },
    getSession(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
}