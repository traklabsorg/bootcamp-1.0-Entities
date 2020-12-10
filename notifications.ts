import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";

@Entity("channels")
export class Notification extends EntityBase{

  @Column({ name: 'notification_type',nullable:true })
  notificationType: string;

  @Column({ name: 'notification_data',nullable:true, type:"json" })
  notificationData: string;

}