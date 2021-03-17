import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Subscription } from "./subscription";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Channel } from "./channel";
import { Plan } from "./plan";
import { Group } from "./group";

@Entity("channelGroups")
@Unique(["channelId","groupId"])
export class ChannelGroup extends EntityBase{
  

  @Column({ name: 'channel_id', nullable:false})
  channelId:number;


  @Column({name: 'group_id', nullable:true})
  groupId:number;

  @Column({name: 'channel_group_details', nullable:true,type:"json"})
  channelGroupDetails:string;

  @Column({name: 'channel_group_revoke_users', nullable:true,type:"json"})
  channelGroupRevokeUsers:string;

  label:string;

  @ManyToOne((type) => Channel, channels => channels.channelGroup, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;

  @ManyToOne((type) => Group, groups => groups.channelGroup, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'group_id' })
  group: Group;


}