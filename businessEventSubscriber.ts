import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusinessEvent } from "./businessEvent";
import { DdEntity } from "./ddEntities";
import { ServiceConsumer } from "./serviceConsumer";


@Entity("businessEventSubscribers")
export class  BusinessEventSubscriber extends EntityBase{

  @Column({ name: 'operation_name',nullable:true })
  operationName: string;

  @Column({ name: 'subscription_details',nullable:true, type:"json" })
  subscriptionDetails: string;

  @Column({ name: 'business_event_id',nullable:true })
  businessEventId: number;

  @Column({ name: 'subscriber_dd_entity_id',nullable:true })
  subscriberDdEntityId: number;

  @Column({ name: 'service_consumer_id',nullable:true })
  serviceConsumerId: number;

  @ManyToOne((type) => BusinessEvent, businessEvent => businessEvent.businessEventSubscribers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'business_event_id' })
  businessEvent: BusinessEvent;

  @ManyToOne((type) => DdEntity, ddEntities => ddEntities.businessEventSubscribers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'subscriber_dd_entity_id' })
  ddEntity: DdEntity;
  
  @ManyToOne((type) => ServiceConsumer, serviceConsumer => serviceConsumer.businessEventSubscribers, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'service_consumer_id' })
  serviceConsumer: ServiceConsumer;
}