import { type ReservationApiStatus } from "#imports";

export default interface RecordReservationApiData extends Response {
  reserveCode: string;
  reservationStatus: ReservationApiStatus;
}
