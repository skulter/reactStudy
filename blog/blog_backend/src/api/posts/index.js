import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router(); // /api/posts/:id
post.get('/',postsCtrl.read);
post.delete('/',postsCtrl.remove);
post.patch('/',postsCtrl.update);

posts.use('/:id',postsCtrl.checkobjectId,post.routes())

// posts.get('/:id', postsCtrl.checkobjectId, postsCtrl.read);
// posts.delete('/:id', postsCtrl.checkobjectId, postsCtrl.remove);
// posts.patch('/:id', postsCtrl.checkobjectId, postsCtrl.update);
export default posts;
