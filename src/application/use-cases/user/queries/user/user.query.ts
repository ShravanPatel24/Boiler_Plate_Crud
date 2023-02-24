import { IRequest } from '@softobiz-df/shared-lib'
import { GetUserReponseType } from './user.response.type'

export class GetUserQuery implements IRequest<GetUserReponseType> {
	public id: string
	public constructor(init?: Partial<GetUserQuery>) {
		Object.assign(this, init)
	}
}
