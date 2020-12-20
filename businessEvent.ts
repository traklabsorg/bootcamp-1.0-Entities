import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DdEntity } from "./ddEntities"
import { BusinessEventSubscriber } from "./businessEventSubscriber";

@Entity("businessEvents")
export class BusinessEvent extends EntityBase{

  @Column({ name: 'event_name',nullable:true })
  eventName: string;

  @Column({ name: 'event_details',nullable:true, type: "json" })
  eventDetails: string;

  @Column({ name: 'operation_name',nullable:true })
  operationName: string;

  @Column({ name: 'public_details',nullable:true, type:"json" })
  publicDetails: string;

  @Column({ name: 'dd_entity_id',nullable:true })
  ddEntityId: number;

  @ManyToOne((type) => DdEntity, ddEntities => ddEntities.businessEvents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'dd_entity_id' })
  ddEntity: DdEntity;

  @OneToMany((type) => BusinessEventSubscriber, businessEventSubscriber => businessEventSubscriber.businessEvent, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEventSubscribers: BusinessEventSubscriber[];

}