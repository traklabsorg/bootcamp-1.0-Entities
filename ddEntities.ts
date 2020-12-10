import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusinessEvent } from "./businessEvent";
import { BusinessEventSubscriber } from "./businessEventSubscriber";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";

@Entity("ddEntity")
export class DdEntity extends EntityBase{

  @Column({ name: 'entity_name',nullable:true })
  title: string;

  @Column({ name: 'entity_details',nullable:true, type:"json" })
  entityDetails: string;

  @OneToMany((type) => BusinessEvent, businessEvent => businessEvent.ddEntity, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEvents: BusinessEvent[];
  
  @OneToMany((type) => BusinessEventSubscriber, businessEventSubscriber => businessEventSubscriber.ddEntity, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEventSubscribers: BusinessEventSubscriber[];

}