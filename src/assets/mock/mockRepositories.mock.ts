import { Repository } from "../../app/public/models/Repository";

export const mockRepositories: Repository[] = [
  {
    name: 'project1',
    description: 'Description for project1',
    html_url: 'https://github.com/user/project1',
    stargazers_count: 10,
    updated_at: '2022-05-01'
  },
  {
    name: 'project2',
    description: 'Description for project2',
    html_url: 'https://github.com/user/project2',
    stargazers_count: 20,
    updated_at: '2022-05-02'
  },
  {
    name: 'project3',
    description: 'Description for project3',
    html_url: 'https://github.com/user/project3',
    stargazers_count: 30,
    updated_at: '2022-05-03'
  }
];
