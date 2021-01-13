import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
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

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'section_id', nullable: false })
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