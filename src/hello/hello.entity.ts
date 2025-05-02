import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Hello {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;
}