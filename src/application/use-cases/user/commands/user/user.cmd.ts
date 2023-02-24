import { IRequest } from '@softobiz-df/shared-lib'
import { IsOptional } from 'class-validator'
import { UserCreateResponseType } from './user.response.type'
import { ApiProperty } from '@nestjs/swagger'

export class UserCreateCommand implements IRequest<UserCreateResponseType> {
	@IsOptional()
	@ApiProperty()
	public firstName: string

	@IsOptional()
	@ApiProperty()
	public lastName: string

	@IsOptional()
	@ApiProperty()
	public email: string

	public constructor(init?: Partial<UserCreateCommand>) {
		Object.assign(this, init)
	}
}
