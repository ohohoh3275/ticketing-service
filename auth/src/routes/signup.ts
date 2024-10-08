import express, { Request, Response } from "express";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("password 4~20 characters"),
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || typeof email !== "string") {
      res.status(400).send("provide a valid email");
    }
  }
);

export { router as signupRouter };
