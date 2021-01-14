import {article} from './article';

export interface post {
  status: string;
  totalResults: number;
  articles: article[];
}
