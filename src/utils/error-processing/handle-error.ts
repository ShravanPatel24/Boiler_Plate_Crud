import { Inject } from '@nestjs/common'
import { ErrorProcessingService } from './error-processing.service'
import { IErrorProcessingService } from './error-processing.service.abstract'

/**
 *
 * @returns
 */
export function HandleError() {
	return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
		const original = descriptor.value
		/* eslint-disable no-param-reassign, func-names */
		descriptor.value = function (...args: any[]) {
			try {
				return original.apply(this, args)
			} catch (error) {
				const errorProcessingService: IErrorProcessingService = new ErrorProcessingService()
				errorProcessingService.getErrorResponse()
			}
		}
		/* eslint-enable no-param-reassign, func-names */
	}
}
