import { RecordIdModel, Result } from '@softobiz-df/shared-lib'
import { IUserRepository } from '../../../../../infrastructure/data-access/irepositories/iuser.repository'
import { UserCreateCommand } from './user.cmd'
import { UserCreateCommandHandler } from './user.cmd.handler'

describe('UserCreateCommandHandler', () => {
	let commandHandler: UserCreateCommandHandler, _userRepo: IUserRepository

	beforeEach(async () => {
		_userRepo = new (jest.fn<IUserRepository, []>(() => Object.create(null) as IUserRepository))()
		commandHandler = new UserCreateCommandHandler(_userRepo)
	})

	it('should create program as user filled all details', async () => {
		_userRepo.save = (inputProgram) => Promise.resolve(Result.ok(inputProgram))

		const command = new UserCreateCommand({
			firstName: 'firstName',
			lastName: 'lastName',
			email: 'email',
		})
		const user = await commandHandler.handle(command)
		// console.log('resultFailed');

		expect(user.isSuccess).toBe(true)
		expect((user.getValue() as RecordIdModel).id).toBeDefined()
	})
})
