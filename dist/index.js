"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_service_impl_1 = require("./services/impl/login-service-impl");
const user_memory_repository_1 = require("./repository/impl/user-memory-repository");
const express_1 = __importDefault(require("express"));
const login_controler_1 = require("./controller/login-controler");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
const port = 8080; // default port to listen
const repository = new user_memory_repository_1.UserMemoryRepository();
const loginService = new login_service_impl_1.LoginServiceImpl(repository);
const loginController = new login_controler_1.LoginController(loginService);
loginController.initRoutes(app);
// define a route handler for the default home page
app.get("/", (req, res) => {
    res.json({ message: "Hello world!", success: true }).status(200);
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map