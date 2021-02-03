import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { Section } from "./section";
import { Community } from "./communities";
import { LessonDataUser } from "./lessonDataUser";
import { ChannelGroup } from "./channelGroup";
import { User } from "./user";
import { Channel } from "./channel";

@Entity("channelUsers")
export class ChannelUser extends EntityBase{



  @Column({ name: 'is_active',nullable:true })
  isActive: string;

  @Column({ name: 'channel_id',nullable:false })
  channelId: number;

  @Column({ name: 'user_id',nullable:false })
  userId: number;

  @Column({name: 'channel_user_additional_details', nullable:true,type:"json"})
  channelUserAdditionalDetails: string;

  @ManyToOne((type) => User, user => user.channelUsers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;
  
  @ManyToOne((type) => Channel, channel => channel.channelUsers, {
    onDelete: 'CASCADE', onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;


}