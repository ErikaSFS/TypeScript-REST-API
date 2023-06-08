"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apis_1 = __importDefault(require("../controllers/apis"));
const router = express_1.default.Router();
router.get('/api', async (req, res) => {
    const apiController = new apis_1.default();
    const response = await apiController.getMessage();
    return res.send(response);
});
exports.default = router;
