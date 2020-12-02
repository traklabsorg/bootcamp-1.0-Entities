//Done
import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { User } from "./user";

@Entity("tenants")
export class Tenant extends EntityBase{

  // @PrimaryGeneratedColumn() tenant_id: number;

  
  @Column({ name: 'community_name',nullable:true })
  communityName: string;

  @Column({ name: 'address',nullable:true })
  address: string;

  @Column({ name: 'community_admin_id',nullable:true })
  communityAdminId: number;

  @Column({ name: 'payment_info',nullable:true })
  payment_info: string;

  @Column({ name: 'subscription_start_date', nullable:true, type: "timestamp"})
  subsciptionStartDate: Date;

  @Column({ name: 'subscription_end_date', nullable:true, type: "timestamp"})
  subsciptionEndDate: Date;

  @OneToMany((type) => Group, (group) => group.tenantId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  groups: Group[]
  
  @OneToMany((type) => User, (user) => user.tenantId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  users : User[]

}
