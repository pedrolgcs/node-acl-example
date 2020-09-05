import jwt from "jsonwebtoken";
import { promisify } from "util";
import authConfig from "../../config/auth";

export default async (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.jtw.secret);
    const { sub, role } = decoded;

    request.user = {
      email: sub,
      role,
    };

    return next();
  } catch (error) {
    return response.status(401).json({ error: "Token invalid" });
  }
};
