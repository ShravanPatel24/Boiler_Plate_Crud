import { Column, Entity } from 'typeorm'
import { BaseModel } from './base.model'

@Entity({ name: 'Users' })
export class UserModel extends BaseModel {
	//#region constructors
	public constructor(init?: Partial<UserModel>) {
		super()
		Object.assign(this, init)
	}
	//#endregion

	@Column()
	public firstName: string

	@Column()
	public lastName: string

	@Column()
	public email: string
}
