export interface ITaskProps {
  taskInfo: {
    uuid: string;
    title: string;
    status: string;
  };
}

export interface ITaskListProps {
  tasks: any;
}

export interface ITaskViewProps {
  show: boolean;
  task: any;
  onClose: any;
}