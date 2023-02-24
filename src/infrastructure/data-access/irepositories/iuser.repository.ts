import { IRepository, Result } from '@softobiz-df/shared-lib'
import { User } from 'src/domain/user/user'

export interface IUserRepository extends IRepository<User> {
	findByUser(input: string): Promise<Result<User>>
}

export const IUserRepository = Symbol('IUserRepository')
