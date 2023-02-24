import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export abstract class BaseModel {
	// @PrimaryGeneratedColumn({ name: 'ID' })
	// public id: number

	@PrimaryGeneratedColumn('uuid', { name: 'UUID' })
	public uuid: string

	@Column({
		name: 'CreatedBy',
		type: 'char',
		length: 38,
		nullable: true,
	})
	public createdBy: string

	@Column({
		name: 'ModifiedBy',
		type: 'char',
		length: 38,
		nullable: true,
	})
	public modifiedBy: string

	@CreateDateColumn({
		name: 'CreatedOn',
		type: 'datetime',
	})
	public createdOn: Date

	@UpdateDateColumn({
		name: 'ModifiedOn',
		type: 'datetime',
		nullable: true,
	})
	public modifiedOn: Date

	@Column({
		name: 'DeletedOn',
		type: 'datetime',
		nullable: true,
		default: false,
	})
	public deletedOn: Date

	//#region events
	// public abstract afterLoad()
	//#endregion
}
