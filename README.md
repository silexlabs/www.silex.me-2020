[This repository](https://github.com/lexoyo/11ty-boilerplate) is a template you can use to create a site with [11ty](https://11ty.dev) and [Silex website builder](https://www.silex.me)

It conains an action to deploy on github pages automatically

Here is how to start:

1. Fork [this repository](https://github.com/lexoyo/11ty-boilerplate) or click "use this template" (/!\ be sure to select "Include all branches")
1. Create a [deploy token here](https://github.com/settings/tokens) with the access write `public_repo`
1. [In the settings of the website, "secret" section, create a new secret](./settings/secrets/actions/new), call it `DEPLOY_TOKEN` and paste the token as its value 
1. [In the settings of the website, "secret" section, create a new secret](./settings/secrets/actions/new), call it `BASE_URL` and set its value to the name of your repository (e.g. `11ty-boilerplate`)
1. Create a website with [Stastic designer](https://design.stastic.net/)
1. Publish your site from Stastic designer to github as 11ty layout
1. Create a file like [test.md](./test.md), add `layout: YOUR PAGE NAME IN STASTIC`
