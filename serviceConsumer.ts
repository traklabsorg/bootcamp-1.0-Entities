import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusinessEventSubscriber } from "./businessEventSubscriber";

@Entity("business_events")
export class ServiceConsumer extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'service_consumer_name',nullable:true })
  eventName: string;

  @Column({ name: 'service_consumer_type',nullable:true, type: "json" })
  eventDetails: string;

  @Column({ name: 'service_consumer_details',nullable:true, type:"json" })
  serviceConsumerDetails: string;

  @OneToMany((type) => BusinessEventSubscriber, businessEventSubscriber => businessEventSubscriber.serviceConsumerId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEventSubscriber: BusinessEventSubscriber[];

}