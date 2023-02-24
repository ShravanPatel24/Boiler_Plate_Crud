import { Provider } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { DaprSecretManagerService, EnvKeyConstants, ISecretManager } from '@softobiz-df/shared-lib'

export const configProviders: Provider[] = [
	{
		provide: ISecretManager,
		useFactory: (envConfig: ConfigService) => {
			const daprUrl = `${envConfig.get(EnvKeyConstants.DAPR_HOST)}:${envConfig.get(EnvKeyConstants.DAPR_HTTP_PORT)}/v1.0/secrets/${envConfig.get(
				EnvKeyConstants.DAPR_SECRET_STORE_NAME,
			)}`
			return new DaprSecretManagerService(daprUrl)
		},
		inject: [ConfigService],
	},
]
