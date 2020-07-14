User.destroy_all
Project.destroy_all
Blog.destroy_all

u1 = User.create({username: 'one', password: '123', name: 'name'})

Project.create({name: "one", user_id: u1.id, project_url: 'youtube.com'})
Project.create({name: "two", user_id: u1.id, project_url: 'youtube.com'})
Project.create({name: "three", user_id: u1.id, project_url: 'youtube.com'})

Blog.create({name: 'one', user_id: u1.id, blog_url: 'youtube.com'})
Blog.create({name: 'two', user_id: u1.id, blog_url: 'youtube.com'})
Blog.create({name: 'three', user_id: u1.id, blog_url: 'youtube.com'})

