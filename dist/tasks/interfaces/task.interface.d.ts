import { Status } from '../enums/status.enum';
export interface ITask {
    uuid: string;
    title: string;
    status: Status;
}
