package main

import "github.com/inconshreveable/log15"

func LogWarn(msg string) {
	log15.Warn(msg, "repository", "automation-testing")
}
