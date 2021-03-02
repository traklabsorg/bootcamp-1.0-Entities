import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "./lesson";
import { LessonDataUser } from "./lessonDataUser";
import { LessonDataReview } from './lessonDataReview';

@Entity("lessonDatas")
export class LessonData extends EntityBase{

  @Column({ name: 'content_type',nullable:true })
  contentType: string;

  @Column({ name: 'url', nullable:true})
  url: string;

  @Column({ name: 'is_reviewed', nullable:true})
  isReviewed: string;

  @Column({ name: 'is_submitted', nullable:true})
  isSubmitted: string;

  @Column({ name: 'is_draft', nullable:true})
  isDraft: string;

  @Column({ name: 'lesson_details',nullable:true, type:"json" })
  lessonDetails: string;

  @Column({ name: 'lesson_id',nullable:false})
  lessonId: number;

  @Column({name: 'total_points',nullable:true})
  totalPoints: number;

  @ManyToOne((type) => Lesson, lesson => lesson.lessonData, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;

  @OneToMany((type) => LessonDataUser, lessonDataUser => lessonDataUser.lessonData, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessonDataUser: LessonDataUser[];

  @OneToMany((type) => LessonDataReview, lessonDataReview => lessonDataReview.lessonData, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lessonDataReview: LessonDataReview[];
}