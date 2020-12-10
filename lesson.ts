import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { LessonData } from "./lessonData";
import { Section } from "./section";

@Entity("lesson")
export class Lesson extends EntityBase{

  @Column({ name: 'content_type',nullable:true })
  contentType: string;

  @Column({ name: 'content_template_id',nullable:true })
  contentTemplateId: number;

  @Column({ name: 'content_details',nullable:true, type:"enum" })
  contentDetails: string;

  @Column({ name: 'section_id',nullable:false})
  sectionId: number;

  @ManyToOne((type) => Section, section => section.lessons, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @OneToMany((type) => LessonData, lessonData => lessonData.content, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessonData: LessonData[];

}