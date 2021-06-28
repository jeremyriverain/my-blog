module.exports = [
  {
    name: 'homepage',
    url: 'http://localhost:3000'
  },
  {
    name: 'blog list',
    url: 'http://localhost:3000/posts'
  },
  {
    name: 'blog post',
    url:
      'http://localhost:3000/posts/en/how-to-use-gitlab-ci-and-php-stan-to-improve-code-quality-in-your-symfony-project'
  },
  {
    name: 'project list',
    url: 'http://localhost:3000/projects'
  },
  {
    name: 'project example',
    waitForSelector: 'img[lazy=loaded]',
    url: 'http://localhost:3000/projects/klubin'
  },
  {
    name: 'contact',
    url: 'http://localhost:3000/contact'
  }
]
