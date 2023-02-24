import { Injectable } from '@nestjs/common'
import { Result, UniqueEntityID } from '@softobiz-df/shared-lib'
import { EntityManager, IsNull, Not } from 'typeorm'
import { User } from 'src/domain/user/user'
import { IUserRepository } from '../irepositories/iuser.repository'
import { UserSqlMapper } from './mappers/user.mapper'
import { UserModel } from './models/user.model'

@Injectable()
export class UserSqlRepository implements IUserRepository {
	//#region constructor
	public constructor(private readonly _entityManager: EntityManager, private readonly _mapper: UserSqlMapper) {}
	//#region private methods

	private async getById(uuid: string) {
		return this._entityManager.findOne(UserModel, { uuid: uuid, deletedOn: Not(IsNull()) })
	}

	//#endregion
	private async getAll() {
		return this._entityManager.find(UserModel, {})
	}

	findByUser(_input: string): Promise<Result<User>> {
		throw new Error('Method not implemented.')
	}
	//#endregion

	async save(input: User): Promise<Result<User>> {
		const persistence = this._mapper.toPersistence(input)
		await this._entityManager.transaction(async (em) => {
			await em.save(persistence)
		})
		return Result.ok(input)
	}
	exists(input: User): Promise<Result<boolean>> {
		throw new Error('Method not implemented.')
	}
	remove(input: UniqueEntityID): Promise<Result<void>> {
		throw new Error('Method not implemented.')
	}
	async findById(input: UniqueEntityID): Promise<Result<User>> {
		const userEntity = await this.getById(input.toString())
		if (userEntity) {
			return Result.ok(this._mapper.toDomain(userEntity))
		} else {
			return Result.ok()
		}
	}
}
