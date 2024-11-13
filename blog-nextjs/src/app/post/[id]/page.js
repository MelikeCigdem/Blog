import BlogPost from '../../../components/BlogPost';

const mockPosts = [
  { id: 1, title: 'İlk Gönderi', content: 'Bu benim ilk gönderim...' },
  { id: 2, title: 'İkinci Gönderi', content: 'İkinci gönderim burada...' },
];

export default function PostDetailPage({ params }) {
  const post = mockPosts.find((post) => post.id === Number(params.id));

  if (!post) return <p>Gönderi bulunamadı.</p>;

  return <BlogPost post={post} />;
}
