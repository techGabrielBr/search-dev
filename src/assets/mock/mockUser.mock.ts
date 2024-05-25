import { User } from "../../app/public/models/User";

export const mockUser: User = {
  login: 'testuser',
  name: 'Test User',
  avatar_url: 'https://example.com/avatar.jpg',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  location: 'Somewhere',
  followers: 100,
  following: 50,
  company: 'Test Company',
  blog: 'https://example.com/blog',
  twitter_username: 'testuser',
  repos_url: 'https://api.github.com/users/testuser/repos',
  email: 'testuser@example.com'
};
