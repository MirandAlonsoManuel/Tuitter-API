import { IsObject, IsString } from "class-validator";
import { User } from "src/modules/users/entitys";

export class CreateTuitDto {
    @IsString()
    readonly message: string;

    @IsObject()
    readonly user: Partial<User>;
}
