
export default class TaskService {

    private static readonly TASKS_API_URL = 'http://localhost:3000'

    static fetchTasks(quantity?: number) {
        const url = new URL(`${TaskService.TASKS_API_URL}/tasks`);

        if (quantity) {
            url.searchParams.append('quantity', String(quantity));
        }

        return fetch(url);
    }

    static completeTask(uuid: string) {
        return fetch(`${TaskService.TASKS_API_URL}/tasks/${uuid}`, { method: 'PUT' });
    }
}