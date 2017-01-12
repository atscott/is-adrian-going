#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master"  ]; then
  firebase deploy --token $FIREBASE_TOKEN --project is-adrian-going
fi
