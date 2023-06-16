import { Request, Response } from 'express';
import { RequestHandler } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import httpStatus from 'http-status';
import sendReponse from '../../../shared/sendResponse';
const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};
