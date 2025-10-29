import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { UserService } from "./user.service";
import { ICreatePatientInput } from "./user.interface";

const createPatient = catchAsync(async (req: Request, res: Response) => {
    const userData = req.body as ICreatePatientInput;

    const result = await UserService.createPatient(userData);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Patient Created Successfully",
        data: result,
    });
});

export const UserController = { createPatient };
