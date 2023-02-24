import { AppError, Result } from '@softobiz-df/shared-lib'
import { UserErrors } from '../../user.error'
import { UserDto } from '../../dto/user.dto'

export type GetUserReponseType = Result<UserDto | UserErrors.UserNotFound | AppError>
