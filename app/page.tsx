import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi!
      </h1>
      <p className="mb-4">
        {`Welcome to my little corner of the internet :)`}
      </p>
      <p className="mb=4">
        {'Feel free to look around!'}
      </p>
      <div className="my-8">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Blog Posts
        </h1>
        <BlogPosts />
      </div>
    </section>
  )
}
