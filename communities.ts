import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { User } from "./user";

@Entity("community")
export class Community extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'community_name',nullable:true })
  communityName: string;

  @Column({ name: 'address',nullable:true })
  address: string;

  @Column({ name: 'payment_info',nullable:true})
  paymentInfo: string;

  @Column({ name: 'subscription_start_date',nullable:true, default : Date.now() })
  subscriptionStartDate: Date;

  @Column({ name: 'subscription_end_date',nullable:true, default : Date.now() })
  subscriptionEndDate: Date;

  @OneToMany((type) => User, user => user.communityId, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
    })
    users: User[]

  @OneToMany((type) => Group, group => group.communityId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  groups: Group[]
  
}