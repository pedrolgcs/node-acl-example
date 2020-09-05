import jwt from "jsonwebtoken";
import * as Yup from "yup";

import authConfig from "../../config/auth";

class SessionController {
  async create(request, response) {
    // basic validation
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      role: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: "Validation fails" });
    }

    // body
    const { email, role } = request.body;

    // jwt configs
    const { secret, expiresIn } = authConfig.jtw;

    return response.status(200).json({
      user: { email },
      token: jwt.sign({ role }, secret, {
        subject: email,
        expiresIn,
      }),
    });
  }
}

export default SessionController;
