import type { relatedPost } from '@types'
import Image from 'next/image'
import Link from 'next/link'
import AvatarImg from 'public/page/about/Profile_Avatar@2x.png'

const RelatedPosts = ({
  posts,
  tag,
}: {
  posts: relatedPost[]
  tag: string[] | [] | null
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
                placeholder='blur'
                src={AvatarImg}
                alt='IceJI Avatar image'
                height={128}
                width={128}
              />
            </div>
            <div>
              <h2 className='text-3xl font-bold'>Jirayu Ninlapun</h2>
              <p className='mt-2 opacity-80'>
                Cinematic Art, Bangkok University. Experience: 7 years in
                Graphics Design, 5 years in VFX & Editor, and 2 years in Web
                Developer.
              </p>
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
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL={
                    'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                  }
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
