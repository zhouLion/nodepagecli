"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const expressStatic = (rootPath) => express_1.default.static(path_1.default.join(process.cwd(), rootPath), {
    index: ['index.html', 'index.htm', 'default.html', 'default.htm']
});
function default_1(port = 3000) {
    const app = express_1.default();
    app.use((req, _res, nextTick) => {
        console.log(req.path);
        console.log('req.headers: ', req.headers);
        nextTick();
    });
    app.use('/mirrors', expressStatic('.static'));
    app.listen(port, () => {
        console.log('程序启动成功:', `http://localhost:${port}`);
    });
    app.on('error', (a) => {
    });
    return app;
}
exports.default = default_1;
//# sourceMappingURL=start.js.map