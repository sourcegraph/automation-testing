package main

import "gopkg.in/inconshreveable/log15.v2"

func LogWarn(msg string) {
	log15.Warn(msg, "repository", "automation-testing")
}
