import { AppError, RecordIdModel, Result } from '@softobiz-df/shared-lib'

export type UserCreateResponseType = Result<RecordIdModel | AppError>
