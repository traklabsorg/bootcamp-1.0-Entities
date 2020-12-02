// import { EntityBase } from "framework/entities/EntityBase";
// import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


// @Entity("coupons")
// export class Coupon extends EntityBase{

//   // @Column({ name: 'tenant_id',nullable:true })
//   // tenantId: number;
//   @PrimaryGeneratedColumn() coupon_id: number;

//   @Column({ name: 'valid_till',nullable:true, type: "timestamp"})
//   validTill: Date;

//   @Column({ name: 'usage_count',nullable:true })
//   usageCount: number;

//   @Column({ name: 'group_details',nullable:true, type:"json" })
//   groupDetails: string;

//   @ManyToOne((type) => Tenant, tenants => tenants.groups, {
//     onDelete: 'CASCADE',onUpdate: 'RESTRICT'
//   })
//   @JoinColumn({ name: 'tenant_id' })
//   tenantId: Tenant;

//   @OneToMany((type) => Channel, (channels) => channels.groupId, {
// 		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
//   })
//   channels: Channel[]
  
//   @OneToMany((type) => GroupUser, (groupUser) => groupUser.groupId, {
// 		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
//   })
//   groupUsers : GroupUser[]


//   // @OneToMany((type) => Group, (customerRepresentatives) => customerRepresentatives.customer, {
// 	// 	onDelete: 'CASCADE'
// 	// })

  
// }