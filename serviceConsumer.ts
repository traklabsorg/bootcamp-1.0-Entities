import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusinessEventSubscriber } from "./businessEventSubscriber";

@Entity("serviceConsumers")
export class ServiceConsumer extends EntityBase{

  @Column({ name: 'service_consumer_name',nullable:true })
  eventName: string;

  @Column({ name: 'service_consumer_type',nullable:true, type: "json" })
  eventDetails: string;

  @Column({ name: 'service_consumer_details',nullable:true, type:"json" })
  serviceConsumerDetails: string;

  @OneToMany((type) => BusinessEventSubscriber, businessEventSubscriber => businessEventSubscriber.serviceConsumer, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEventSubscribers: BusinessEventSubscriber[];

}