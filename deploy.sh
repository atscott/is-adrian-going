#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master"  ]; then
  firebase deploy --project=is-adrian-going --token=$FIREBASE_TOKEN
fi
