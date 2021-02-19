import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BusinessEvent } from "./businessEvent";
import { BusinessEventSubscriber } from "./businessEventSubscriber";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";

@Entity("ddEntities")
export class DdEntity extends EntityBase{

  @Column({ name: 'entity_name',nullable:true })
  title: string;

  @Column({ name: 'entity_details',nullable:true, type:"json" })
  entityDetails: string;

  @OneToMany((type) => BusinessEvent, businessEvent => businessEvent.ddEntity, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEvent: BusinessEvent[];
  
  @OneToMany((type) => BusinessEventSubscriber, businessEventSubscriber => businessEventSubscriber.ddEntity, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  businessEventSubscriber: BusinessEventSubscriber[];

}