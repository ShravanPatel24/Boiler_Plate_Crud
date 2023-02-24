import * as path from 'path'
import { Global, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { MediatorModule, RequestContextModule } from '@softobiz-df/shared-lib'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConnectionService } from './typeorm-config.service'
import { configProviders } from './configuration.providers'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'
import { ErrorProcessingService } from 'src/utils/error-processing/error-processing.service'

@Global()
@Module({
	imports: [
		// Grpc Configuration
		ClientsModule.register([
			{
				name: 'ERROR_HANDLER',
				transport: Transport.GRPC,
				options: {
					package: 'errorhandler',
					url: '127.0.0.1:50001',
					protoPath: join(__dirname, './error.proto'),
				},
			},
		]),
		MediatorModule,
		RequestContextModule,
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: path.resolve(process.cwd(), 'env', `.${process.env.APP_ENV || 'local'}.env`),
		}),
		ServeStaticModule.forRoot({
			rootPath: path.resolve(process.cwd(), 'docs', 'api'),
			renderPath: /(api\/doc)$/,
		}),

		TypeOrmModule.forRootAsync({ useClass: TypeOrmConnectionService }),
	],
	providers: [...configProviders, ErrorProcessingService],
	exports: [...configProviders, ErrorProcessingService],
})
export class ConfigurationModule {}
