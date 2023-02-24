import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import path = require('path')
import fs = require('fs')
import dotenv = require('dotenv')

const activeEnv = process.env.APP_ENV || 'local'
const envConfig: any = dotenv.parse(fs.readFileSync(path.resolve(process.cwd(), 'env', `.${activeEnv}.env`)))
const typeormConfigOptions: TypeOrmModuleOptions = {
	type: 'mssql',
	host: envConfig.DATABASE_HOST,
	port: parseInt(envConfig.DATABASE_PORT),
	username: envConfig.DATABASE_USERNAME,
	password: envConfig.DATABASE_PASSWORD,
	database: envConfig.DATABASE_NAME,
	entities: [path.resolve('dist/infrastructure/data-access/sql-repositories/models/index{.ts,.js}')],
	migrations: [path.resolve('src/infrastructure/data-access/sql-repositories/migrations/*{.ts,.js}')],
	cli: {
		migrationsDir: 'src/infrastructure/data-access/sql-repositories/migrations',
	},
	autoLoadEntities: true,
	synchronize: true,
	logging: true,
	logger: 'file',
}

export = typeormConfigOptions
