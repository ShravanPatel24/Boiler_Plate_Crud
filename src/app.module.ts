import { Module } from '@nestjs/common'
import { ConfigurationModule } from './infrastructure/configuration/configuration.module'
import { UserModule } from './application/use-cases/user/user.module'

@Module({
	imports: [ConfigurationModule, UserModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
