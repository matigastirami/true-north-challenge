"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TasksController_1, _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const faker_api_service_1 = require("./services/faker-api.service");
const uuid_1 = require("uuid");
let TasksController = TasksController_1 = class TasksController {
    constructor(fakerApiService) {
        this.fakerApiService = fakerApiService;
        this.logger = new common_1.Logger(TasksController_1.name);
    }
    async fetchTitlesAndUpsert(quantity) {
        try {
            const fetchTasksResponse = await this.fakerApiService.fetch(quantity);
            if (!fetchTasksResponse ||
                ![200, 201].includes(fetchTasksResponse.status)) {
                this.logger.error('Could not fetch faker API');
                throw new common_1.HttpException('Could not fetch faker API', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            this.logger.log('Task titles successfully fetched from Faker API');
            const tasks = this.fakerApiService.processTitles(fetchTasksResponse.data);
            return tasks;
        }
        catch (err) {
            throw err;
        }
    }
    async completeTask(uuid) {
        if (!(0, uuid_1.validate)(uuid)) {
            throw new common_1.HttpException('Invalid UUID', common_1.HttpStatus.BAD_REQUEST);
        }
        const msg = `Task status for uuid ${uuid} sucessfully updated`;
        this.logger.log(msg);
        return {
            msg,
        };
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_a = typeof Promise !== "undefined" && Promise) === "function" ? _a : Object)
], TasksController.prototype, "fetchTitlesAndUpsert", null);
__decorate([
    (0, common_1.Put)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "completeTask", null);
TasksController = TasksController_1 = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [faker_api_service_1.FakerApiService])
], TasksController);
exports.TasksController = TasksController;
//# sourceMappingURL=tasks.controller.js.map