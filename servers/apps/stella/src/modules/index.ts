import { UploadModule } from './upload/upload.module'
// import { PostsModule } from './posts/posts.module'
// import { PetsModule } from './pets/pets.module'
import { StatusModule } from './status/status.module'
import { DebugModule } from './debug/debug.module'
import { GqlModule } from './gql/gql.module'

const Modules = [StatusModule, DebugModule, UploadModule, GqlModule]
export { Modules }
