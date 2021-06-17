import { CommunityCard } from './communityCard';
import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Group } from "./group";
import { LiveContent } from "./liveContent";
import { User } from "./user";
import { Channel } from "./channel";
import { CommunityBills } from './communityBills';

@Entity("communities")
@Unique(["communityName"])
export class Community extends EntityBase {

  @Column({ name: 'community_name', nullable: true })
  communityName: string;

  @Column({ name: 'community_admin_id', nullable: true })
  communityAdminId: number;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'payment_info', nullable: true, type: "json" })
  paymentInfo: string;

  @Column({ name: 'subscription_start_date', nullable: true })
  subscriptionStartDate: Date;

  @Column({ name: 'subscription_end_date', nullable: true })
  subscriptionEndDate: Date;

  @Column({ name: "user_quotas", nullable: true })
  userQuotas: string;

  @Column({ name: "community_additional_data", nullable: true, type: "json" })
  communityAdditionalData: string;

  @Column({name:"idp_config",nullable:true,type:"json"})
  idpConfig:string;

  @Column({ name: "community_settings", nullable: true, type: "json",default: {} })
  communitySettings: string;


  @Column({ name: "extra_data", nullable: true, type: "json" })
  extraData: string;

  @Column({ name: "community_url", nullable: true })
  communityUrl: string;

  @Column({ name: "external_tenant_id", nullable: true })
  externalTenantId: number;

  @Column({ name: "external_tenant_app_id", nullable: true })
  externalTenantAppId: number;

  @Column({ name: "is_active", nullable: true })
  isActive: boolean;

  @OneToMany((type) => User, user => user.community, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  user: User[];

  @OneToMany((type) => Group, group => group.community, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  group: Group[];

  @OneToMany((type) => Channel, channel => channel.community, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  channel: Channel[];

  @OneToMany((type) => CommunityCard, communityCard => communityCard.community, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  communityCard: CommunityCard[];

  @OneToMany((type) => CommunityBills, (communityBills) => communityBills.community, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  communityBills: CommunityBills[]

  @OneToMany((type) => LiveContent, liveContent => liveContent.community, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  liveContents: LiveContent[];

}