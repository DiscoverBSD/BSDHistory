# BSDHistory

This is repo for https://bsdhistory.discoverbsd.com, website to share short *twitter-sized* facts about history of BSD based OSes.

## More information

* article at [DiscoverBSD](https://discoverbsd.blogspot.com/2015/07/introducing-bsdhistory.html) (announcement)
* article at blog of [Jan Hovancik](https://hovancik.net/blog/2015/07/25/bsdhistory.html) (background)

## Contribute
You can add your own fact via github fork mechanism. They have a really nice tutorials.

* fork ([tutorial](https://help.github.com/articles/fork-a-repo/).)
* add your stuff to data/-bsd-.json
* create pull request ([tutorial](https://help.github.com/articles/creating-a-pull-request/).)
* prosper

### -bsd-.json

Each OS has its file, eg: `miros.json` for MirOS. Format is pretty much self-explanatory.

```json
{
  "text": "#BSDHistory : #MirOS BSD started on 29 Aug 2002, combining #OpenBSD (-current) and #NetBSD (-current) at that time",
  "link":"https://www.mirbsd.org/history.htm"
}

```
So when forking, add your own and then create PR so someone can fact check it. Length of text should not be more than 100 characters (because we want to be able to share it on twitter).

If you are adding whole new OS, do not forget to add it to `js/script.js`, line 6. 

## License

Copyright © 2015 Jan Hovancik <conta.srdr@gmail.com>

This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See http://www.wtfpl.net/ for more details.
