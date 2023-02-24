import { IDTO } from '@softobiz-df/shared-lib'

export class UserDto implements IDTO {
	public firstName: string
	public lastName: string
	public email: string

	public constructor(init?: Partial<UserDto>) {
		Object.assign(this, init)
	}
}
