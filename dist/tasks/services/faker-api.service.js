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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakerApiService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const uuid_1 = require("uuid");
const status_enum_1 = require("../enums/status.enum");
let FakerApiService = class FakerApiService {
    constructor(httpService, configService) {
        this.httpService = httpService;
        this.configService = configService;
    }
    fetch(quantity = 3) {
        return this.httpService.axiosRef.get(this.configService.get('FAKER_API_URL'), {
            params: {
                quantity,
            },
        });
    }
    processTitles(titles) {
        return titles.map((title) => ({
            uuid: (0, uuid_1.v4)(),
            title,
            status: status_enum_1.Status.pending,
        }));
    }
};
FakerApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        config_1.ConfigService])
], FakerApiService);
exports.FakerApiService = FakerApiService;
//# sourceMappingURL=faker-api.service.js.map