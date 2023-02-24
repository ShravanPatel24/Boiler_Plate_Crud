import { Inject, Injectable } from '@nestjs/common'
import { AppLoggerService, IRequestHandler, RecordIdModel, Result } from '@softobiz-df/shared-lib'
import { User } from '../../../../../domain/user/user'
import { IUserRepository } from '../../../../../infrastructure/data-access/irepositories/iuser.repository'
import { UserCreateCommand } from './user.cmd'
import { UserCreateResponseType } from './user.response.type'

@Injectable()
export class UserCreateCommandHandler implements IRequestHandler<UserCreateCommand, UserCreateResponseType> {
	private readonly _logger = AppLoggerService.getLogger(UserCreateCommandHandler)

	constructor(@Inject(IUserRepository) private readonly _userRepo: IUserRepository) {}
	async handle(commandOrQuery: UserCreateCommand, token?: string): Promise<UserCreateResponseType> {
		const user = User.create({
			firstName: commandOrQuery.firstName,
			lastName: commandOrQuery.lastName,
			email: commandOrQuery.email,
		})
		if (user.isFailure) return Result.fail(user.errorValue())

		const userValue = user.getValue()
		await this._userRepo.save(userValue)

		return Result.ok(new RecordIdModel({ id: userValue.id.toString() }))
	}
}
