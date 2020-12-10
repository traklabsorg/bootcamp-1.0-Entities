import { EntityBase } from "../platform-3.0-Framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./lesson";
import { LessonDataUser } from "./lessonDataUser";

@Entity("lessonData")
export class LessonData extends EntityBase{

  @Column({ name: 'content_type',nullable:true })
  contentType: string;

  @Column({ name: 'url', nullable:true})
  url: string;

  @Column({ name: 'lesson_details',nullable:true, type:"json" })
  lessonDetails: string;

  @Column({ name: 'content_id',nullable:false})
  contentId: number;

  @ManyToOne((type) => Lesson, lesson => lesson.lessonData, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'content_id' })
  content: Lesson;

  @OneToMany((type) => LessonDataUser, lessonDataUser => lessonDataUser.content, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessonDataUsers: LessonDataUser[]
}