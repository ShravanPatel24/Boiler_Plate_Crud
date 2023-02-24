import { IRequest, UniqueEntityID } from '@softobiz-df/shared-lib'
import { IsOptional } from 'class-validator'
import { UpdateUserResponseType } from './update-user.response.type'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateUserCommand implements IRequest<UpdateUserResponseType> {
	@IsOptional()
	@ApiProperty()
	public id: UniqueEntityID

	@IsOptional()
	@ApiProperty()
	public firstName: string

	public constructor(init?: Partial<UpdateUserCommand>) {
		Object.assign(this, init)
	}
}
