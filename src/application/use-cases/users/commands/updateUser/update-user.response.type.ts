import { AppError, RecordIdModel, Result } from '@softobiz-df/shared-lib'

export type UpdateUserResponseType = Result<RecordIdModel | AppError>
