import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";

@Entity("notifications")
export class Notification extends EntityBase{

  @Column({ name: 'notification_type',nullable:true })
  notificationType: string;

  @Column({ name: 'notification_data',nullable:true, type:"json" })
  notificationData: string;

}