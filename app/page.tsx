import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      <p className="mb-4">
        {`I'm a 17 year old software/DevOps engineer`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
