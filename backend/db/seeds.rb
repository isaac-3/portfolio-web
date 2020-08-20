User.destroy_all
Project.destroy_all
Blog.destroy_all

u1 = User.create({username: 'one', password: '123', name: 'name'})

Project.create({name: "Take A Trip", user_id: u1.id,code_url: 'https://github.com/isaac-3/final-project',project_url: 'https://www.youtube.com/watch?v=adlCActjmRc&feature=youtu.be'})
Project.create({name: "Shoptastic", user_id: u1.id,code_url: 'https://github.com/isaac-3/Shop-Mod4-React-Project',project_url: 'https://www.youtube.com/watch?v=QG8HfCflFWM&feature=youtu.be'})
Project.create({name: "Chrello", user_id: u1.id,code_url: 'https://github.com/bryantomoregie/Project-3-',project_url: 'https://www.youtube.com/watch?v=jqrZRoTbMS8'})

Blog.create({name: 'Improve Your Typing', user_id: u1.id, blog_url: 'https://medium.com/@isaacgc0596/improve-your-typing-48f7e795e1ef'})
Blog.create({name: 'Event Listeners', user_id: u1.id, blog_url: 'https://medium.com/@isaacgc0596/event-listeners-878a0d6fe101'})
Blog.create({name: 'Finding The Best Route', user_id: u1.id, blog_url: 'https://medium.com/@isaacgc0596/finding-the-best-route-34e4b752ae58'})
Blog.create({name: 'What Time Is It', user_id: u1.id, blog_url: 'https://medium.com/@isaacgc0596/what-time-is-it-2e353667291c'})
Blog.create({name: 'Choosing Paths Through Control Flow', user_id: u1.id, blog_url: 'https://medium.com/@isaacgc0596/choosing-paths-through-control-flow-50477255c055'})
