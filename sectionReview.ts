import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Channel } from "./channel";
import { Lesson } from "./lesson";
import { LessonDataReview } from "./lessonDataReview";
import { User } from "./user";
import { Section } from "./section";

@Entity("sectionReviews")
@Unique(["sectionId","userId"])
export class SectionReview extends EntityBase{


  @Column({name:"section_id",nullable:false})
  sectionId:number;

  @Column({name:"user_id",nullable:false})
  userId:number;

  @Column({ name: 'review_details',nullable:true, type:"json" })
  reviewDetails: string;

  @Column({ name: "review_status", nullable: true })
  reviewStatus: string;

  @ManyToOne((type) => Section, section => section.sectionReview, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'section_id' })
  section: Section;

  @ManyToOne((type) => User, user => user.sectionReview, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'user_id' })
  user: User;




  // @OneToOne(() => LessonDataReview)
  // @JoinColumn({name: 'lesson_data_review_id'})
  // lessonDataReview: LessonDataReview;


}