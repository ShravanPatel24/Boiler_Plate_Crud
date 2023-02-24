import { GenericAppError } from '@softobiz-df/shared-lib'

export namespace UserErrors {
	export class UserNotFound extends GenericAppError.NotFoundError {
		constructor() {
			super()
			this.message = 'User not found!'
		}
	}
}
