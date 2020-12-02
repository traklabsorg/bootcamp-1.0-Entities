import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DdEntity } from "./ddEntities"
import { BusinessEventSubscriber } from "./businessEventSubscriber";

@Entity("business_events")
export class BusinessEvent extends EntityBase{

  // @PrimaryGeneratedColumn() channel_id: number;
  @Column({ name: 'event_name',nullable:true })
  eventName: string;

  @Column({ name: 'event_details',nullable:true, type: "json" })
  eventDetails: string;

  @Column({ name: 'operation_name',nullable:true })
  operationName: string;

  @Column({ name: 'public_details',nullable:true, type:"json" })
  publicDetails: string;

  @ManyToOne((type) => DdEntity, ddEntities => ddEntities.businessEventId, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'dd_entity_id' })
  ddEntityId: DdEntity;

  @OneToMany((type) => BusinessEventSubscriber, businessEventSubscriber => businessEventSubscriber.evenetId, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEventSubscriber: BusinessEventSubscriber[];

}