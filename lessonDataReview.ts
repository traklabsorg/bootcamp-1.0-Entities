import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Section } from "./section";
import { User } from "./user";
import { UserMeetingProviders_Meeting } from "./userMeetingProviders_meeting";
import { LessonData } from "./lessonData";

@Entity("lessonDataReviews")
export class LessonDataReview extends EntityBase{

  @Column({ name: 'review_details', nullable: true , type:"json" })
  reviewDetails: string;

  @Column({ name: 'review_status', nullable: true })
  reviewStatus: boolean;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'lesson_data_id', nullable: false })
  lessonDataId: number;

  @ManyToOne((type) => User, user => user.lessonDataReview, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;


  @ManyToOne((type) => LessonData, lessonData => lessonData.lessonDataReview, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'lesson_data_id' })
  lessonData: LessonData;
  // @OneToOne(() => Section)
  // @JoinColumn({name: 'lesson_data_id'})
  // lessonData: Section;
}


