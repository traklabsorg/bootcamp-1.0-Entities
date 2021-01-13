import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Subscription } from "./subscription";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Channel } from "./channel";
import { Plan } from "./plan";
import { Group } from "./group";

@Entity("channelGroups")
export class ChannelGroup extends EntityBase{
  

  @Column({ name: 'channel_id', nullable:false})
  channelId:number;


  @Column({name: 'group_id', nullable:true})
  groupId:number;

  @Column({name: 'channel_group_details', nullable:true,type:"json"})
  planId:string;

  @ManyToOne((type) => Channel, channels => channels.channelGroups, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;

  @ManyToOne((type) => Group, groups => groups.channelGroups, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'group_id' })
  group: Group;


}