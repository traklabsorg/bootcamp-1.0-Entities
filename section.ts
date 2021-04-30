import { EntityBase } from "./submodules/platform-3.0-Framework/EntityBase/EntityBase";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Channel } from "./channel";
import { Lesson } from "./lesson";
import { LessonDataReview } from "./lessonDataReview";
import { SectionReview } from "./sectionReview";

@Entity("sections")
@Unique(["channelId","title"])
export class Section extends EntityBase{

  @Column({ name: 'title',nullable:true })
  title: string;

  @Column("text", {name:'contents', array: true ,nullable:true})
  contents: string[];

  @Column("text", {name:'live_contents', array: true ,nullable:true})
  liveContents: string[];

  @Column({ name: 'section_details',nullable:true, type:"json" })
  sectionDetails: string;

  @Column({ name: "section_type", nullable: true })
  sectionType: string;

  @Column({ name: 'channel_id',nullable:true})
  channelId: number;

  @Column({ name: 'is_Hidden',default: false,})
  isHidden: boolean;

  @OneToMany((type) => Lesson, (lessons) => lessons.section, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  lesson: Lesson[]

  @OneToMany((type) => SectionReview, (sectionReview) => sectionReview.section, {
		onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  sectionReview: SectionReview[]

  @ManyToOne((type) => Channel, channel => channel.section, {
    onDelete: 'CASCADE',onUpdate: 'RESTRICT'
  })
  @JoinColumn({ name: 'channel_id' })
  channel: Channel;


  // @OneToOne(() => LessonDataReview)
  // @JoinColumn({name: 'lesson_data_review_id'})
  // lessonDataReview: LessonDataReview;


}