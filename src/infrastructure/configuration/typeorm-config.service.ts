import { Inject, Injectable } from '@nestjs/common'
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'
import { AppLoggerService, DBSecretModel, eAppEnv, EnvKeyConstants, ISecretManager, Result } from '@softobiz-df/shared-lib'
import * as models from '../data-access/sql-repositories/models'
@Injectable()
export class TypeOrmConnectionService implements TypeOrmOptionsFactory {
	//#region fields
	private readonly _logger = AppLoggerService.getLogger(TypeOrmConnectionService)
	private _config: DBSecretModel
	//#endregion

	/**
	 * @param _envConfig
	 */
	constructor(private readonly _envConfig: ConfigService, @Inject(ISecretManager) private _secretManager: ISecretManager) {}

	/**
	 * Passing typeorm configuration options
	 */
	async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
		await this.loadConfiguration()
		//@todo:: import models dynamically based on config type or database type

		return {
			type: this._config.type as any, //@todo:: add strict type
			host: this._config.host,
			port: parseInt(this._config.port.toString()),
			username: this._config.username,
			password: this._config.password,
			database: this._config.database,
			entities: Object.keys(models).map((k) => models[k]),
			autoLoadEntities: false,
			synchronize: true,
			logging: true,
			logger: 'file',
		}
	}

	/**
	 * @description Use to set database configuration based on environment
	 */
	async loadConfiguration() {
		this._config = new DBSecretModel()
		this._config.type = this._envConfig.get(EnvKeyConstants.DATABASE_TYPE)
		if (this._envConfig.get(EnvKeyConstants.APP_ENV) === eAppEnv.LOCAL.toLowerCase()) {
			this._config.host = this._envConfig.get(EnvKeyConstants.DATABASE_HOST)
			this._config.port = parseInt(this._envConfig.get(EnvKeyConstants.DATABASE_PORT))
			this._config.username = this._envConfig.get(EnvKeyConstants.DATABASE_USERNAME)
			this._config.password = this._envConfig.get(EnvKeyConstants.DATABASE_PASSWORD)
			this._config.database = this._envConfig.get(EnvKeyConstants.DATABASE_NAME)
		} else {
			try {
				const secretKey = this._envConfig.get(EnvKeyConstants.DAPR_SECRET_KEY)
				const daprSecret = await this._secretManager.getSecretValue<Result<any>>(secretKey)
				const data = JSON.parse(daprSecret._value[secretKey])
				this._config.host = data.host
				this._config.port = parseInt(data.port)
				this._config.username = data.username
				this._config.password = data.password
				this._config.database = data.database
			} catch (error) {
				this._logger.error('Error occur while getting database secret::', error)
				throw error
			}
		}
	}
}
