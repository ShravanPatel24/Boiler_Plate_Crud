import { Injectable } from '@nestjs/common'
import { eDataSource, IDTO, IMapper, UniqueEntityID } from '@softobiz-df/shared-lib'
import { User } from 'src/domain/user/user'
import { UserModel } from '../models/user.model'

@Injectable()
export class UserSqlMapper implements IMapper {
	constructor() {}

	toDomain(raw: UserModel): User {
		return User.create(
			{
				firstName: raw.firstName,
				lastName: raw.lastName,
				email: raw.email,
			},
			new UniqueEntityID(raw.uuid),
			eDataSource.STORAGE,
		).getValue()
	}

	toPersistence(input: User, curEntity?: UserModel): UserModel {
		if (!curEntity) {
			curEntity = new UserModel()
		}
		curEntity.uuid = input.id.toString()
		curEntity.firstName = input.props.firstName
		curEntity.lastName = input.props.lastName
		curEntity.email = input.props.email

		//@todo:: improve mapping
		return curEntity
	}
	toDto(input: UserModel): IDTO {
		throw new Error('Method not implemented.')
	}
}
