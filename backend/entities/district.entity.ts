import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import {AbstractEntity} from './abstract.entity'
@Entity({name: 'district'})
export class DistrictEntity extends AbstractEntity {
  @Index()
  @Column('varchar')
  name: string;

  @Index()
  @Column('varchar')
  user: string;
}