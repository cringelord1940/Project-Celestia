import type { relatedPost } from '@types'
// import Image from 'next/image'
import { Image } from '@components'
import Link from 'next/link'
import { AuthorData } from '@/contents/pages/post.author'
// import AvatarImg from 'public/page/about/Profile_Avatar@2x.png'

const RelatedPosts = ({
  posts,
  tag,
  isPreview,
}: {
  posts: relatedPost[]
  tag: string[] | [] | null
  isPreview: boolean
}) => {
  return (
    <>
      <div className=''>
        <div className=''>
          {tag && (
            <div>
              {tag.map((v: string, i: number) => (
                <button className='_post-tag' key={i}>
                  {v}
                </button>
              ))}
            </div>
          )}
          <div className='flex space-x-4 py-12'>
            <div>
              <Image
                // placeholder='blur'
                src={AuthorData.image.avatar}
                alt='IceJI Avatar image'
                height={128}
                width={128}
              />
            </div>
            <div>
              <h2 className='text-3xl font-bold'>{AuthorData.name}</h2>
              <p className='mt-2 opacity-80'>{AuthorData.description}</p>
            </div>
          </div>
        </div>
        <div className=''>
          {posts.map((post) => (
            <Link href={post.slug} key={post.slug}>
              <div>
                <Image
                  alt={post.title}
                  src={post.coverImage.url}
                  // layout='fill'
                  objectFit='cover'
                  // placeholder='blur'
                  // blurDataURL={
                  //   'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                  // }
                  unoptimized={isPreview}
                />
                <div>
                  <h3>{post.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export { RelatedPosts }
