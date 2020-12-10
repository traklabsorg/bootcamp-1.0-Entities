import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { LiveContent } from "./liveContent";
import { User } from "./user";

@Entity("community")
export class Community extends EntityBase{

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

  @OneToMany((type) => Group, group => group.tenant, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  groups: Group[];

  @OneToMany((type) => LiveContent, liveContent => liveContent.communityId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  liveContents: LiveContent[];
  
}