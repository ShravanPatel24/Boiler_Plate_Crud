import { AggregateRoot, eDataSource, GenericAppError, Result, UniqueEntityID } from '@softobiz-df/shared-lib'

interface UserProps {
	firstName: string
	lastName: string
	email: string
}
export class User extends AggregateRoot<UserProps> {
	//#region member variables
	//#endregion

	//#region constants
	//#endregion

	//#region properties
	//#endregion

	//#region private methods
	private constructor(props: UserProps, id?: UniqueEntityID) {
		super(props, id)
	}
	//#endregion

	//#region private setters
	private setName(firstName: string, lastName: string, email: string) {
		this._props.firstName = firstName
		this._props.lastName = lastName
		this._props.email = email
		return Result.ok(this)
	}
	//#endregion

	//#region public methods
	public static create(props: UserProps, id?: UniqueEntityID, dataSource?: eDataSource) {
		if (dataSource === eDataSource.STORAGE) return Result.ok(new User(props, id))
		const user = new User(Object.create(null), id)
		const validationQueue = [user.setName(props.firstName, props.lastName, props.email)]
		const combinedResult = Result.combine(validationQueue)
		if (combinedResult.isFailure) return Result.fail<User>(new GenericAppError.DomainError(combinedResult.errorValue()))
		return Result.ok(user)
	}
	//#endregion
}
