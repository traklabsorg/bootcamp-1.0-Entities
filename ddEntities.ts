import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusinessEvent } from "./businessEvent";
import { BusinessEventSubscriber } from "./businessEventSubscriber";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";

@Entity("ddEntity")
export class DdEntity extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'entity_name',nullable:true })
  title: string;

  @Column({ name: 'entity_details',nullable:true, type:"json" })
  entityDetails: string;

  @OneToMany((type) => BusinessEvent, businessEvent => businessEvent.ddEntityId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT', name: 'business_event_id'
  })
  businessEventId: BusinessEvent[];
  
  @OneToMany((type) => BusinessEventSubscriber, businessEventSubscriber => businessEventSubscriber.ddEntityId, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEventSubscriber: BusinessEventSubscriber[];

}