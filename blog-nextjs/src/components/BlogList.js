import Link from 'next/link';

const mockPosts = [
  { id: 1, title: 'İlk Gönderi', content: 'Bu benim ilk gönderim...' },
  { id: 2, title: 'İkinci Gönderi', content: 'İkinci gönderim burada...' },
];

export default function BlogList() {
  return (
    <div>
      {mockPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`/post/${post.id}`}>
            Devamını oku...
          </Link>
        </div>
      ))}
    </div>
  );
}
