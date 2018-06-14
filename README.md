# Marzipants

Here's a proof-of-concept that React Native can work* (*lol) under Marzipan.

But, like, it's proof that we don't need Electron, right? 💪

## Running Marzipan

Check out [biscuitehh/MarzipanPlatter](https://github.com/biscuitehh/MarzipanPlatter) for a nice guide on getting Marzipan running.

## It's ✨Reasonably Good✨

It's surprising how well it's working. Besides the obvious mobile-specific things, it's running abouuuut as well as tvOS builds of React Native.

I wouldn't recommend using it. Ever. C'mon now.

## How It Looks

I have some screenshots* of the [RNTester](https://github.com/facebook/react-native/tree/master/RNTester) sample application from React Native.

(*photos, lols. My UI server dies _hard_ the second my Touchbar becomes active, which my screenshot shortcut does. Ehhh)

![](http://hi.notjo.sh/2c2W2w0J0U2M/DfNVhQUXUAIFt7b.jpg%20large.jpeg)
![](http://hi.notjo.sh/3o2f153c3h3n/DfNVeu0XcAEuLcM.jpg%20large.jpeg)
![](http://hi.notjo.sh/1B03143k2m0t/DfNVhS9W4AIUVG9.jpg%20large.jpeg)
![](http://hi.notjo.sh/3w3L2s3H2T1d/DfNVhNeXcAA4S-I.jpg%20large.jpeg)

## This Repo

I've committed everything. EVERYTHING. `node_modules`, especially, because that's where the bulk of the changes were.

### How to run

- Follow all the [MarzipanPlatter instructions first](https://github.com/biscuitehh/MarzipanPlatter)
- Open the Xcode project, run the `MarzipantsMacSwift` target, and you too have an unstable UI server and a poorly rendered app!
