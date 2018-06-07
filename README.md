# Marzipants

Here's a proof-of-concept that React Native can work* (*lol) under Marzipan.

But, like, it's proof that we don't need Electron, right? 💪

## Running Marzipan

Check out [biscuitehh/MarzipanPlatter](https://github.com/biscuitehh/MarzipanPlatter) for a nice guide on getting Marzipan running.

## It's ⚡️Extremely Broken⚡️

A bunch of useful stuff isn't available (?!) under Marzipan, most notably here is `NSTextStorage`, so text measurement and drawing is...broken.

## How It Looks

![](http://hi.notjo.sh/3o3X070X2h1T/notjosh_2018-Jun-08.jpg)

That's the real actual `App.js` that you'd get from `react-native init` running.

Weirdly, I can't take screenshots while Marzipan is running. I think it's arguing with the Touchbar UI server? Who knows.

## This Repo

I've committed everything. EVERYTHING. `node_modules`, especially, because that's where the bulk of the changes were.

You should be able to pull it down and have everything you need. Just run the `MarzipantsMacSwift` target, and you too have an unstable UI server and a poorly rendered app!
