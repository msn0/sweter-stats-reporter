# Sweter custom reporter

This project refers to ``sweter`` and shows how to write custom reporters. If you are not familiar with ``sweter`` then take a look at https://github.com/msn0/sweter first.

## The Example

Simply pass node module name via ``--custom-reporter``

```
$ sweter http://google.com --custom-reporter my-reporter
```

Extra params can be passed like that

```
$ sweter http://google.com --custom-reportermy-reporter --my-reporter-foo bar
```
