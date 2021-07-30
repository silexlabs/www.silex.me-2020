/////////////////////////////////////
/////////////////////////////////////
// FILE USED ONLY FOR WIDGETS
// WE USE FORESTRY FOR SHOWCASE
// also it is bugguy, see FIXME bellow
/////////////////////////////////////
/////////////////////////////////////
const axios = require('axios')
const MarkdownIt = require("markdown-it")
const md = new MarkdownIt()

module.exports = async function() {
  const url = (labels) => `https://api.github.com/repos/silexlabs/Silex/issues?labels=${labels.join('+')}`
  try {
    const [widget, showcase] = cleanup(await Promise.all([
      axios.get(url(['widget'])),
      axios.get(url(['showcase'])),
    ]))
    return {
      widget,
      showcase,
    }
  } catch(e) {
    console.error('Error, could not get github issues', e.response)
    if(process.env.DEBUG) {
      const [widget, showcase] = cleanup(TEST_RESULT)
      return {
        widget,
        showcase,
      }
    }
    throw new Error(e.response)
  }
}

function cleanup(listResults) {
  return listResults.map(results => results.data.map(({
    html_url,
    title,
    user,
    created_at,
    body,
  }) => {
    body = md.render(body)
    // FIXME: body is in markdown => should get and remove images and links from markdown
    const imageUrlArray = body.match(/(https?:\/\/\S+\.(?:jpg|png|gif|jpg<.|png<.|gif<.))/i)
    const linkUrlArray = body.match(/href="([^\'\"]+)/gi)
    return {
      html_url,
      title,
      user,
      created_at,
      // body: body.replace(/<img[^>]*>/g,""), // remove images
      body: body.replace(/(<([^>]+)>)/gi, ''), // remove all html tags
      url: linkUrlArray ? linkUrlArray[0].replace('href="', '') : null,
      image: imageUrlArray ? imageUrlArray[0] : null,
    }
  }))
}

const fakeData = {
  data: [
    {
      "url": "https://api.github.com/repos/silexlabs/Silex/issues/535",
      "repository_url": "https://api.github.com/repos/silexlabs/Silex",
      "labels_url": "https://api.github.com/repos/silexlabs/Silex/issues/535/labels{/name}",
      "comments_url": "https://api.github.com/repos/silexlabs/Silex/issues/535/comments",
      "events_url": "https://api.github.com/repos/silexlabs/Silex/issues/535/events",
      "html_url": "https://github.com/silexlabs/Silex/issues/535",
      "id": 201416631,
      "node_id": "MDU6SXNzdWUyMDE0MTY2MzE=",
      "number": 535,
      "title": "Smart & simple Silex template: one page responsive website with a hero section and animations",
      "user": {
        "login": "lexoyo",
        "id": 715377,
        "node_id": "MDQ6VXNlcjcxNTM3Nw==",
        "avatar_url": "https://avatars.githubusercontent.com/u/715377?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/lexoyo",
        "html_url": "https://github.com/lexoyo",
        "followers_url": "https://api.github.com/users/lexoyo/followers",
        "following_url": "https://api.github.com/users/lexoyo/following{/other_user}",
        "gists_url": "https://api.github.com/users/lexoyo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/lexoyo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/lexoyo/subscriptions",
        "organizations_url": "https://api.github.com/users/lexoyo/orgs",
        "repos_url": "https://api.github.com/users/lexoyo/repos",
        "events_url": "https://api.github.com/users/lexoyo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/lexoyo/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 75977675,
          "node_id": "MDU6TGFiZWw3NTk3NzY3NQ==",
          "url": "https://api.github.com/repos/silexlabs/Silex/labels/template",
          "name": "template",
          "color": "207de5",
          "default": false,
          "description": null
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 20,
      "created_at": "2017-01-17T21:54:50Z",
      "updated_at": "2018-12-18T15:25:53Z",
      "closed_at": null,
      "author_association": "MEMBER",
      "active_lock_reason": null,
      "body": "## Smart and simple website template\r\n\r\nHere is a template advertising a fictional mobile app or online service. This is an HTML template to edit with [Silex website editor](https://www.silex.me), the open source website builder(free and open source).\r\n\r\nIt is made with <a href=\"https://www.silex.me\">Silex</a>, and can be hosted anywhere. It is responsive to fit any screen size with the maximum reach.\r\n\r\n- [download](https://templates.silex.me/) then follow instructions bellow\r\n- [preview](https://silex-templates.silex.me/smart-simple/)\r\n\r\n[![screenshot](https://silex-templates.silex.me/smart-simple/screenshot.png)](https://silex-templates.silex.me/smart-simple/)\r\n\r\n## Instructions\r\n\r\nTo make your own website based on this template, [download the archive here](https://templates.silex.me/), unzip it to your Dropbox and open the file `/smart-simple/editable.html` with [Silex editor](https://editor.silex.me/) (online).\r\n\r\nThen edit the texts, change the links and publish your site online (file menu, then \"publish\")\r\n\r\n## Related templates\r\n\r\n- [Galaxee template, one page responsive website with active menu ($8)](https://github.com/silexlabs/Silex/issues/489)\r\n- [\"Online Services\" template (free)](https://github.com/silexlabs/Silex/issues/157)\r\n- [Tiptop organization template (1$)](https://github.com/silexlabs/Silex/issues/83)\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/silexlabs/Silex/issues/489",
      "repository_url": "https://api.github.com/repos/silexlabs/Silex",
      "labels_url": "https://api.github.com/repos/silexlabs/Silex/issues/489/labels{/name}",
      "comments_url": "https://api.github.com/repos/silexlabs/Silex/issues/489/comments",
      "events_url": "https://api.github.com/repos/silexlabs/Silex/issues/489/events",
      "html_url": "https://github.com/silexlabs/Silex/issues/489",
      "id": 179706346,
      "node_id": "MDU6SXNzdWUxNzk3MDYzNDY=",
      "number": 489,
      "title": "AIR template, multi page responsive website for travel agencies",
      "user": {
        "login": "lexoyo",
        "id": 715377,
        "node_id": "MDQ6VXNlcjcxNTM3Nw==",
        "avatar_url": "https://avatars.githubusercontent.com/u/715377?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/lexoyo",
        "html_url": "https://github.com/lexoyo",
        "followers_url": "https://api.github.com/users/lexoyo/followers",
        "following_url": "https://api.github.com/users/lexoyo/following{/other_user}",
        "gists_url": "https://api.github.com/users/lexoyo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/lexoyo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/lexoyo/subscriptions",
        "organizations_url": "https://api.github.com/users/lexoyo/orgs",
        "repos_url": "https://api.github.com/users/lexoyo/repos",
        "events_url": "https://api.github.com/users/lexoyo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/lexoyo/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 75977675,
          "node_id": "MDU6TGFiZWw3NTk3NzY3NQ==",
          "url": "https://api.github.com/repos/silexlabs/Silex/labels/template",
          "name": "template",
          "color": "207de5",
          "default": false,
          "description": null
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 11,
      "created_at": "2016-09-28T08:08:14Z",
      "updated_at": "2018-12-18T15:28:44Z",
      "closed_at": null,
      "author_association": "MEMBER",
      "active_lock_reason": null,
      "body": "## AIR template\r\n\r\nHere is [a great template for travel agencies](http://silex-templates.silex.me/air/). It is made with [Silex free website builder](http://www.silex.me/), and it is hosted for free on github. This work is free and creative commons. The pictures come from unslplash.com community. You can reuse everything for anything.\r\n\r\n[![screenshot of free template](https://silex-templates.silex.me/air/screenshot.png)](https://silex-templates.silex.me/air/)\r\n\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/silexlabs/Silex/issues/339",
      "repository_url": "https://api.github.com/repos/silexlabs/Silex",
      "labels_url": "https://api.github.com/repos/silexlabs/Silex/issues/339/labels{/name}",
      "comments_url": "https://api.github.com/repos/silexlabs/Silex/issues/339/comments",
      "events_url": "https://api.github.com/repos/silexlabs/Silex/issues/339/events",
      "html_url": "https://github.com/silexlabs/Silex/issues/339",
      "id": 109635857,
      "node_id": "MDU6SXNzdWUxMDk2MzU4NTc=",
      "number": 339,
      "title": "Yet another resume template, 3 pages CV (free)",
      "user": {
        "login": "lexoyo",
        "id": 715377,
        "node_id": "MDQ6VXNlcjcxNTM3Nw==",
        "avatar_url": "https://avatars.githubusercontent.com/u/715377?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/lexoyo",
        "html_url": "https://github.com/lexoyo",
        "followers_url": "https://api.github.com/users/lexoyo/followers",
        "following_url": "https://api.github.com/users/lexoyo/following{/other_user}",
        "gists_url": "https://api.github.com/users/lexoyo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/lexoyo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/lexoyo/subscriptions",
        "organizations_url": "https://api.github.com/users/lexoyo/orgs",
        "repos_url": "https://api.github.com/users/lexoyo/repos",
        "events_url": "https://api.github.com/users/lexoyo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/lexoyo/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 75977675,
          "node_id": "MDU6TGFiZWw3NTk3NzY3NQ==",
          "url": "https://api.github.com/repos/silexlabs/Silex/labels/template",
          "name": "template",
          "color": "207de5",
          "default": false,
          "description": null
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2015-10-03T17:50:54Z",
      "updated_at": "2018-12-18T15:25:32Z",
      "closed_at": null,
      "author_association": "MEMBER",
      "active_lock_reason": null,
      "body": "- [download](https://templates.silex.me/) then follow instructions bellow\r\n- [preview](https://silex-templates.silex.me/perso2/)\r\n\r\nHere is a [3 pages online resume template, for you to advertise your skills and centralize the links about your professional life](https://silex-templates.silex.me/perso2/). It is made with [Silex](https://www.silex.me/), and it is hosted for free on [github pages](https://pages.github.com/).\r\n\r\n[![screenshot](https://silex-templates.silex.me/perso2/screenshot-678x336.png)](https://silex-templates.silex.me/perso2/)\r\n## Instructions\r\n\r\nTo make your own website based on this template, [download the archive here](https://templates.silex.me/), unzip it to your Dropbox and open the file `/templates/perso2/editable.html` with [Silex editor](https://editor.silex.me/) (online).\r\n\r\nThen edit the texts, change the links and publish your site online (file menu, then \"publish\")\r\n## Related templates\r\n- [Online CV template, very simple and free](https://github.com/silexlabs/Silex/issues/338)\r\n- [3 pages CV template (free)](https://github.com/silexlabs/Silex/issues/258)\r\n- [Beautiful about me page template](https://github.com/silexlabs/Silex/issues/167)\r\n- [Perso1, Richard favorite free template](https://github.com/silexlabs/Silex/issues/224)\r\n",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/silexlabs/Silex/issues/319",
      "repository_url": "https://api.github.com/repos/silexlabs/Silex",
      "labels_url": "https://api.github.com/repos/silexlabs/Silex/issues/319/labels{/name}",
      "comments_url": "https://api.github.com/repos/silexlabs/Silex/issues/319/comments",
      "events_url": "https://api.github.com/repos/silexlabs/Silex/issues/319/events",
      "html_url": "https://github.com/silexlabs/Silex/issues/319",
      "id": 104295435,
      "node_id": "MDU6SXNzdWUxMDQyOTU0MzU=",
      "number": 319,
      "title": "Design agency template",
      "user": {
        "login": "Stuff31",
        "id": 6841971,
        "node_id": "MDQ6VXNlcjY4NDE5NzE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/6841971?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Stuff31",
        "html_url": "https://github.com/Stuff31",
        "followers_url": "https://api.github.com/users/Stuff31/followers",
        "following_url": "https://api.github.com/users/Stuff31/following{/other_user}",
        "gists_url": "https://api.github.com/users/Stuff31/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Stuff31/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Stuff31/subscriptions",
        "organizations_url": "https://api.github.com/users/Stuff31/orgs",
        "repos_url": "https://api.github.com/users/Stuff31/repos",
        "events_url": "https://api.github.com/users/Stuff31/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Stuff31/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 75977675,
          "node_id": "MDU6TGFiZWw3NTk3NzY3NQ==",
          "url": "https://api.github.com/repos/silexlabs/Silex/labels/template",
          "name": "template",
          "color": "207de5",
          "default": false,
          "description": null
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2015-09-01T15:46:11Z",
      "updated_at": "2018-12-16T21:35:00Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "## Design agency template\r\n\r\nThis is [a template made for design agencies](https://silex-templates.silex.me/agency/).  This work is free and creative commons. The pictures come from unslplash.com community. You can reuse everything for anything.\r\n\r\n![agency template](https://raw.githubusercontent.com/silexlabs/silex-templates/gh-pages/agency/screenshot.png)\r\n",
      "performed_via_github_app": null
    },
  ]
}
const TEST_RESULT = [
  fakeData,
  fakeData,
]

