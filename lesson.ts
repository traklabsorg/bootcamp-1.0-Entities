import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "./group";
import { LessonData } from "./lessonData";
import { Section } from "./section";

@Entity("lessons")
export class Lesson extends EntityBase{

  @Column({ name: 'content_type',nullable:true })
  contentType: string;

  @Column({ name: 'content_template_id',nullable:true })
  contentTemplateId: number;

  @Column({ name: 'content_details',nullable:true,type:"json" })
  contentDetails: string;

  @Column({ name: 'sequence',nullable:true })
  sequence: string;

  @Column({ name: 'publish_date',nullable:true })
  publishDate: string;

  @Column({ name: 'is_mandatory_sequence',nullable:true })
  isMandatorySequence: string;


  @Column({ name: 'section_id',nullable:true})
  sectionId: number;

  @ManyToOne((type) => Section, section => section.lesson, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @OneToMany((type) => LessonData, lessonData => lessonData.lesson, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessonData: LessonData[];
}