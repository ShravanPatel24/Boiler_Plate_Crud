import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import helmet from 'helmet'
import {
	AppLoggerService,
	EnvKeyConstants,
	HttpExceptionFilter,
	IDynamicProps,
	RequestValidationPipe,
	ResponseTransformerInterceptor,
} from '@softobiz-df/shared-lib'
import { AppModule } from './app.module'
import { INestApplication } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true, bodyParser: true })

	const logger = AppLoggerService.getLogger('Bootstrap')

	//getting current env keys
	const appConfig = app.get(ConfigService)

	//to set security related http response headers
	app.use(helmet())

	//api route prefix
	app.setGlobalPrefix(`${appConfig.get(EnvKeyConstants.APP_ROUTE_PREFIX)}`)

	//global filters
	app.useGlobalFilters(new HttpExceptionFilter())
	app.useGlobalInterceptors(new ResponseTransformerInterceptor<IDynamicProps>())
	app.useGlobalPipes(new RequestValidationPipe())

	subscribeEvents(app)

	// swagger
	const config = new DocumentBuilder().setTitle('Microservice').setDescription('Softobiz-nest-boilerplate Api').setVersion('1.0').addTag('Microservice').build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup('api', app, document)

	// swagger ended

	await app.listen(appConfig.get(EnvKeyConstants.APP_PORT))
	logger.info(`🚀 nest-boilerplate started at ${await app.getUrl()}`)
	logger.info(`🚀 nest-boilerplate swagger started at ${await app.getUrl()}/api`)
}
bootstrap()

//#region application setup
async function subscribeEvents(app: INestApplication) {
	//
}
//#endregion
