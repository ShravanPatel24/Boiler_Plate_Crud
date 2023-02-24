import { Inject, Injectable } from '@nestjs/common'
import { AppLoggerService, IRequestHandler, Result, UniqueEntityID } from '@softobiz-df/shared-lib'
import { User } from 'src/domain/user'
import { IUserRepository } from 'src/infrastructure/data-access/irepositories/iuser.repository'
import { UserDto } from '../../dto/user.dto'
import { UserErrors } from '../../user.error'
import { GetUserQuery } from './user.query'
import { GetUserReponseType } from './user.response.type'

@Injectable()
export class GetUserQueryHandler implements IRequestHandler<GetUserQuery, GetUserReponseType> {
	private readonly _logger = AppLoggerService.getLogger(GetUserQueryHandler)

	constructor(@Inject(IUserRepository) private readonly _userRepo: IUserRepository) {}

	async handle(query: GetUserQuery, _token?: string): Promise<GetUserReponseType> {
		const user: Result<User> = await this._userRepo.findById(new UniqueEntityID(query.id))
		if (user.isFailure) return Result.fail(new UserErrors.UserNotFound())
		const userValue = user.getValue()
		const userDto = new UserDto({
			firstName: userValue.props.firstName,
			lastName: userValue.props.lastName,
			email: userValue.props.email,
		})
		return Result.ok(userDto)
	}
}
