import { 
    toCalendarDateTime,
    DateFormatter,
    parseDate, 
    parseDateTime, 
    parseTime, 
    today
} from '@internationalized/date';
import type { CalendarDate, CalendarDateTime, Time } from '@internationalized/date';

export type DateObject = CalendarDate;
export type DateTimeObject = CalendarDateTime;
export type TimeObject = Time;

const defaultTimezone = 'America/Bogota';

export function createCurrentDateObject(): DateObject {
    return today(defaultTimezone);
}

export function createDateFromString(
    date_string: string,
): DateObject {
    return parseDate(date_string);
}

export function createDateTimeFromString(
    datetime_string: string,
): DateTimeObject {
    return parseDateTime(datetime_string);
}

export function createTimeFromString(
    time_string: string,
): TimeObject {
    return parseTime(time_string)
}

/**
 * create a datetime object from joining a date and time objects
 * @param date Date object
 * @param time Time object
 * @returns DatetimeObject
 */
export function toDatetime(date: DateObject, time: TimeObject){
    return toCalendarDateTime(date, time);
}

/**
 * format date to human readable
 * @param date Date object
 * @returns string
 */
export function formatHumanDate(date: DateObject){
    return new DateFormatter('es-CO', {
        timeZone: defaultTimezone
    }).format(date.toDate(defaultTimezone))
}

/**
 * format a datetime object to human readable (hh:mm a)
 * @param datetime 
 * @returns 
 */
export function formatHumanTime(datetime: DateTimeObject){
    return new DateFormatter('es-CO', {
        hour: 'numeric',
        minute: 'numeric',
        timeZone: defaultTimezone
    }).format(datetime.toDate(defaultTimezone))
}

/**
 * format a datetime object to (HH:mm)
 * @param datetime 
 * @returns 
 */
export function formatTime(datetime: DateTimeObject){
    return new DateFormatter('es-CO', {
        timeStyle: 'short',
        hour12: false
    }).format(datetime.toDate(defaultTimezone))
}

/**
 * returns day difference between two dates
 * @param date_from Date init
 * @param date_to Date end
 * @returns number
 */
export function dayDifference(
    date_from: DateObject | DateTimeObject,
    date_to: DateObject | DateTimeObject,
): number {
    const jsDateFrom = date_from.toDate('UTC');
    const jsDateTo = date_to.toDate('UTC');

    // calculate difference between dates in miliseconds
    const diff = Math.abs(jsDateTo.getTime() - jsDateFrom.getTime())

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * return hour difference between two datetimes or times object
 * @param time_from Datetime or Time init
 * @param time_to Datetime or Time end
 * @returns number
 */
export function hourDifference(
    time_from: TimeObject | DateTimeObject,
    time_to: TimeObject | DateTimeObject,
): number {
    if(isTimeObject(time_from) && isTimeObject(time_to)){
        const diffHours = time_to.hour - time_from.hour;
        const diffMinutes = time_to.minute - time_from.minute;
        const diffSeconds = time_to.second - time_from.second;
        const diffMilliSeconds = time_to.millisecond - time_from.millisecond;

        return Math.abs(
            diffHours + (diffMinutes / 60) + (diffSeconds / 3600) + (diffMilliSeconds / 3600000)
        )
    }
    else if(isDateTimeObject(time_from) && isDateTimeObject(time_to)){
        const jsTimeFrom = time_from.toDate('UTC');
        const jsTimeTo = time_to.toDate('UTC');

        const diff = Math.abs(jsTimeTo.getTime() - jsTimeFrom.getTime())

        return Math.ceil(diff / (100 * 60 * 60));
    }
    else return 0;
}

export function isTimeObject(obj: TimeObject | DateTimeObject): obj is TimeObject {
    return !('toDate' in obj)
}

export function isDateTimeObject(obj: TimeObject | DateTimeObject): obj is DateTimeObject {
    return 'hour' in obj
}

export function isDateObject(obj: any): obj is DateObject {
    return 'toDate' in obj;
}