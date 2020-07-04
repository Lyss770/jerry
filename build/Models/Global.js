"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GlobalModel = new mongoose_1.default.Schema({
    blacklistedPeckGuilds: {
        type: Array,
        default: []
    },
    blacklistedUsers: {
        type: Array,
        default: []
    }
});
module.exports = mongoose_1.default.model("Global DB | Jerry", GlobalModel);
