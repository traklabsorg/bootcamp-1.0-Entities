import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusinessEvent } from "./businessEvent";
import { DdEntity } from "./ddEntities";
import { ServiceConsumer } from "./serviceConsumer";


@Entity("business_event_subscribers")
export class BusinessEventSubscriber extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'operation_name',nullable:true })
  operationName: string;

  @Column({ name: 'subscription_details',nullable:true, type:"json" })
  subscriptionDetails: string;

  @ManyToOne((type) => BusinessEvent, businessEvent => businessEvent.businessEventSubscriber, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'business_event_id' })
  eventId: BusinessEvent;

  @ManyToOne((type) => DdEntity, ddEntities => ddEntities.businessEventId, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'subscriber_dd_entity_id' })
  ddEntityId: DdEntity;
  
  @ManyToOne((type) => ServiceConsumer, serviceConsumer => serviceConsumer.businessEventSubscriber, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'service_consumer_id' })
  serviceConsumerId: ServiceConsumer;
}