import UserProfile from '@/components/UserProfile';
import BlogList from '../components/BlogList';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function HomePage() {
  return (
    <div>
      <UserProfile/>
      <ThemeSwitcher />
      <h1>Blog Uygulaması</h1>
      <BlogList />
    </div>
  );
}
