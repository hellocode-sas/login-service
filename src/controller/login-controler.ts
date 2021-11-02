import { LoginService } from "./../services/login-service";
import { CompleterResult } from "readline";
import * as core from "express-serve-static-core";
export class LoginController {
  private service: LoginService;

  constructor(service: LoginService) {
    this.service = service;
  }

  initRoutes(app: any) {
    app.post("/login", (req: any, res: any) => {
      this.postLogin(req, res);
    });
  }

  private postLogin(req: any, res: any) {
    try {
      const message = { username: req.body.user, password: req.body.password };
      const result = this.service.validateUser(message);
      if (result.success) {
        res.json({ success: true, data: result }).status(200);
      } else {
        res.json({ success: false, message: result.errorMsg }).status(401);
      }
    } catch (e) {
      console.error(e.message, e);
      res.json({ success: false, message: e.message }).status(500);
    }
  }
}
