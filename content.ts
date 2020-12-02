import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ChannelBillPlan } from "./channelBillPlan";
import { Group } from "./group";
import { Section } from "./section";

@Entity("contents")
export class Content extends EntityBase{

  @Column({ name: 'content_type',nullable:true })
  contentType: string;

  @Column({ name: 'content_template_id',nullable:true })
  contentTemplateId: number;

  @Column({ name: 'content_details',nullable:true, type:"enum" })
  contentDetails: string;

  @ManyToOne((type) => Section, section => section.contents, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'section_id' })
  sectionId: Section;

}