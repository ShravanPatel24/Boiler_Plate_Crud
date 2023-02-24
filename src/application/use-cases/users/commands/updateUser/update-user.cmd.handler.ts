import { Inject, Injectable } from '@nestjs/common'
import { AppLoggerService, IRequestHandler, RecordIdModel, Result } from '@softobiz-df/shared-lib'
import { User } from 'src/domain/user'
import { IUserRepository } from 'src/infrastructure/data-access/irepositories'
import { UpdateUserCommand } from './update-user.cmd'
import { UpdateUserResponseType } from './update-user.response.type'

@Injectable()
export class UpdateUserCommandHandler implements IRequestHandler<UpdateUserCommand, UpdateUserResponseType> {
	private readonly _logger = AppLoggerService.getLogger(UpdateUserCommandHandler)

	constructor(@Inject(IUserRepository) private readonly _userRepo: IUserRepository) {}
	async handle(commandOrQuery: UpdateUserCommand, token?: string) {
		try {
			const updateUser = User.create({
				firstName: commandOrQuery.firstName,
				lastName: '',
				email: '',
			})
			if (updateUser.isFailure) return Result.fail(updateUser.errorValue())
			const user: Result<User> = await this._userRepo.findById(commandOrQuery.id)
			console.log(user)
			const userValue = updateUser.getValue()

			return Result.ok(new RecordIdModel({ id: userValue.id.toString() }))
		} catch (error) {
			return Result.fail(error)
		}
	}
}
