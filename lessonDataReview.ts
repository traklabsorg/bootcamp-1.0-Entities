import { EntityBase } from "framework/entities/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Section } from "./section";
import { User } from "./user";
import { UserMeetingProviders_Meeting } from "./userMeetingProviders_meeting";

@Entity("lessonDataReviews")
export class LessonDataReview extends EntityBase{

  @Column({ name: 'review_details', nullable: true , type:"json" })
  reviewDetails: string;

  @Column({ name: 'review_status', nullable: true })
  reviewStatus: string;

  @Column({ name: 'user_id', nullable: true })
  userId: number;

  @Column({ name: 'section_id', nullable: true })
  sectionId: number;

  @ManyToOne((type) => User, user => user.lessonDataReviews, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => Section)
  @JoinColumn({name: 'section_id'})
  section: Section;
}