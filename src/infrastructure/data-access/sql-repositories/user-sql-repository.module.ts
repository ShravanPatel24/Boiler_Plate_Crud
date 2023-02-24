import { Module } from '@nestjs/common'
import { UserSqlMapper } from './mappers/user.mapper'
import { IUserRepository } from '../irepositories/iuser.repository'
import { UserSqlRepository } from './user.repository'

@Module({
	providers: [UserSqlMapper, UserSqlRepositoryModule, { provide: IUserRepository, useClass: UserSqlRepository }],
	exports: [{ provide: IUserRepository, useClass: UserSqlRepository }],
})
export class UserSqlRepositoryModule {}
